import React from 'react';
import Book1 from '../../assets/book1.png';
import Stars from '../../assets/stars.png';
import { Link } from 'react-router-dom';


interface Props {
    book: any
}
class SmallBook extends React.Component<Props> {

  render() {
      const book = this.props.book
    return (
      <div>
        <Link to='/details' className='bookCoverDetails'>
          <img src={Book1} className='book-img-small' alt='Book 1' />
          <p className='book-img-small-title'>
            Title: {book.title}
            <br />
            Author: {book.author}
          </p>
        </Link>
        <img
          src={Stars}
          alt='Book 1'
          id='star-rating'
          className='book-img-small-stars'
        />
      </div>
    );
  }
}

export default SmallBook;
