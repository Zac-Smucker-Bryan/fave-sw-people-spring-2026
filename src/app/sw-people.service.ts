import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwPeopleService {
  private http = inject(HttpClient);

  public getSwPeople() {
    const fromApi = this.http.get<any>('https://swapi.info/api/people');

    return fromApi;
  }
}
