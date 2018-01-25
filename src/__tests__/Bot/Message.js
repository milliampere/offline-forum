import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../components/Bot/Message';

describe('Bot <Message/>', () => {

  it('should display bot style', () => {
    const wrapper = shallow(<Message bot message="" />);
    expect(wrapper.find('p').hasClass('bg-white text-grey-darker')).toBe(true);
  })

  it('should display non-bot style', () => {
    const wrapper = shallow(<Message bot={false} message="" />);
    expect(wrapper.find('p').hasClass('bg-indigo-dark text-white')).toBe(true);
  })

})