import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('<SinglePost />', () => {

  let handleClick;
  let wrapper;

  beforeEach(() => {
    handleClick = jest.fn();
    wrapper = mount(
      <SinglePost 
        title="TestTitle" 
        content="TestContent" 
        id="123" 
        author="TestPerson" 
        currentPersona="TestPerson" 
        date="2018-01-01" 
        onClick={handleClick}
      />);
  });

  it('should display button when author === persona', () => {
    wrapper.setProps({ author: 'OnePerson' });
    wrapper.setProps({ currentPersona: 'OnePerson' });
    expect(wrapper.find('Button').length).toEqual(1);
  })

  it('should not display button when author !== persona', () => {
    wrapper.setProps({ author: 'OnePerson' });
    wrapper.setProps({ currentPersona: 'AnotherPerson' });
    expect(wrapper.find('Button').length).toEqual(0);
  })

  it('should call click with id', () => {
    expect(handleClick).toHaveBeenCalledTimes(0);
    const button = wrapper.find('[data-test="button"]');
    button.simulate('click');
    expect(handleClick).toHaveBeenCalledWith('123');
  }) 

  it('should render a post', () => {
    expect(wrapper).toMatchSnapshot();
  })

})