import React from 'react';
import { mount } from 'enzyme';
import Comments from '../components/Comments';

describe('<Comments />', () => {
  
  let wrapper;

  const mockComment = [
    {
      comment: 'Cool!',
      id: '1',
      postId: '1',
      author: 'Me',
      date: '2018-01-25 13:37:00'
    }
  ]

  beforeEach(() => {
    jest.resetModules();
    localStorage.setItem('comments', JSON.stringify(mockComment));
    wrapper = mount(<Comments postId="1" currentPersona="" />);
  });

  it('should set comments in state', () => {
    expect(wrapper.state('comments')).toEqual(mockComment);
  });

  it('should display comments', () => {
    const firstComment = wrapper.find('SingleComment').first();
    const firstCommentText = firstComment.find('p').first().text();
    expect(firstCommentText).toEqual('Cool!');
  });

  it('should remove comment', () => {
    expect(wrapper.state('comments')).toHaveLength(1);
    wrapper.instance().removeComment('1');
    expect(wrapper.state('comments')).toHaveLength(0);
  });

});
