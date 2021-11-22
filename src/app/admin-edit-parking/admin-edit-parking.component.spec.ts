import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditParkingComponent } from './admin-edit-parking.component';

describe('AdminEditParkingComponent', () => {
  let component: AdminEditParkingComponent;
  let fixture: ComponentFixture<AdminEditParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
