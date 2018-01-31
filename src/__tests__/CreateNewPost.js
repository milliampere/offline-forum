import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

const fakeUpdateFunction = jest.fn(); 
let wrapper;

describe('onchange tests', () => {

  wrapper = mount(<CreateNewPost author="test" updatePosts={fakeUpdateFunction} />);

  it('should change state on title onchange', () => {
    expect(wrapper.state('title')).toBe('');
    wrapper.find('#title').simulate('change', {target: {value: 'My title', name: 'title'}})
    expect(wrapper.state('title')).toBe('My title');
  }); 

  it('should change state on content onchange', () => {
    expect(wrapper.state('content')).toBe('');
    wrapper.find('#content').simulate('change', {target: {value: 'My content', name: 'content'}})
    expect(wrapper.state('content')).toBe('My content');
  });

})

describe('submit tests', () => {
  
  beforeEach(() => {
    wrapper = mount(<CreateNewPost author="test" updatePosts={fakeUpdateFunction} />);
    wrapper.setState({title: 'TestTitle', content: 'TestContent'});
    wrapper.find('form').simulate('submit');
  });

  afterEach(() => {
    localStorage.clear();
  })

  it('should call updatePosts', () => {
    expect(fakeUpdateFunction).toHaveBeenCalledTimes(1);
  });

  it('should put post in local storage', () => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    expect(posts[0]).toEqual(expect.objectContaining({
      title: 'TestTitle',
      content: 'TestContent'
    }));
  });

  it('should clear form after submit', () => {
    expect(wrapper.state('title')).toBe('');
    expect(wrapper.state('content')).toBe('');
  })

});