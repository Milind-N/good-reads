import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results';

describe('SearchResult renders correctly', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      books: [{
                    "average_rating": "4.45",
                    "best_book": {
                        "id": "13496", 
                        "title": "A Game of Thrones (A Song of Ice and Fire, #1)", 
                        "author": {
                            "id": "346732",
                            "name": "George R.R. Martin"
                        }, 
                        "image_url": "https://images.gr-assets.com/books/1554191954m/13496.jpg", 
                        "small_image_url": "https://images.gr-assets.com/books/1554191954s/13496.jpg"
                    },
                    "books_count": "330",
                    "id": "1466917",
                    "original_publication_day": "6",
                    "original_publication_month": "8",
                    "original_publication_year": "1996",
                    "ratings_count": "1731207",
                    "text_reviews_count": "50394"
                },
                
            	{
                    "average_rating": "4.29",
                    "best_book":  {
                        "author": {
                            "id": "2940867",
                            "name": "Frederic P.  Miller"
                        },
                        "id": "10430485",
                        "image_url": "https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png",
                        "small_image_url": "https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png",
                        "title": "Game of Thrones"
                    },
                    "books_count": "1",
                    "id": "15334929",
                    "original_publication_day": "24",
                    "original_publication_month": "1",
                    "original_publication_year": "2011",
                    "ratings_count": "536",
                    "text_reviews_count": "13"
            	}
            ],
      expandBook: jest.fn(() => 'expandBook')
    };
    wrapper = shallow(<Results {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
