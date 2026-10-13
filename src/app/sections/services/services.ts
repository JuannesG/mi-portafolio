import { Component, inject } from '@angular/core';
import { SERVICES } from '../../data/services';
import { ContactModal } from '../../core/contact-modal';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly services = SERVICES;
  readonly contact = inject(ContactModal);
}
