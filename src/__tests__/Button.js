import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('<Button />', () => {
  it('should display the correct danger style', () => {
    const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';
    const wrapper = shallow(<Button onClick={() => {}} danger >Button</Button>);
    expect(wrapper.find("[data-test='button']").hasClass(dangerStyle)).toBeTruthy()
  });

  it('should match snapshots', () => {
    let wrapper = shallow(<Button onClick={() => {}}>Button</Button>);
    expect(wrapper).toMatchSnapshot("Default style");
    wrapper = shallow(<Button onClick={() => {}} danger>Button</Button>);
    expect(wrapper).toMatchSnapshot("Danger style");
  })
});

