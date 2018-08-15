import { Component, OnInit, Input, Output } from '@angular/core';
import { Search } from './search.module';
import { BookComponent } from '../../book/book.component'
import { ClientComponent } from '../../client/client.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  @Input() search:Search

  constructor(
    private book:BookComponent,
    private client:ClientComponent
  ) { }

  ngOnInit() {
  }

  submit(path, form)
  {
    const query = path.query + form.value.query
    this[path.type].submitEventSearch(query)
  }


}
