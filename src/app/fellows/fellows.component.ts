import { Component, OnInit } from '@angular/core';
import { FellowsService } from '../fellows.service';

@Component({
  selector: 'app-fellows',
  templateUrl: './fellows.component.html',
  styleUrls: ['./fellows.component.scss']
})
export class FellowsComponent implements OnInit {

  fellows: Fellow[];

  constructor(private fellowsService: FellowsService) { }

  ngOnInit() {
    console.log('in ngOnInit in fellows component');
    this.fellowsService.getFellows().subscribe(data => {
      console.log('in getFellows subscribe method in fellows component');
      this.fellows = data;
      console.log(data);
    });  
  }

  // showFellows(){
  //   this.fellowsService.getFellows().subscribe((fellows) => this.fellows = {
  //     name: fellows['name'],
  //     id: fellows['id'],
  //     favoriteInstructor: fellows['favoriteInstructor']
  //   } );
  // }


}
// put in separate file in actual project
export interface Fellow {
  firstName: string;
  lastName: string;
  id: string;
  location: string;
}