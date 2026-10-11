import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
