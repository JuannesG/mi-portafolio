import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
