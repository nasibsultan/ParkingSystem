import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmanHomeComponent } from './getman-home.component';

describe('GetmanHomeComponent', () => {
  let component: GetmanHomeComponent;
  let fixture: ComponentFixture<GetmanHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmanHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
