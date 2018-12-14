import { Component, OnInit } from '@angular/core';
import { FellowsService } from '../fellows.service';

@Component({
  selector: 'app-fellows',
  templateUrl: './fellows.component.html',
  styleUrls: ['./fellows.component.scss']
})
export class FellowsComponent implements OnInit {

  fellows: Object;

  constructor(private service: FellowsService) { }

  ngOnInit() {
    console.log('in ngOnInit in fellows component');
    this.service.getFellows().subscribe(service => {
      console.log('in getFellows subscribe method in fellows component');
      this.fellows = service;
      console.log(this.service);
    });  
  }


}
