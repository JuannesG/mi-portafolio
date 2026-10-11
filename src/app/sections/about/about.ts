import { Component } from '@angular/core';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly profile = PROFILE;
}
