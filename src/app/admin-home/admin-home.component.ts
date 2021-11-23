import { DialogSlotDetailsComponent } from './../dialog-slot-details/dialog-slot-details.component';
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  parkingSlots: any =[];
  constructor(private router: Router,public dialog:MatDialog) { }
  

  ngOnInit(): void {
    let maxId: any= localStorage.getItem('parkingId');
    this.parkingSlots.push([]);
    this.parkingSlots.push([]);
    this.parkingSlots.push([]);
    this.parkingSlots.push([]);

    if(!maxId){
      maxId = 0;
    }
    else{
      maxId = +maxId;
    }
    for(let iterator=1; iterator <= maxId; iterator++){
      let slotInformation: any = localStorage.getItem(iterator+'');
      
      if(slotInformation){
        this.parkingSlots[iterator%4].push({
          id: JSON.parse(slotInformation)[0].id,
          hourRate: JSON.parse(slotInformation)[0].hourRate,
          holdingId: JSON.parse(slotInformation)[0].holdingId,
          isEmpty: JSON.parse(slotInformation)[0].isEmpty,
          cars: JSON.parse(slotInformation)[0].cars,
          totalIncome: JSON.parse(slotInformation)[0].totalIncome
        })
      }
    }
  }

  onCreate(){
    this.router.navigate(["admin/create/parking"]);
  }
  onEdit(parkingSlot: any){
    const navigationExtras: NavigationExtras = {
      state: {
        id: parkingSlot.id,
        hourRate: parkingSlot.hourRate,
        holdingId: parkingSlot.holdingId
      }}
    this.router.navigate(["admin/edit/parking"],navigationExtras);
  }
  onDelete(parkingSlot: any){
    localStorage.removeItem(parkingSlot.holdingId);
    location.reload();


    
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {

      console.log(event);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      if(event.previousIndex>=event.currentIndex){
        moveItemInArray(event.container.data, event.currentIndex+1,event.previousIndex);

      }else{
        moveItemInArray(event.container.data,event.currentIndex-1, event.previousIndex);
      }
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,//current
        event.previousIndex,
        event.currentIndex,
      );
      if(event.currentIndex+1 == event.container.data.length){
        console.log('ok');
        transferArrayItem(
          event.container.data,//current
          event.previousContainer.data,
          event.currentIndex-1,
          event.previousIndex,
        );

      }
      else {
        transferArrayItem(
          event.container.data,//current
          event.previousContainer.data,
          event.currentIndex+1,
          event.previousIndex,
        );
      }
      
      
    }
  }
  onDetails(parkingSlot: any){
    this.dialog.open(DialogSlotDetailsComponent, {data: parkingSlot});

  }



}
