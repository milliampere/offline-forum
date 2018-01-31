import React from 'react';
import { shallow, mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
};

describe('<Bot/>', () => {

  it('should put onsubmit message in state', () => {
    const wrapper = shallow(<Bot />);
    wrapper.instance().onSubmit('Hello');
    expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
      message: 'Hello',
    }));
  })

  it('should put reply message in state', () => {
    jest.useFakeTimers();
    const wrapper = mount(<Bot />);
    wrapper.instance().sendReply();
    jest.runAllTimers();
    flushPromises().then(() => {
      expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
        message: expect.any(String)
      }));
    });
  })

  it('should render a message', ()=> {
    const wrapper = mount(<Bot />);
    wrapper.instance().onSubmit('Hello, how are you?');
    expect(wrapper.html()).toContain('Hello, how are you?');
  });


})