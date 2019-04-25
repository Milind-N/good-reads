import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BookInfo from './BookInfo';

describe('BookInfo renders correctly', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      books: {
        best_book : {
          author: {id: "811", name: "Yann Martel"},
          id: "4214",
          image_url: "https://images.gr-assets.com/books/1320562005m/4214.jpg",
          small_image_url: "https://images.gr-assets.com/books/1320562005s/4214.jpg",
          title: "Life of Pi",
        }
      },
      expandBook: jest.fn(() => 'expandBook'),
    };
    wrapper = shallow(<BookInfo {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders one image holder for book info', () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });

  it('renders one image holder for book info', () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <BookInfo {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})
