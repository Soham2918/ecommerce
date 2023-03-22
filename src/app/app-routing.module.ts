import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerauthComponent } from './sellerauth/sellerauth.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sellerauth',component:SellerauthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
