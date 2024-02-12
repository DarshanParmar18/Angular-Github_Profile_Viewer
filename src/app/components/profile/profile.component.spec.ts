import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.profileData = {
      name: 'John Doe',
      bio: 'Software Engineer',
      location: 'New York',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render profile data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1').textContent).toContain('John Doe');
    expect(compiled.querySelector('h4').textContent).toContain(
      'Software Engineer'
    );
    expect(compiled.querySelector('p').textContent).toContain('New York');
  });
});
