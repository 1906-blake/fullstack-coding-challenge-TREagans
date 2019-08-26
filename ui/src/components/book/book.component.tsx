import React, { Component } from 'react';
import Book1 from '../../assets/book1.png';
import Stars from '../../assets/stars.png';
import { Link } from 'react-router-dom';


interface Props {
  newrelease: any
}

class Book extends Component<Props> {

  render() {
    const newrelease = this.props.newrelease;
    return (
      <div>
        <Link to='/details' className='bookCoverDetails'>
          <img src={Book1} className='bookImage' alt='Book 1' />
          <p className='book-title-text'>
            Title: {newrelease.title}
            <br />
            Author: {newrelease.author}
          </p>
        </Link>
        <img src={Stars} alt='Book 1' id='star-rating' />
      </div>
    );
  }
}


export default Book;