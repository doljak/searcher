import { Component, OnInit, Input} from '@angular/core';
import { Book } from './book.module';
import { SearchService } from '../shared/search/search.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.less']
})
export class BookComponent implements OnInit {

  @Input()   items:Book[]
  public     loading:boolean = false

  constructor(private bookSearchService:SearchService) { }

  ngOnInit()
  {}

  submitEventSearch(query)
  {
    this.loading = true 
      
    this.bookSearchService.getQueryByValue(query)
      .subscribe( items => {
        this.loading = false
        return this.items = items
      })
  }

}
