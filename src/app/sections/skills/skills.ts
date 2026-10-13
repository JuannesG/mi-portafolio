import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills';
import { TECH_LOGOS } from '../../data/tech-logos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly groups = SKILL_GROUPS;
  readonly logos = TECH_LOGOS;
}
