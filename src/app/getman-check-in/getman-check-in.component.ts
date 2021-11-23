import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-getman-check-in',
  templateUrl: './getman-check-in.component.html',
  styleUrls: ['./getman-check-in.component.css']
})
export class GetmanCheckInComponent implements OnInit {

  
  state: any= {
      id: '',
      hourRate: ''
  };
  information: any = [];

  checkInForm = this.fb.group({
    id: ['', Validators.required]

  });

  constructor(private fb: FormBuilder, private router: Router) {
    let navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state as {
        id: string,
        hourRate: string
    }
   }

  ngOnInit(): void {
  }
  onSubmit(){

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;

    let slotInformation: any = localStorage.getItem(this.state.holdingId);
      
      if(slotInformation){
        this.information.push({
          id: JSON.parse(slotInformation)[0].id,
          hourRate: JSON.parse(slotInformation)[0].hourRate,
          holdingId: JSON.parse(slotInformation)[0].holdingId,
          isEmpty: false,
          inUseCarId: this.checkInForm.value.id+'',
          cars: JSON.parse(slotInformation)[0].cars,
          totalIncome: JSON.parse(slotInformation)[0].totalIncome
        })
      }
      this.information[0].cars.push({
        id: this.checkInForm.value.id+'',
        checkInTime: dateTime,
        checkOutTime: 'not'
      })

      localStorage.removeItem(this.state.holdingId);
    
      localStorage.setItem(this.state.holdingId,JSON.stringify(this.information));
      this.router.navigate(["getman/home"]);





  }

}
