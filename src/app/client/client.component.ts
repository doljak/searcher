import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from './client.module';
import { SearchServiceClient } from './search.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  @Input()  values:Client[]
  @Output() getResultOfName = new EventEmitter()

  constructor(private clientSearchService:SearchServiceClient) { }

  ngOnInit() 
  {}

  submitEventSearch(form)
  {
    const query:string = form.value.query
    
    if(query && query !== "")
    {
      this.clientSearchService.getQueryByValue(query)
        .subscribe( clients => this.values = clients)
    }
  }

}
