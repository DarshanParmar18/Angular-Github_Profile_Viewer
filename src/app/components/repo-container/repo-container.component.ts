import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-container',
  templateUrl: './repo-container.component.html',
  styleUrls: ['./repo-container.component.scss'],
})
export class RepoContainerComponent {
  @Input() repoData: any;

  constructor() {}
}
