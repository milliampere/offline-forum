import React from 'react';
import { mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

it('should call change function', () => {
  const handleChange = jest.fn();
  const wrapper = mount(<PersonaSwitcher currentPersona="zac" changePersona={handleChange} />);
  wrapper.find('select').simulate('change', {target: {value: 'morgana'}});
  expect(handleChange).toHaveBeenCalledTimes(1);
});

it('should render current persona as value in select', () => {
  const handleChange = jest.fn();
  const wrapper = mount(<PersonaSwitcher currentPersona="test" changePersona={handleChange} />);
  expect(wrapper.find('select').props().value).toEqual('test');  
});