import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateParkingComponent } from './admin-create-parking.component';

describe('AdminCreateParkingComponent', () => {
  let component: AdminCreateParkingComponent;
  let fixture: ComponentFixture<AdminCreateParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
