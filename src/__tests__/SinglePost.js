import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('<SinglePost />', () => {

  const handleClick = jest.fn();
  const wrapper = mount(
    <SinglePost 
      title="TestTitle" 
      content="TestContent" 
      id="123" 
      author="TestPerson" 
      currentPersona="TestPerson" 
      date="2018-01-01" 
      onClick={handleClick} 
    />
  );

  it('should display button when author === persona', () => {
    expect(wrapper.find('Button').length).toEqual(1);
  })

  it('should call click with id', () => {
    expect(handleClick).toHaveBeenCalledTimes(0);
    wrapper.find('[data-test="button"]').first().simulate('click');
    expect(handleClick).toHaveBeenCalledWith('123');
  }) 

  it('should not display button when author !== persona', () => {
    wrapper.setProps({ currentPersona: 'AnotherPerson' });
    expect(wrapper.find('Button').length).toEqual(0);
  })

  it('should render the post title and content', () => {
    expect(wrapper.find('article h2').text()).toEqual('TestTitle');
    expect(wrapper.find('article div p').text()).toEqual('TestContent');
  })

})

