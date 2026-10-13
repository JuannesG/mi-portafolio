import { Component, inject } from '@angular/core';
import { ContactModal } from '../../core/contact-modal';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  readonly contact = inject(ContactModal);
  readonly year = new Date().getFullYear();
  readonly links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
  ];
}
