import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkltLoaderComponentComponent } from './sklt-loader-component.component';

describe('SkltLoaderComponentComponent', () => {
  let component: SkltLoaderComponentComponent;
  let fixture: ComponentFixture<SkltLoaderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkltLoaderComponentComponent]
    });
    fixture = TestBed.createComponent(SkltLoaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
