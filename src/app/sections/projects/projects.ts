import { Component, signal } from '@angular/core';
import { PROJECTS } from '../../data/projects';

type Tab = 'admin' | 'client';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly project = PROJECTS[0];
  readonly activeTab = signal<Tab>('admin');
  readonly selected = signal(0);

  setTab(tab: Tab) {
    this.activeTab.set(tab);
    this.selected.set(0);
  }

  select(index: number) {
    this.selected.set(index);
  }

  shots() {
    return this.activeTab() === 'admin' ? this.project.admin : this.project.client;
  }

  current() {
    return this.shots()[this.selected()];
  }
}
