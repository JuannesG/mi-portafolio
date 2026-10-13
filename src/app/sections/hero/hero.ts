import { PROFILE } from './../../data/profile';
import { Component, inject } from '@angular/core';
import { ContactModal } from '../../core/contact-modal';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = PROFILE;
  readonly contact = inject(ContactModal);
}
