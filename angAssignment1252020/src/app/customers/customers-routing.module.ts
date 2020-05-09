import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';
import { PrimaryDetailComponent } from './customers-form/primary-detail/primary-detail.component';
import { CommunicationDetailComponent } from './customers-form/communication-detail/communication-detail.component';
import { SecondaryDetailComponent } from './customers-form/secondary-detail/secondary-detail.component';
import { CustomersComponent } from './customers.component';
import { AuthguardGuard } from '../authguard.guard';
import { Role } from '../model/role.model';




const routes: Routes = [
  
  { path: '', 
 
  component: CustomersComponent,
  canActivate : [AuthguardGuard],
  data: {
    roles: [
      Role.admin,
      Role.customer
    ]
  },
  children: [
    {
      path: '',
      redirectTo: 'customers-list',
      pathMatch: 'full'
    },

    {
      path: 'customers-list',
      component: CustomersListComponent
    },
    {
      path: 'customers-form',
      component: CustomersFormComponent,
      children: [
      { path: '',  redirectTo: 'primary-detail', pathMatch: 'full' },
      { path: 'primary-detail', component: PrimaryDetailComponent },
      { path: 'secondary-detail', component: SecondaryDetailComponent },
      { path: 'communication-detail', component: CommunicationDetailComponent }
      ]
    },
  ] 

},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
