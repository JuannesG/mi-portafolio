import { Component } from '@angular/core';
import { SERVICES } from '../../data/services';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly services = SERVICES;
}
