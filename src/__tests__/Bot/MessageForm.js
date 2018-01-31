import React from 'react';
import { mount } from 'enzyme';
import MessageForm from '../../components/Bot/MessageForm';

describe('<MessageForm/>', () => {

  const fakeOnSubmit = jest.fn();
  
  it('should focus on input', () => {
    mount(<MessageForm onSubmit={fakeOnSubmit} />); 
    const focusedElement = document.activeElement; 
    expect(focusedElement.name).toBe('userMessage');
  })

  it('should update state onchange', () => {
    const wrapper = mount(<MessageForm onSubmit={fakeOnSubmit} />); 
    wrapper.find('input[name="userMessage"]').simulate('change', { target: {
      name:'userMessage', 
      value:'Hello'}
    });
    expect(wrapper.state().userMessage).toBe('Hello'); 
  })

  it('should call onsubmit', () => {
    const wrapper = mount(<MessageForm onSubmit={fakeOnSubmit} />); 
    expect(fakeOnSubmit).toHaveBeenCalledTimes(0);
    wrapper.find('form').simulate('submit');
    expect(fakeOnSubmit).toHaveBeenCalledTimes(1);
  })

  it('should clear state onsubmit', () => {
    const wrapper = mount(<MessageForm onSubmit={fakeOnSubmit} />); 
    wrapper.setState({ userMessage: 'Hello' });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state().userMessage).toBe('');
  })

})