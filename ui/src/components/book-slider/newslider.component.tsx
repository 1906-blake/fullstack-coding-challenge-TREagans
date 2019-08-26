import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Book from '../book/book.component';
// import { RouteComponentProps } from 'react-router';
// import BookDetails from '../book/bookdetails.component';
import { RouteComponentProps } from 'react-router';


interface Props extends RouteComponentProps{
}

interface State {
  newreleases: any[];
}

export default class NewSlider extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      newreleases: []
    };
  }

  componentDidMount = async () => {
    this.getNewReleases();
  };

  selectedBook = (id:number) => {
      this.props.history.push(`/books/${id}`);
  }

  getNewReleases = async () => {
    try {
      let req = await fetch('http://localhost:8012/books/newrelease', {
        credentials: 'include',
      });

      const newreleases = await req.json();
      this.setState({
        ...this.state,
        newreleases,
      });
    } catch (err) {
      console.log(err);
    }
  };


  render() {
    const mynewreleases = this.state.newreleases;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    return (
      <div>
        <Slider {...settings}>
          {mynewreleases.map((newrelease: any) => (
            <div key={newrelease.bookId} onClick={e=>this.selectedBook(newrelease.bookId)} className='slider-div-size'>
              <Book newrelease={newrelease} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
