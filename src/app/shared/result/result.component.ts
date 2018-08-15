import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent implements OnInit {

  @Input() items:any[]

  constructor() { }
  
  ngOnInit() {
  }

}
