import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() searchTerm: any = '';
  originalRepoData: any;
  title: string = 'Github repo';
  profileData: any = null;
  repoData: any[];
  repo: any[];
  pageSize = 10;
  currentPage = 1;
  totalPages: number;
  constructor(private apiService: ApiService) {
    this.loader = true;
  }

  loader: boolean;
  ngOnInit() {
    this.loadUserData('darshanparmar18');

    // this.apiService.getUser('johnpapa').subscribe((res) => {
    //   this.profileData = res;
    // });
    // this.apiService.getRepo('johnpapa').subscribe((res: any) => {
    //   this.repoData = res;
    //   this.originalRepoData = res.slice();
    //   this.totalPages = Math.ceil(this.repoData.length / this.pageSize);
    //   this.updateCards();
    //   this.loader = true;
    // });
  }

  loadUserData(username: string): void {
    this.apiService.getUser(username).subscribe((res) => {
      this.profileData = res;
    });
    this.apiService.getRepo(username).subscribe((res: any) => {
      this.repoData = res;
      this.totalPages = Math.ceil(this.repoData.length / this.pageSize);
      this.updateCards();
      this.loader = true;
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.loadUserData(this.searchTerm);
      this.searchTerm = '';
    }
  }

  // search(): void {
  //   // Filter the data based on the search term
  //   // For example, if `repoData` is an array of repositories, filter it based on the `name` property
  //   if (this.searchTerm.trim() !== '') {
  //     this.repoData = this.repoData.filter((repo) =>
  //       repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //     // Update pagination or perform other necessary actions
  //   } else {
  //     // If the search term is empty, reset the data to the original state
  //     this.repoData = this.originalRepoData.slice(); // Make sure to have a copy of the original data
  //     // Update pagination or perform other necessary actions
  //   }
  // }

  // next page of repo
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateCards();
    }
  }
  // previous page of repo
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateCards();
    }
  }

  updateCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.repo = this.repoData.slice(startIndex, endIndex);
  }

  getPageNumbers(): number[] {
    const pageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
}
