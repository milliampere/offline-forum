import React from 'react';
import { mount } from 'enzyme';
import PersonaSwitcher from '../components/PersonaSwitcher';

it('should handle the onchange event', () => {
  const handleChange = jest.fn();
  const wrapper = mount(<PersonaSwitcher currentPersona="zac" changePersona={handleChange} />);
  wrapper.find('select').simulate('change', {target: {value: 'morgana'}});
  expect(handleChange).toHaveBeenCalledTimes(1);
});
