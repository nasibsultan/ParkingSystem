import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  parkingSlots: any =[];
  constructor(private router: Router) { }
  

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
          holdingId: JSON.parse(slotInformation)[0].holdingId
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
    console.log(parkingSlot.holdingId);
    localStorage.removeItem(parkingSlot.holdingId);
    location.reload();


    
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data.values);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
