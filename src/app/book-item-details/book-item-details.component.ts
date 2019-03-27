import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item-details',
  templateUrl: './book-item-details.component.html',
  styleUrls: ['./book-item-details.component.scss']
})

export class BookItemDetailsComponent implements OnInit {


@Input() bookItem: Book;
@Output() openEditbookItem: EventEmitter<Book> = new EventEmitter();
@Output() deletebookItem: EventEmitter<Book> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

openEdit(book: Book){
  this.openEditbookItem.emit(book);
}
deleteItem(book: Book){
this.deletebookItem.emit(book);
}
}
