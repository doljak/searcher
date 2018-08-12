import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from './book.module';
import { SearchServiceBook } from './search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  @Input()  books:Book[]
  @Output() getResultOfName = new EventEmitter()

  constructor(private bookSearchService:SearchServiceBook) { }

  ngOnInit()
  {}

  submitEventSearch(form)
  {
    const query:string = form.value.query
    
    if(query && query !== "")
    {
      this.bookSearchService.getQueryByValue(query)
        .subscribe( books => this.books = books)
    }
  }

}
