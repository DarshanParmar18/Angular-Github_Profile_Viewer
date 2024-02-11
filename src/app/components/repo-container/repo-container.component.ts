import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-container',
  templateUrl: './repo-container.component.html',
  styleUrls: ['./repo-container.component.scss'],
})
export class RepoContainerComponent {
  @Input() repos: any[] = [
    {
      name: 'Heroes',
      description: 'Heroes description goes here',
      language: ['Javascript', 'Python'],
    },
    {
      name: 'Heroes',
      description: 'Heroes description goes here',
      language: ['Javascript', 'Python', 'Java'],
    },
    {
      name: 'Heroes',
      description: 'Heroes description goes here',
      language: ['Javascript', 'Python'],
    },
    {
      name: 'Heroes',
      description: 'Heroes description goes here',
      language: ['Javascript', 'Python', 'C#'],
    },
  ];
}
