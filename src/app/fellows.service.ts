import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FellowsComponent } from './fellows/fellows.component';

@Injectable({
  providedIn: 'root'
})
export class FellowsService {

  constructor(private http: HttpClient) { }

  getFellows() {
    console.log('fellows service: called getFellows');
    return this.http.get('http://localhost:3000/fellows');
  }

  getFellow(id){
    console.log(`fellows service: called getFellow for id: ${id}`);
    return this.http.get(`http://localhost:3000/fellows/${id}`);
  }


}
