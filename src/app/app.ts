import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Services],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
