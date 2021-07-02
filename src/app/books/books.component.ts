import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title='List of Books';

  books;

  constructor(service:BooksService) {
    this.books=service.getBooks();
   }

  ngOnInit(): void {
  }

}
