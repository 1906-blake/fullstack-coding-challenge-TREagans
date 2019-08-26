import React, { Component } from 'react';
import Footer from '../footer/footer.component';
import SmallBook from './smallbook.component';
import { RouteComponentProps } from 'react-router';
// import BookSlider from '../book-slider/bookslider.component';
//import Book from './book.component';
// import NewSlider from '../book/allbooks.component';
interface Props extends RouteComponentProps{}
interface State {
 books: any[];
 value: any;
}
class AllBooks extends Component<Props, State> {
 constructor(props: any) {
   super(props);
   this.state = {
     books: [],
     value: 0
   };
 }
 componentDidMount = async () => {
   this.getBooks();
 };
 selectedBook = (id:number) => {
   this.props.history.push(`/books/${id}`);
}
 getBooks = async () => {
   try {
     let req = await fetch(
         'http://localhost:8012/books',
         {
           credentials: 'include',
         },
       );
     const books = await req.json();
     this.setState({
         ...this.state,
         books
     })
   } catch (error) {
     console.log(error);
   }
 };
 // create an IF statement for dropdown menu newrelease and most popular
 changeHandler = (event: any) => {
   this.setState({
       ...this.state,
       value: event.target.value
   })
}
submitHandler = async (event: any) => {
 event.preventDefault();
 let dropUser = this.state.value;
 if(dropUser === "1") {
     const resp = await fetch('http://localhost:8012/books/newrelease',
     {
       credentials: 'include'
     });
     const newreleased = await resp.json();
     this.setState({
       ...this.state,
       books:newreleased
     });
   }
 else if(dropUser === "2") {
   const resp = await fetch('http://localhost:8012/books/popular',
   {
     credentials: 'include'
   });
   const popular = await resp.json();
   this.setState({
     ...this.state,
     books:popular
     });
   }
}
 render() {
   const books = this.state.books;
   return (
     <div>
       <div className='row all-books-cont'>
         <div className='col-3 testbrd'>
           <div className='row search-row'>
             <form className=''>
               <select id="bookdropdown" className='form-control input-sm selectInput' onChange={this.changeHandler}>
                 <option value="1">New Releases</option>
                 <option value="2">Most Popular</option>
               </select>
               <button
                 type='submit'
                 onClick={this.submitHandler}
                 className='btn btn-primary mt-3 ml-2 searchBtnInput'>
                 Search
               </button>
             </form>
           </div>
         </div>
         <div className='col-8 main-container'>
           <div className='row'>
             {books.map((book: any) => (
               <div
                 key={book.bookId}
                 onClick={e => this.selectedBook(book.bookId)}
                 className='col-3 all-books-size'>
                 <SmallBook book={book} />
               </div>
             ))}
           </div>
         </div>
       </div>
       <Footer />
     </div>
   );
 }
}
export default AllBooks;