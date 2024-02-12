import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user data', () => {
    const testData = {
      name: 'John Doe',
      bio: 'Software Engineer',
      location: 'New York',
    };
    service.getUser('johnpapa').subscribe((user) => {
      expect(user).toEqual(testData);
    });

    const req = httpTestingController.expectOne(
      'https://api.github.com/users/johnpapa'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
  });
});
