import { Component, signal, inject } from '@angular/core';
import { ContactModal } from '../../core/contact-modal';
import { ThemeService } from '../../core/theme';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly theme = inject(ThemeService);
  readonly menuOpen = signal(false);
  private readonly contact = inject(ContactModal);

  openContact() {
    this.close();
    this.contact.open();
  }

  readonly links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Experiencia', href: '#experiencia' },
  ];

  toggle() {
    this.menuOpen.update((open) => !open);
  }

  close() {
    this.menuOpen.set(false);
  }
}
