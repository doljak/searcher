import { Component, OnInit, Input} from '@angular/core';
import { Book } from './book.module';
import { SearchServiceBook } from './search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  @Input('items')   books:Book[]
  public            loading:boolean = false

  constructor(private bookSearchService:SearchServiceBook) { }

  ngOnInit()
  {}

  submitEventSearch(form)
  {
    const query:string = form.value.query
    
    if(query && query !== "")
    {
      this.loading = true
      this.bookSearchService.getQueryByValue(query)
        .subscribe( books => {
          this.loading = false
          return this.books = books
        })
    }
  }

}
