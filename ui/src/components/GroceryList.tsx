import React, { Component } from 'react';
import Trash from '../assets/trash.png';
import View from '../assets/eye.png';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {

}

interface State {
    lists: any;
    name: any;
    description: any;
    listId:any;
}

export default class GroceryList extends Component<Props, State> {
                 constructor(props: any) {
                   super(props);

                   this.state = {
                     lists: [],
                     name: '',
                     description: '',
                     listId: 50
                   };
                 }

                 // grab all data (values) from the form fields
                 getUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
                   this.setState({
                     ...this.state,
                     name: event.target.value,
                     description: event.target.value,
                   });
                 };

                 // triggers when the form field changes
                 handleChange = (
                   event: React.ChangeEvent<HTMLInputElement>,
                 ) => {
                   this.setState({
                     ...this.state,
                     [event.target.name]: event.target.value,
                   });
                 };

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

                 // handling form submittal
                 onCreateList = async (event: React.FormEvent<HTMLFormElement>) => {
                   event.preventDefault();
                   const { listId, name, description} = this.state;

                   let submitNewList = {
                    listId,
                     name,
                     description,
                   };

                   // send submitNewList object to database
                   try {
                       await fetch('http://localhost:8012/grocery-lists/', {
                         method: 'POST',
                         headers: {
                           'content-type': 'application/json',
                         },
                         body: JSON.stringify(submitNewList),
                       });

                       window.location.reload();
                   } catch (err) {
                     console.log(err);
                   }
                 };


                 deleteList = () => {};

                 render() {
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

                         {/* create a new list */}
                         <p>
                           <button
                             className='btn btn-primary addNewList'
                             type='button'
                             data-toggle='collapse'
                             data-target='#collapseExample'
                             aria-expanded='false'
                             aria-controls='collapseExample'>
                             Create New List
                           </button>
                         </p>
                         <div className='collapse' id='collapseExample'>
                           <div className='card card-body'>
                             <form onSubmit={this.onCreateList}>
                               <div className='form-group'>
                                 <label htmlFor='listName'></label>
                                 <input
                                   type='text'
                                   className='form-control'
                                   name='name'
                                   id='name'
                                   onChange={this.handleChange}
                                   placeholder='List Name'
                                 />
                               </div>
                               <div className='form-group'>
                                 <label htmlFor='listDescription'></label>
                                 <input
                                   type='text'
                                   className='form-control'
                                   name='description'
                                   id='description'
                                   onChange={this.handleChange}
                                   placeholder='List Description'
                                 />
                               </div>
                               {/* <div className='form-group'>
                                 <label htmlFor='exampleFormControlSelect2'>
                                 </label>
                                 <select
                                   className='form-control'
                                   id='exampleFormControlSelect2'>
                                    {
                                    this.state.lists.map((listVal: any, index: any) => {
                                        return <option>{listVal.name}</option>;
                                     })
                                    }
                                 </select>
                               </div> */}
                               <button
                                 type='submit'
                                 className='btn btn-success'>
                                 Submit
                               </button>
                             </form>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }

