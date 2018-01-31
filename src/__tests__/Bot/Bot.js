import React from 'react';
import { shallow, mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';

describe('<Bot/>', () => {

  it('should put user message in state', () => {
    const wrapper = shallow(<Bot />);
    wrapper.instance().onSubmit('Hello');
    expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
      message: 'Hello',
      bot: false
    }));
  })

  it('should render a message', ()=> {
    const wrapper = mount(<Bot />);
    wrapper.instance().onSubmit('Hello, how are you?');
    expect(wrapper.html()).toContain('Hello, how are you?');
  });


})

describe('bot reply integration', () => {

  function flushAllPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

  const wrapper = mount(<Bot />);
  jest.useFakeTimers();
  wrapper.instance().sendReply();
  jest.runAllTimers();

  it('should get reply from api and put it in state', () => {
    return flushAllPromises().then(() => {
      expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
        message: expect.any(String),
        bot: true
      }));
    });
  })

  it('should render reply', () => {
    const reply = wrapper.state().messages[0].message;
    expect(wrapper.html()).toContain(reply);
  })


})