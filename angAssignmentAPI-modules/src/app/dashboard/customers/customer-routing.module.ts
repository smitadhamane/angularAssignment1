import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { PrimaryDetailComponent } from './customers-form/primary-detail/primary-detail.component';
import { SecondaryDetailComponent } from './customers-form/secondary-detail/secondary-detail.component';
import { CommunicationDetailComponent } from './customers-form/communication-detail/communication-detail.component';



const routes: Routes = [
    
    { path: 'customers', component: CustomersComponent,
    children: [
      { path: '',  redirectTo: 'customers-list', pathMatch: 'full'   },
      { path: 'customers-list', component: CustomersListComponent },
      { path: 'customers-form', component: CustomersFormComponent,
      children: [
        { path: '',  redirectTo: 'primary-detail', pathMatch: 'full' },
        { path: 'primary-detail', component: PrimaryDetailComponent },
        { path: 'secondary-detail', component: SecondaryDetailComponent },
        { path: 'communication-detail', component: CommunicationDetailComponent },
      ]
    
    },
    ] 
  
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
