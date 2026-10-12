import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Services, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
