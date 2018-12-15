import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FellowsComponent } from './fellows/fellows.component';
import { Fellow } from './fellows/fellows.component';

@Injectable({
  providedIn: 'root'
})
export class FellowsService {

  constructor(private http: HttpClient) { }

  fellowsUrl = 'http://localhost:3000/fellows';

  getFellows() {
    console.log('fellows service: called getFellows');
    return this.http.get<Fellow[]>(this.fellowsUrl);
  }

  getFellow(id){
    console.log(`fellows service: called getFellow for id: ${id}`);
    return this.http.get<Fellow>(`${this.fellowsUrl}${id}`);
  }


}
