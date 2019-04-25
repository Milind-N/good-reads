import React from 'react';
import { shallow } from 'enzyme';
import AuthorInfo from './AuthorInfo';

describe('AuthorInfo renders correctly', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
        authors: [{
                average_rating: "4.37",
                id: "346732",
                image_url: "↵https://images.gr-assets.com/authors/1351944410p5/346732.jpg↵",
                link: "https://www.goodreads.com/author/show/346732.George_R_R_Martin",
                name: "George R.R. Martin",
                ratings_count: "4895501",
                role: "",
                small_image_url: "↵https://images.gr-assets.com/authors/1351944410p2/346732.jpg↵",
                text_reviews_count: "180696"
            },
            {
                average_rating: "4.20",
                id: "2448",
                image_url: "↵https://images.gr-assets.com/authors/1495008883p5/2448.jpg↵",
                link: "https://www.goodreads.com/author/show/2448.Arthur_Conan_Doyle",
                name: "Arthur Conan Doyle",
                ratings_count: "1656536",
                role: "",
                small_image_url: "↵https://images.gr-assets.com/authors/1495008883p2/2448.jpg↵",
                text_reviews_count: "52319"
            }
        ]
    };
    wrapper = shallow(<AuthorInfo {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
