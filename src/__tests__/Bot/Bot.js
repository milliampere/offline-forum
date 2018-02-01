import React from 'react';
import { mount } from 'enzyme';
import Bot from '../../components/Bot/Bot';

jest.useFakeTimers();

function flushAllPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('<Bot/>', () => {

  it('should put user message in state', () => {
    const wrapper = mount(<Bot />);
    wrapper.find('MessageForm').simulate('submit');
    expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
      message: expect.any(String),
      bot: false
    }));
  });

  it('should render user message', ()=> {
    const wrapper = mount(<Bot />);
    wrapper.find('MessageForm').simulate('submit');
    expect(wrapper.find('Message').prop('bot')).toBe(false);
  });

  it('should put bot reply in state', () => {
    const wrapper = mount(<Bot />);
    wrapper.find('MessageForm').simulate('submit');
    jest.runAllTimers();
    return flushAllPromises().then(() => {
      expect(wrapper.state().messages[1]).toEqual(expect.objectContaining({
        message: expect.any(String),
        bot: true
      }));
    })
  })

  it('should render bot reply message', () => {
    const wrapper = mount(<Bot />);
    wrapper.find('MessageForm').simulate('submit');
    jest.runAllTimers();
    return flushAllPromises().then(() => {
      const reply = wrapper.state().messages[1].message;
      expect(wrapper.html()).toContain(reply);
    })
  })

  test('typing indicator', () => {
    const wrapper = mount(<Bot />);
    wrapper.instance().sendReply();  
    jest.runAllTimers();  
    expect(wrapper.state('typing')).toBe(true);
    return flushAllPromises().then(() => {
      expect(wrapper.state('typing')).toBe(false);
    });
  })

  it('should get bot reply from api and put it in state', () => {
    const wrapper = mount(<Bot />);
    jest.useFakeTimers();
    wrapper.instance().sendReply();
    jest.runAllTimers();
    return flushAllPromises().then(() => {
      expect(wrapper.state().messages[0]).toEqual(expect.objectContaining({
        message: expect.any(String),
        bot: true
      }));
    });
  })

})

