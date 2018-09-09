import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSetComponent } from './api-set.component';

describe('ApiSetComponent', () => {
  let component: ApiSetComponent;
  let fixture: ComponentFixture<ApiSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
