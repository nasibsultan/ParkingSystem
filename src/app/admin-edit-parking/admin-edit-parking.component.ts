import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit-parking',
  templateUrl: './admin-edit-parking.component.html',
  styleUrls: ['./admin-edit-parking.component.css']
})
export class AdminEditParkingComponent implements OnInit {

  state: any= {
    id: '',
        hourRate: '',
        holdingId: ''
  };
  information: any = [];
 
  editParkingForm = this.fb.group({
    id: ['',Validators.required],
    hourRate: ['',Validators.required],
    holdingId: [''] 
  });

  constructor(private fb: FormBuilder,private router: Router) {
    let navigation = this.router.getCurrentNavigation();
    this.state = navigation.extras.state as {
        id: string,
        hourRate: string,
        holdingId: string
    }
    
    
   };
   ngOnInit(): void{
     if(this.state.id){
       this.fillUpForm();
     }
   }
   fillUpForm(){
    this.editParkingForm.patchValue({
      id: this.state.id,
      hourRate: this.state.hourRate,
      holdingId: this.state.holdingId
    })
     
   }

  
  onSubmit(){
    if (this.editParkingForm.valid) { 

    let value : any = this.editParkingForm.value;
    let id:  any= value.holdingId;

    
    this.information.push({
      id: value.id+'',
      hourRate: value.hourRate+'',
      holdingId: id
    });
    
    localStorage.removeItem(id);
    
    localStorage.setItem(id,JSON.stringify(this.information));
    this.router.navigate(["admin/home"]);

    }      
      
  }

}
