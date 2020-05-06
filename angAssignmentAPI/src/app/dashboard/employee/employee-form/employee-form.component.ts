import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm : FormGroup;
  selectedBG: string = '';
  firstname;lastname;birthdate;gender;bloodGrp;

  constructor(private shareserice : SharedService) { }
   bloodGroup :any  = [ 'A +ve' , 'A -ve' ,'B +ve' , 'B -ve','O +ve' , 'O -ve']
   ngOnInit() {
 
 
    this.employeeForm = new FormGroup({
      firstname : new FormControl('' , Validators.required),
      lastname : new FormControl('' , Validators.required),
      birthdate : new FormControl('' , Validators.required),
      gender : new FormControl('female' , Validators.required),
      bloodGrp : new FormControl(null, Validators.required)
    });
  
    if (this.shareserice.editableID) {
   this.firstname=this.employeeForm.value.firstname ;
   this.firstname = this.shareserice.employeeEditabledata.firstname;
   this.lastname= this.employeeForm.value.lastname ; 
   this.lastname = this.shareserice.employeeEditabledata.lastname;
   this.birthdate= this.employeeForm.value.birthdate ;  
   this.birthdate = this.shareserice.employeeEditabledata.birthdate;
   this.gender= this.employeeForm.value.gender ;
   this.gender = this.shareserice.employeeEditabledata.gender;
   this.bloodGrp= this.employeeForm.value.bloodGrp ;
   this.bloodGrp = this.shareserice.employeeEditabledata.bloodGrp;
    }
    else {
      this.gender = 'female';
    }
  }
  formData(){
   
    this.shareserice.employeeFormdata(this.employeeForm.value)
    console.log(this.employeeForm.value.birthdate);
    
  }

  selectChangeHandler(event : any) {
     this.selectedBG = event.target.value;
     console.log(this.selectedBG);

  }
}
