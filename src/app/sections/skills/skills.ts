import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  readonly groups = SKILL_GROUPS;
}
