import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-getman-home',
  templateUrl: './getman-home.component.html',
  styleUrls: ['./getman-home.component.css']
})
export class GetmanHomeComponent implements OnInit {
  parkingSlots: any =[];
  information: any = [];

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
          holdingId: JSON.parse(slotInformation)[0].holdingId,
          inUseCarId: JSON.parse(slotInformation)[0].inUseCarId,
          isEmpty: JSON.parse(slotInformation)[0].isEmpty,
          cars: JSON.parse(slotInformation)[0].cars,
          totalIncome: JSON.parse(slotInformation)[0].totalIncome
        })
      }
    }
  }

  onCheckIn(parkingSlot: any){
    const navigationExtras: NavigationExtras = {
      state: {
        id: parkingSlot.id,
        holdingId: parkingSlot.holdingId,
        hourRate: parkingSlot.hourRate
      }}
    this.router.navigate(["getman/check/in"],navigationExtras);
 

  }
  onCheckOut(parkingSlot: any){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    console.log(dateTime);

    let slotInformation: any = localStorage.getItem(parkingSlot.holdingId);
      
      if(slotInformation){
        this.information.push({
          id: JSON.parse(slotInformation)[0].id,
          hourRate: JSON.parse(slotInformation)[0].hourRate,
          holdingId: JSON.parse(slotInformation)[0].holdingId,
          isEmpty: true,
          inUseCarId: '',
          cars: JSON.parse(slotInformation)[0].cars,
          totalIncome: JSON.parse(slotInformation)[0].totalIncome
        })

        

        for (let i = 0; i < this.information[0].cars.length; i++) {
          
          if(this.information[0].cars[i].id==JSON.parse(slotInformation)[0].inUseCarId
                  &&  this.information[0].cars[i].checkOutTime=='not'){
                    this.information[0].cars[i].checkOutTime=dateTime;
                    this.information[0].totalIncome = (parseInt(this.information[0].totalIncome) + 
                                                    parseInt(this.information[0].hourRate))+'';
                  }
        }
      }

      localStorage.removeItem(parkingSlot.holdingId);
    
      localStorage.setItem(parkingSlot.holdingId,JSON.stringify(this.information));
      this.router.navigate(["getman/home"]);
      location.reload();


  }
  calculateHourDifference(startTime: any, endTime:any): number{
    let hourDifference: any;

    let date1:any = new Date(startTime);
    let date2:any = new Date(endTime);

    const diffInMilliseconds: any = Math.abs(date2 - date1);
    hourDifference = Math.ceil(diffInMilliseconds/(1000.0 * 3600.0));

    return hourDifference;

  }

}
