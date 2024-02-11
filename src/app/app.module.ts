import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryBtnComponent } from './common-components/primary-btn/primary-btn.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RepoContainerComponent } from './components/repo-container/repo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryBtnComponent,
    ProfileComponent,
    PaginationComponent,
    RepoContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
