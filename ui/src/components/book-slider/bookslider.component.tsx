import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// import Book from '../book/book.component';
import { RouteComponentProps } from 'react-router';
import NewBook from '../book/newbook.component';


interface Props extends RouteComponentProps {

}

interface State {
  newreleases: any[];
  popularbooks: any[];
}

export default class BookSlider extends Component<Props, State> {
                 constructor(props: any) {
                   super(props);
                   this.state = {
                     newreleases: [],
                     popularbooks: [],
                   };
                 }

                 componentDidMount = async () => {
                   this.getPopular();
                 };

                 getNewReleases = async () => {
                   try {
                     let req = await fetch(
                       'http://localhost:8012/books/newrelease',
                       {
                         credentials: 'include',
                       },
                     );

                     const newreleases = await req.json();
                     this.setState({
                       ...this.state,
                       newreleases,
                     });
                   } catch (err) {
                     console.log(err);
                   }
                 };

                 selectedBook = (id: number) => {
                   this.props.history.push(`/books/${id}`);
                 };

                 getPopular = async () => {
                   try {
                     let req = await fetch(
                       'http://localhost:8012/books/popular',
                       {
                         credentials: 'include',
                       },
                     );

                     const popularbooks = await req.json();
                     this.setState({
                       ...this.state,
                       popularbooks,
                     });
                   } catch (err) {
                     console.log(err);
                   }
                 };

                 render() {
                  //  const newreleases = this.state.newreleases;
                   const popular = this.state.popularbooks;
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
                         {popular.map((pop: any) => (
                           <div
                             key={pop.bookId}
                             onClick={e =>
                               this.selectedBook(pop.bookId)
                             }
                             className='slider-div-size'>
                             <NewBook pop={pop} />
                           </div>
                         ))}
                       </Slider>

                       {/* <Slider {...settings}>
          {newreleases.map((newrelease: any) => (
            <div key={newrelease.bookId} className='slider-div-size'>
              <Book newrelease={newrelease} />
            </div>
          ))}
        </Slider> */}
                     </div>
                   );
                 }
               }
