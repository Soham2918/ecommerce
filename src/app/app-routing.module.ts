import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerauthComponent } from './sellerauth/sellerauth.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sellerauth',component:SellerauthComponent},
  {path:'sellerhome',component:SellerhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
