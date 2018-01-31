import React from 'react';
import { render, mount } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeDefined();
});

it('should change page from home to bot', () => {
  const wrapper = mount(<App />);
  wrapper.setState({ currentPage: 'home' });
  wrapper.instance().changePage();
  expect(wrapper.state('currentPage')).toBe('bot');
});

it('should change page from bot to home', () => {
  const wrapper = mount(<App />);
  wrapper.setState({ currentPage: 'bot' });
  wrapper.instance().changePage();
  expect(wrapper.state('currentPage')).toBe('home');
});

it('should change persona state', () => {
  const wrapper = mount(<App />);
  wrapper.instance().changePersona({target: { value: 'morgana'}});
  expect(wrapper.state('currentPersona')).toBe('morgana');
});