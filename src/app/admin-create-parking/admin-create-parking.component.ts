import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-parking',
  templateUrl: './admin-create-parking.component.html',
  styleUrls: ['./admin-create-parking.component.css']
})
export class AdminCreateParkingComponent {
  
  createParkingForm = this.fb.group({
    id: ['',Validators.required],
    hourRate: ['',Validators.required]
  });


  information: any = [];

  constructor(private fb: FormBuilder,private router:Router) { }
  
 
  
  onSubmit(){
    if (this.createParkingForm.valid) { 

    let id:  any= localStorage.getItem('parkingId');

    if(!id){
      id= '1';
    }
    else{
      id  = (1  + (+id))+'';
    }


    localStorage.setItem('parkingId',id);

    let value : any = this.createParkingForm.value;

    this.information.push({
      id: value.id+'',
      hourRate: value.hourRate+'',
      holdingId: id,
      isEmpty: true,
      cars: [],
      totalIncome: '0',
      

    });
    
    localStorage.setItem(id,JSON.stringify(this.information));
    this.router.navigate(["admin/home"]);

    }      
      
  }
  
  

}
