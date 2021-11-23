import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-slot-details',
  templateUrl: './dialog-slot-details.component.html',
  styleUrls: ['./dialog-slot-details.component.css']
})
export class DialogSlotDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public parkingSlot: any) { }

  ngOnInit(): void {
    console.log(this.parkingSlot)
  }

}
