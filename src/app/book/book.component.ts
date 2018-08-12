import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from './book.module';
import { SearchServiceBook } from './search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  @Input()  values:Book[]
  @Output() getResultOfName = new EventEmitter()

  constructor(private bookSearchService:SearchServiceBook) { }

  ngOnInit() 
  {
    this.bookSearchService.getQueryByValue()
      .subscribe( books => this.values = books)
    setTimeout(()=>console.log(this.values), 800)  
  }

  submitEventSearch()
  {
    console.log("oi")
  }

}
