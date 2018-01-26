import React from 'react';
import { mount } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

describe('<CreateNewComment />', () => {
  
  let fakeUpdateFunction; 
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    fakeUpdateFunction = jest.fn();
    wrapper = mount(<CreateNewComment author="test" postId="1" updateComments={fakeUpdateFunction} />);
  });

  it('should change state on input onchange', () => {
    expect(wrapper.state('comment')).toBe('');
    wrapper.instance().onChange({target: {value: 'My comment', name: 'comment'}})
    expect(wrapper.state('comment')).toBe('My comment');
  }); 

  it('should call updateComments', () => {
    wrapper.setState({comment: 'Comment'});
    wrapper.find('form').simulate('submit');
    expect(fakeUpdateFunction).toHaveBeenCalled();
  });

  it('should set comment in local storage', () => {
    wrapper.setState({comment: 'Comment'});
    wrapper.find('form').simulate('submit');
    const comments = JSON.parse(localStorage.getItem('comments'));
    expect(comments).toEqual(expect.arrayContaining([expect.objectContaining({
      comment: 'Comment'
    })]));
  });

});