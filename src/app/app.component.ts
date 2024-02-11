import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'fyle-frontend-challenge';
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
    this.apiService.getUser('johnpapa').subscribe((res) => {
      this.profileData = res;
    });
    this.apiService.getRepo('johnpapa').subscribe((res: any) => {
      this.repoData = res;
      this.totalPages = Math.ceil(this.repoData.length / this.pageSize);
      this.updateCards();
      this.loader = true;
    });
  }

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
