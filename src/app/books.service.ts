import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  getBooks(){
    return [
      'Head First Java',
      'SQL Complete Reference',
      'Head First Angular',
      'JS Complete Reference',
      'Clean Coding'
    ];
  }

  constructor() { }
}
