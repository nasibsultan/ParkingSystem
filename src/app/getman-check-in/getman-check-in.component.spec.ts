import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmanCheckInComponent } from './getman-check-in.component';

describe('GetmanCheckInComponent', () => {
  let component: GetmanCheckInComponent;
  let fixture: ComponentFixture<GetmanCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmanCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmanCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
