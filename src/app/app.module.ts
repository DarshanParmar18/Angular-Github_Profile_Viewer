import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimaryBtnComponent } from './common-components/primary-btn/primary-btn.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepoContainerComponent } from './components/repo-container/repo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryBtnComponent,
    ProfileComponent,
    RepoContainerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
