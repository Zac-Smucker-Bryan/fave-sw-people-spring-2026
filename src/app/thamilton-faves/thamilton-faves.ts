import { Component, inject } from '@angular/core';
import { SwPeopleService } from '../sw-people.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-thamilton-faves',
  imports: [AsyncPipe],
  templateUrl: './thamilton-faves.html',
  styleUrl: './thamilton-faves.css',
})
export class ThamiltonFaves {
  private swPeopleSvc = inject(SwPeopleService);

  //Naming convention: observables get a '$' at the end
  //hover over a thing to see if it is an observable
  protected readonly people$ = this.swPeopleSvc.getSwPeople();

  protected promisesAsThenables() {
    const numberPromise = this.swPeopleSvc
      .getMagicNumber(true)
      .then((n) => {
        console.log(n);

        this.swPeopleSvc
          .getMagicNumber(true)
          .then((n2) => console.log(n2))
          .catch((e) => console.warn(e));
      })
      .catch((e) => console.warn(e));
  }
}
