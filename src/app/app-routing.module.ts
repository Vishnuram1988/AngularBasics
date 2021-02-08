import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization/organization.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {path: '', redirectTo:'/organization', pathMatch:'full'},
  {path: 'organization', component:OrganizationComponent},
  {path: 'role', component:RoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[OrganizationComponent, RoleComponent];