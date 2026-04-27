import { Component, inject } from '@angular/core';
import { SwPeopleService } from '../sw-people.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-lmeier-faves',
  imports: [AsyncPipe],
  templateUrl: './lmeier-faves.html',
  styleUrl: './lmeier-faves.css',
})
export class LmeierFaves {
    private swPeopleSvc = inject(SwPeopleService);

    protected readonly people$ = this.swPeopleSvc.getSwPeople();


}
