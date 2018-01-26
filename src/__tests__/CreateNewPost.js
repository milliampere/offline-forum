import React from 'react';
import { mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('<CreateNewPost />', () => {
  
  let fakeUpdateFunction; 
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    fakeUpdateFunction = jest.fn();
    wrapper = mount(<CreateNewPost author="test" updatePosts={fakeUpdateFunction} />);
  });

  it('should change state on input onchange', () => {
    expect(wrapper.state('title')).toBe('');
    wrapper.instance().onChange({target: {value: 'My title', name: 'title'}})
    expect(wrapper.state('title')).toBe('My title');
  }); 

  it('should call updatePosts', () => {
    wrapper.setState({title: 'Titel', content: 'Content'});
    wrapper.find('form').simulate('submit');
    expect(fakeUpdateFunction).toHaveBeenCalled();
  });

  it('should set post in local storage', () => {
    wrapper.setState({title: 'Titel', content: 'Content'});
    wrapper.find('form').simulate('submit');
    const posts = JSON.parse(localStorage.getItem('posts'));
    expect(posts).toEqual(expect.arrayContaining([expect.objectContaining({
      title: 'Titel',
      content: 'Content'
    })]));
  });

});