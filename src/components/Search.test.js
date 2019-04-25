import React from 'react'
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from './Search';
import Results from './Results';

describe('Search renders correctly', () => {
  let props;

  beforeEach(() => {
    props = {
      books: [{
            		"average_rating": "4.46",
            		"best_book": {
            			"author": {
            				"id": "1077326",
            				"name": "J.K. Rowling"
            			},
            			"id": "3",
            			"image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg",
            			"small_image_url": "https://images.gr-assets.com/books/1474154022s/3.jpg",
            			"title": "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)"
            		},
            		"books_count": "621",
            		"id": "4640799",
            		"original_publication_day": "26",
            		"original_publication_month": "6",
            		"original_publication_year": "1997",
            		"ratings_count": "5620117",
            		"text_reviews_count": "89468"
            	},
            	{
            		"average_rating": "4.55",
            		"best_book": {
            			"author": {
            				"id": "1077326",
            				"name": "J.K. Rowling"
            			},
            			"id": "5",
            			"image_url": "https://images.gr-assets.com/books/1499277281m/5.jpg",
            			"small_image_url": "https://images.gr-assets.com/books/1499277281s/5.jpg",
            			"title": "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)"
            		},
            		"books_count": "440",
            		"id": "2402163",
            		"original_publication_day": "8",
            		"original_publication_month": "7",
            		"original_publication_year": "1999",
            		"ratings_count": "2228376",
            		"text_reviews_count": "43197"
            	}
            ],
      expandBook: jest.fn(() => 'expandBook')
    };
  });

  const wrapper = shallow(<Search />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders one input text field', () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it('renders one button for search', () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Results {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

})
