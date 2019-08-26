import React, { Component } from 'react'
import Book from '../book/book.component';
import { RouteComponentProps } from 'react-router';


interface Props extends RouteComponentProps {
  newrelease: any;
}


class NewReleases extends Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const newrelease = this.props.newrelease;
    return (
      <div>
        <div className='container-fluid'>
          <div className='row categoryRowTitle'>
            <div className='col-12'>
              <h3>New Releases</h3>
            </div>
          </div>
        </div>

        <div className='container bookRowDivider'>
          <div className='row'>
            <div className='col-3'>
              <Book newrelease={newrelease} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}


export default  NewReleases;