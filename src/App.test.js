import React from 'react';
import App from './App';

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const Title = <h3 className="text-muted">Goodreads Book Search </h3>;
  expect(wrapper.contains(Title)).toEqual(true);
});
