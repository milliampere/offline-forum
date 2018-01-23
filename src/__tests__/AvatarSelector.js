import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AvatarSelector from '../components/AvatarSelector';

describe('<AvatarSelector />', () => {
  it('should display the zac avatar', () => {
    const wrapper = shallow(<AvatarSelector currentPersona='Zac' />);
    expect(wrapper.find('img').prop('src')).toEqual('zac.png');
  });

  it('should display the morgana avatar', () => {
    const wrapper = shallow(<AvatarSelector currentPersona='Morgana' />);
    expect(wrapper.find('img').prop('src')).toEqual('morgana.png');
  });

  it('should display the esmeralda avatar', () => {
    const wrapper = shallow(<AvatarSelector currentPersona='Esmeralda' />);
    expect(wrapper.find('img').prop('src')).toEqual('esmeralda.png');
  });
});

// Snapshot
it('should display the zac avatar', () => {
  const tree = renderer
    .create(<AvatarSelector currentPersona='zac' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
