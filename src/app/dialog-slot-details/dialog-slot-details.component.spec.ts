import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSlotDetailsComponent } from './dialog-slot-details.component';

describe('DialogSlotDetailsComponent', () => {
  let component: DialogSlotDetailsComponent;
  let fixture: ComponentFixture<DialogSlotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSlotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
