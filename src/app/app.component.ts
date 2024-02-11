import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  profileData: any;
  repoData: any;
  constructor(private apiService: ApiService) {
    this.loader = true;
  }

  loader: boolean;
  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe((res) => {
      this.profileData = res;
    });
    this.apiService.getRepo('johnpapa').subscribe((res) => {
      this.repoData = res;
    });
  }
}
