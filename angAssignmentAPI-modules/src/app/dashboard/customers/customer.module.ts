import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { CommunicationDetailComponent } from './customers-form/communication-detail/communication-detail.component';
import { PrimaryDetailComponent } from './customers-form/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './customers-form/secondary-detail/secondary-detail.component';
import { AuthService } from 'src/app/service/auth.service';
import { LoginService } from 'src/app/service/login.service';
import { SharedService } from 'src/app/service/shared.service';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
    imports: [CommonModule,FormsModule, ReactiveFormsModule, FormControl, CustomerRoutingModule],
    declarations: [CustomersComponent, CustomersFormComponent,
                CommunicationDetailComponent, PrimaryDetailComponent, SecondaryDetailComponent],
    providers: [AuthService, LoginService, SharedService]

})
export class Customer {

}