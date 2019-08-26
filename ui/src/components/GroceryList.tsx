import React, { Component } from 'react';
import Trash from '../assets/trash.png';
import View from '../assets/eye.png';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {

}

interface State {
    lists: any;
}

export default class GroceryList extends Component<Props, State> {
                 constructor(props: any) {
                   super(props);

                   this.state = {
                     lists: [],
                   };
                 }

                 componentDidMount = () => {
                   this.fetchLists();
                 };

                 selectedList = (id: number) => {
                   this.props.history.push(`/grocery-lists/${id}`);
                 };

                 fetchLists = async () => {
                   try {
                     const req: any = await fetch(
                       'http://localhost:8012/grocery-lists',
                       {
                         headers: {
                           'content-type': 'application/json',
                         },
                       },
                     );

                     const lists: any = await req.json();

                     // set state
                     this.setState({
                       ...this.state,
                       lists,
                     });
                   } catch (err) {
                     console.log(err);
                   }
                 };

                 deleteList = () => {};

                 render() {
                   // const groceryLists:any = this.state.lists;
                   // console.log(groceryLists);
                   return (
                     <div className='grocery-list'>
                       <div className='container'>
                         <h4>Grocery Lists</h4>
                         <table className='table table-hover'>
                           <thead>
                             <tr>
                               <th scope='col'>List Id</th>
                               <th scope='col'>Name</th>
                               <th scope='col'>Description</th>
                               <th scope='col'>View</th>
                               <th scope='col'>Delete</th>
                             </tr>
                           </thead>
                           <tbody>
                             {this.state.lists.map(
                               (listVal: any, index: any) => {
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
                                         onClick={e =>
                                           this.selectedList(listVal.listId)
                                         }
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
                               },
                             )}
                           </tbody>
                         </table>
                       </div>
                     </div>
                   );
                 }
               }

