import React from 'react';
import { mount } from 'enzyme';
import SingleComment from '../components/SingleComment';

describe('<SingleComment />', () => {

  let wrapper;
  let handleClick;

  beforeEach(() => {
    handleClick = jest.fn();
    wrapper = mount(
      <SingleComment
        id="1"
        author="Me"
        onClick={handleClick}
        currentPersona="Me" 
        date="2018-01-01"
        comment="Hello"
      >x
      </SingleComment>);
  });

  it('should display remove button if author === currentPersona ', () => {
    wrapper.setProps({ currentPersona: 'Same', author: 'Same' });
    expect(wrapper.find('Button').length).toEqual(1);
  })

  it('should not display remove button if author !== currentPersona ', () => {
    wrapper.setProps({ currentPersona: 'Same', author: 'Not same' });
    expect(wrapper.find('Button').length).toEqual(0);
  })

  it('should call onclick', () => {
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.find('Button').simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  })



})