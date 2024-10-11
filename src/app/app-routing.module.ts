import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'True Build - Home'},
  {path: 'about-us', component: AboutUsComponent, title: 'About True Build'},
  {path: 'our-services', component: OurServicesComponent, title: 'True Build Services'},
  {path: 'contact-us', component: ContactUsComponent, title: 'Contact True Build'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
