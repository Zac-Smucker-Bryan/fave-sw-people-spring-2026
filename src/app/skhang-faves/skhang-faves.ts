import { Component, inject } from '@angular/core';
import { SwPeopleService } from '../sw-people.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-skhang-faves',
  imports: [AsyncPipe],
  templateUrl: './skhang-faves.html',
  styleUrl: './skhang-faves.css',
})
export class SkhangFaves {
  private swPeopleSvc = inject(SwPeopleService);

  protected readonly people$ = this.swPeopleSvc.getSwPeople();
}
