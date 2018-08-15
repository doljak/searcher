import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.module';
import { SearchService } from '../shared/search/search.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  @Input()  items:Client[]
  public    loading:boolean = false

  constructor(private searchService:SearchService) { }

  ngOnInit() 
  {}

  submitEventSearch(query)
  {
    this.loading = true

    this.searchService.getQueryByValue(query)
      .subscribe( items => {
        this.loading = false
        return this.items = items
      })
  }

}
