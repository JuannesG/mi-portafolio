import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
