import React from 'react';
import { mount } from 'enzyme';
import Posts from '../components/Posts';

describe('<Posts />', () => {

  let wrapper;

  const mockPosts = [
    {
      id: '1', 
      title: 'title',
      content: 'content',
      author: 'test',
      date: '2018-01-25 13:37:00'
    },
    {
      id: '2', 
      title: 'title',
      content: 'content',
      author: 'test',
      date: '2018-01-24 13:37:00'
    }
  ]

  beforeEach(() => {
    localStorage.setItem('posts', JSON.stringify(mockPosts));
    wrapper = mount(<Posts currentPersona="test" />);
  })

  afterEach(() => {
    localStorage.clear();
  });

  it('should render posts', () => {
    expect(wrapper.find('SinglePost').length).toEqual(2);
  })

  it('should remove a post', () => {
    expect(wrapper.state('posts')).toHaveLength(2);
    wrapper.instance().removePost('1');
    expect(wrapper.state('posts')).toHaveLength(1);
  })

})