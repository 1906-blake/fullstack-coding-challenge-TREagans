import React, { Component } from 'react';
import Footer from '../footer/footer.component';
import BookImg from '../../assets/details-book-cover-shadow.png';
import { Button } from 'reactstrap';
import StarRating from '../starrating/starrating.component';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
// import { RouteComponentProps } from 'react-router';
// import Book from './book.component';

interface Param {
  id: any
}

interface Props extends RouteComponentProps<Param> {

}
interface State {
  selectBook: any;
  id: any
}

class BookDetails extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    const id = this.props.match.params.id;

    console.log(id);
    this.state = {
      selectBook: {},
      id,
    };
  }

  async componentDidMount() {
    try {
      let req = await fetch(`http://localhost:8012/books/${this.state.id}`, {
        credentials: 'include',
      });
      const selectBook = await req.json();
      this.setState({
        ...this.state,
        selectBook,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const selectedBook = this.state.selectBook;
    // console.log(this.state.selectBook);
    return (
      <div>
        <div id='img-card-cont'>
          <div className='container'>
            <div className='row'>
              <Link to='/books' className='backToAllBooks'>
                <h6>Back To All Books</h6>
              </Link>
            </div>
          </div>

          <div className='row'>
            <img
              src={BookImg}
              className='card-img-side'
              id='cardImg'
              alt='Default Book Cover'
            />
            <div className='card' id='bookDetailsFrame'>
              <div className='card-body'>
                <h3 className='card-title'>{selectedBook.title}</h3>
                <p className='card-text lead'>
                  <strong>Author</strong>: {selectedBook.author}
                  <br />
                  <strong>Publisher</strong>: {selectedBook.pubCompany}
                  <br />
                  <strong>Genre</strong>: {selectedBook.genre}
                  <br />
                  <strong>Year</strong>:{' '}
                  {new Date(selectedBook.pubDate).getFullYear()}
                  <br />
                  <strong>Rating</strong>: {selectedBook.rating}
                  <br />
                </p>

                <hr />

                <div className='row'>
                  <div className='col-6'>
                    <p className='point-cost'>
                      Point Value: {selectedBook.bookValue}
                      <br />
                      <br />
                    </p>
                  </div>

                  <div className='col-6'>
                    <p className='point-cost'>
                      Purchase Cost: {selectedBook.pointCost}
                      <br />
                    </p>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-6'>
                    <a href='#!' className='btn btn-primary purchaseBtn'>
                      Checkout
                    </a>
                  </div>

                  <div className='col-6'>
                    <a href='#!' className='btn btn-success purchaseBtn'>
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
            </div>{' '}
            {/* card */}
          </div>
          {/* row */}
        </div>

        {/* nav tabs */}

        <div className='container'>
          <ul className='nav nav-tabs' id='myTab' role='tablist'>
            <li className='nav-item'>
              <a
                className='nav-link active'
                id='description-tab'
                data-toggle='tab'
                href='#description'
                role='tab'
                aria-controls='description'
                aria-selected='true'>
                Description
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                id='reviews-tab'
                data-toggle='tab'
                href='#reviews'
                role='tab'
                aria-controls='reviews'
                aria-selected='false'>
                Reviews
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                id='feedback-tab'
                data-toggle='tab'
                href='#feedback'
                role='tab'
                aria-controls='feedback'
                aria-selected='false'>
                Leave Feedback
              </a>
            </li>
          </ul>
          <div className='tab-content' id='myTabContent'>
            <div
              className='tab-pane fade show active'
              id='description'
              role='tabpanel'
              aria-labelledby='home-tab'>
              {selectedBook.description}
            </div>
            <div
              className='tab-pane fade'
              id='reviews'
              role='tabpanel'
              aria-labelledby='profile-tab'>
              <div className='row'>
                <div className='col-6'>
                  <em>
                    "An enjoyable journey with a stellar cast, though the
                    baggage we carry as modern viewers sees this ride
                    derailed before its denouement."
                    <br />
                  </em>
                  - <strong>Will Lawrence Empire</strong>
                </div>
                <div className='col-6'>
                  <em>
                    "An enjoyable journey with a stellar cast, though the
                    baggage we carry as modern viewers sees this ride
                    derailed before its denouement."
                    <br />
                  </em>
                  - <strong>Will Lawrence Empire</strong>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='feedback'
              role='tabpanel'
              aria-labelledby='contact-tab'>
              <div className='row'>
                <div className='col-7'>
                  {/* form */}
                  <form id='feedbackForm'>
                    <label htmlFor='exampleFormControlTextarea1'>
                      <span className='feedback-info'>
                        Fill in the form below to submit feedback
                      </span>
                    </label>

                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='fullName'
                        aria-describedby='inputNameHelp'
                        placeholder='Enter Name'
                      />
                    </div>

                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        placeholder='Enter Your Feedback'
                      />
                    </div>
                  </form>
                  <Button type='submit' color='primary'>
                    Submit Feedback
                  </Button>
                </div>
                <div className='col-2' />

                <div className='col-3'>
                  <StarRating />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
        <hr />
        <Footer />
      </div>
    );
  }
}

export default BookDetails;
