import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly menuOpen = signal(false);

  readonly links = [
    { label: 'Inicio', href: '#inicio' },
    {label: 'Sobre mí', href: '#sobre-mi'},
    {label: 'Habilidades', href: '#habilidades'},
    {label: 'Proyectos', href: '#proyectos'},
    {label: 'Servicios', href: '#servicios'},
    {label: 'Experiencia', href: '#experiencia'},
    {label: 'Contacto', href: '#contacto'},
  ];

  toggle() {
    this.menuOpen.update((open) => !open);
  }

  close() {
    this.menuOpen.set(false);
  }
}
