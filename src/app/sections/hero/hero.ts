import { PROFILE } from './../../data/profile';
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = PROFILE;
}
