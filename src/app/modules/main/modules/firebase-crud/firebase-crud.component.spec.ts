import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCRUDComponent } from './firebase-crud.component';

describe('FirebaseCRUDComponent', () => {
  let component: FirebaseCRUDComponent;
  let fixture: ComponentFixture<FirebaseCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
