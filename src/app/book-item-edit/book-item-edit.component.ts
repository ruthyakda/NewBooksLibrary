import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-item-edit',
  templateUrl: './book-item-edit.component.html',
  styleUrls: ['./book-item-edit.component.sass']
})
export class BookItemEditComponent implements OnInit {
  @Input() bookItemEdit: Book;
  @Output() updateBookitemEdit: Book;
  @Output() cancelEditBookItem: EventEmitter<Book> = new EventEmitter();
  @Output() saveEditBookItem: EventEmitter<Book> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  cancelEdit(book: Book){
     this.cancelEditBookItem.emit(book);
  }

  saveEdit(book: Book){
    this.saveEditBookItem.emit(book);
  }
}
