import React from 'react';
import Book1 from '../../assets/book1.png';
import Stars from '../../assets/stars.png';
import { Link } from 'react-router-dom';

interface Props {
  pop: any;
}

class NewBook extends React.Component<Props> {
  render() {
    const pop = this.props.pop;
    return (
      <div>
        <Link to='/details' className='bookCoverDetails'>
          <img src={Book1} className='bookImage' alt='Book 1' />
          <p className='book-title-text'>
            Title: {pop.title}
            <br />
            Author: {pop.author}
          </p>
        </Link>
        <img src={Stars} alt='Book 1' id='star-rating' />
      </div>
    );
  }
}

export default NewBook;
