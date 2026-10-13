import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { Experience } from './sections/experience/experience';
import { Footer } from './shared/footer/footer';
import { ContactDialog } from './shared/contact-dialog/contact-dialog';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Services, Experience, Footer, ContactDialog],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
