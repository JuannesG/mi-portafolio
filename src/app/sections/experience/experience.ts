import { Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
}
