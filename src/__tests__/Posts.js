import React from 'react';
import { mount } from 'enzyme';
import Posts from '../components/Posts';

describe('<Posts />', () => {

  let wrapper;

  const mockPost = [
    {
      id: '1', 
      title: 'title',
      content: 'content',
      author: 'test',
      date: '2018-01-25 13:37:00'
    }
  ]

  beforeEach(() => {
    localStorage.clear();
    jest.resetModules();
    localStorage.setItem('posts', JSON.stringify(mockPost));
    wrapper = mount(<Posts currentPersona="test" />);
  })

  it('should render a post', () => {
    expect(wrapper.find('SinglePost').length).toEqual(1);
  })

  it('should remove a post', () => {
    expect(wrapper.state('posts')).toHaveLength(1);
    wrapper.instance().removePost('1');
    expect(wrapper.state('posts')).toHaveLength(0);
  })

})