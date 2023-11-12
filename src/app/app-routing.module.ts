import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopdatacardsComponent } from './topdatacards/topdatacards.component';
import { RecentorderComponent } from './recentorder/recentorder.component';
import { NewUsersComponent } from './new-users/new-users.component';

const routes: Routes = [
  { path: 'dashboard', component: TopdatacardsComponent },
  { path: 'users', component: NewUsersComponent },
  { path: 'orders', component: RecentorderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
