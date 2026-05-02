import { Component, inject } from '@angular/core';
import { SwPeopleService } from '../sw-people.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-zsmuckerbryan-faves',
  imports: [AsyncPipe],
  templateUrl: './zsmuckerbryan-faves.html',
  styleUrl: './zsmuckerbryan-faves.css',
})
export class ZsmuckerbryanFaves {
  private swPeopleSvc = inject(SwPeopleService);

  protected readonly people$ = this.swPeopleSvc.getSwPeople();

  protected promisesAsThenables() {
    const numberPromise = this.swPeopleSvc.getMagicNumber(true)
      .then(
        n => {
          console.log(n);

          this.swPeopleSvc.getMagicNumber(true)
          .then(
            n2 => console.log(n2)
          )
          .catch (
            e => console.warn(e)
          )
        ;
      }
    ).catch(
      e => console.warn(e)
    )
    ;
  }

  protected async promisesWithAsyncAwait() {
    try {
       const numberOne = await this.swPeopleSvc.getMagicNumber(true);
       console.log(numberOne); // ????

       const numberTwo = await this.swPeopleSvc.getMagicNumber(true);
       console.log(numberTwo); 
    }

    catch (e) {
      console.warn(e);
    }
  }

  protected async promisesFun() {
    try {
       const numberOne = this.swPeopleSvc.getMagicNumber(true);
       // console.log(numberOne); // ????

       const numberTwo = this.swPeopleSvc.getMagicNumber(false);
       // console.log(numberTwo); 

       // const data = await Promise.all(
       // [numberOne, numberTwo]
       // );

       const data = await Promise.any(
       [numberOne, numberTwo]
       );

       // const data = await Promise.race(
       // [numberOne, numberTwo]
       // );

       console.log(data);
    }

    catch (e) {
      console.warn(e);
    }
  }
}
