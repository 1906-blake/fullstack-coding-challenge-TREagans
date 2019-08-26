import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router';


interface Param {
  id: any
}

interface Props extends RouteComponentProps<Param> {
}

interface State {
    list:any;
    id:any;
}

export default class List extends Component<Props, State> {
    constructor(props:any){
        super(props);

        // get id passed in the url
        const id = this.props.match.params.id;

        this.state = {
            list: {},
            id,
        }
    }

    componentDidMount = async () => {
        try {
            const req = await fetch(
              `http://localhost:8012/grocery-lists/${this.state.id}`,
              {
                headers: {
                  'content-type': 'application/json',
                },
              },
            );

            const list = await req.json();

            this.setState({
                ...this.state,
                list
            });

            console.log(list);
        } catch (err) {
            console.log(err);
        }
    }

    getList = async () => {

        try {
            // const req = await fetch('http://localhost:8012/items');
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
          <div>
            <div className='list'>
              <div className='container'>
                <h1>{this.state.list.name}</h1>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      <th scope='col'>Item Id</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Description</th>
                      <th scope='col'>Category</th>
                      <th scope='col'>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {this.state.lists.map((listVal: any, index: any) => {
                  return (
                    <tr key={index}>
                      <td>{listVal.listId}</td>
                      <td>{listVal.name}</td>
                      <td>{listVal.description}</td>
                      <td>
                        <img
                          className='viewIcon'
                          src={View}
                          alt='trash can icon'
                          onClick={e => this.selectedList(listVal.listId)}
                        />
                      </td>
                      <td>
                        <img
                          className='deleteIcon'
                          src={Trash}
                          alt='trash can icon'
                          onClick={this.deleteList}
                        />
                      </td>
                    </tr>
                  );
                })} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}
