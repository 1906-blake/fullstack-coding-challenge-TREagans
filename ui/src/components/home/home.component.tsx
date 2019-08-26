import React, { Component } from 'react';
import Carousel from '../carousel/carousel.component';
import BookSlider from '../book-slider/bookslider.component';
import Footer from '../footer/footer.component';
import Newsletter from '../newsletter/newsletter.component';
import TwoSections from '../twosection/twosection.component';
import { Link, RouteComponentProps } from 'react-router-dom';
import NewSlider from '../book-slider/newslider.component';


interface Props extends RouteComponentProps {
  // history:any;
  // location:any;
  // match:any;
  // newrelease:any;
  // pop:any;
}
class Home extends Component<Props> {
    render() {
        return (
          <div>
            <div>
              <Carousel />
            </div>

            <div>
              <TwoSections />
            </div>

            <div>
              <div className='container-fluid'>
                <div className='row categoryRowTitle'>
                  <div className='col-10'>
                    <h3>New Releases</h3>
                  </div>
                  <div className='col-2'>
                    <h6>
                      <Link to='/books' className='backToAllBooks'>
                        View All Books
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <NewSlider
                location={this.props.location}
                history={this.props.history}
                match={this.props.match}
              />
            </div>
            <div>
              <div className='container-fluid'>
                <div className='row categoryRowTitle'>
                  <div className='col-10'>
                    <h3>Most Popular</h3>
                  </div>
                  <div className='col-2'>
                    <h6>
                      <Link to='/books' className='backToAllBooks'>
                        View All Books
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <BookSlider
                  // popular={this.props.popular}
                  location={this.props.location}
                  history={this.props.history}
                  match={this.props.match}
                />
              </div>
            </div>
            <div>
              <Newsletter />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        );
    }
}

export default Home;
