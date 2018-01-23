import React from 'react';
import { mount } from 'enzyme';
import SinglePost from '../components/SinglePost';

describe('<SinglePost />', () => {

  let wrapper;
  let handleClick;

  beforeEach(() => {
    handleClick = jest.fn();
    wrapper = mount(
      <SinglePost 
        title="Rubrik" 
        content="Text" 
        id="123" 
        author="Zac" 
        currentPersona="Zac" 
        date="2018-01-01" 
        onClick={handleClick}
      >x
      </SinglePost>);
  });

  it('should display remove button when author and persona is the same', () => {
    expect(wrapper.find('Button').length).toEqual(1);
  })

  it('should not display remove button when author and persona is different', () => {
    wrapper.setProps({ currentPersona: 'Morgana' });
    expect(wrapper.find('Button').length).toEqual(0);
  })

  it('should call remove callback when button is clicked', () => {
    expect(handleClick.mock.calls.length).toEqual(0);
    const button = wrapper.find('[data-test="button"]');
    button.simulate('click');
    expect(handleClick.mock.calls.length).toEqual(1);
  }) 

  afterEach(() => {
    handleClick.mockReset();
  });

})