import { TestBed } from '@angular/core/testing';

import { ExerciceService } from './exercice.service';

describe('ExerciceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciceService = TestBed.get(ExerciceService);
    expect(service).toBeTruthy();
  });
});
