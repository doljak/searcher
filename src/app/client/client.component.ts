import { Component, OnInit } from '@angular/core';
import { Client } from './client.module';
import { SearchService } from './search.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit {

  clients:Client[]

  constructor(private clientSearchService:SearchService) { }

  ngOnInit() 
  {
    this.clientSearchService.getQueryByValue()
      .subscribe( clients => this.clients = clients)
      setTimeout(()=>console.log(this.clients),1000)
  }

  submit(value)
  {
    console.log()
  }

}
