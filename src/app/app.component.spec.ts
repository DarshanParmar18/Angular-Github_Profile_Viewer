import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ProfileComponent } from './components/profile/profile.component';
import { RepoContainerComponent } from './components/repo-container/repo-container.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, ProfileComponent, RepoContainerComponent],
      imports: [HttpClientModule],
      providers: [ApiService],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fyle-frontend-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fyle-frontend-challenge');
  });
});
