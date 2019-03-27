import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.sass']
})
export class BooksListComponent implements OnInit {

  public books: Book[];
  currentBook:Book;
    constructor() {
      this.books =  [
        {
          author: 'Suzanne Collins',
          date: new Date('4/5/1813'),
          title: 'the Hunger Games',
        },
        {
          author: 'jane Austen',
          date: new Date('4/5/1981'),
          title: 'pride and Prejudice',
        },
        {
          author: 'George Orwell',
          date: new Date('4/5/1991'),
          title: 'animal Farm',
        }
        ];
    }

    ngOnInit() {
    }

  openEdit(book: Book){
   this.currentBook = book;
  }

  cancelEdit(book: Book){
     this.currentBook = null;
  }
  saveEdit(book: Book){

    let bookInList: Book;
    bookInList = this.books.find(x => x === this.currentBook);
    bookInList = book;
    this.currentBook = null;
  }

  deleteItem(book: Book){
    let index= this.books.indexOf(book,0)
    if(index > -1)
       this.books.slice(index,1);
  }
  }
