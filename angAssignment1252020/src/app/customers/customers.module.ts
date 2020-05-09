import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { PrimaryDetailComponent } from './customers-form/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './customers-form/secondary-detail/secondary-detail.component';
import { CommunicationDetailComponent } from './customers-form/communication-detail/communication-detail.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersFormComponent,
    PrimaryDetailComponent,
    SecondaryDetailComponent,
    CommunicationDetailComponent,
  

  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
