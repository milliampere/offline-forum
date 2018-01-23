import React from 'react';
import { mount } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {
  it('should display the correct danger style', () => {
    const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';
    const wrapper = mount(<Button onClick={() => {}} danger >Button</Button>);
    expect(wrapper.find("[data-test='button']").hasClass(dangerStyle)).toBeTruthy()
  });
});