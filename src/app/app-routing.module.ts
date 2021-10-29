import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: "ecommerce", component: EcommerceComponent },
  { path: "header", component: HeaderComponent},
  { path: "footer", component: FooterComponent},
  { path: "sidebar", component: SidebarComponent},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
