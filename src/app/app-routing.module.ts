import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// new import
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { PengurusComponent } from './pengurus/pengurus.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AngkatanComponent } from './angkatan/angkatan.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'pengurus', component: PengurusComponent},
  { path: 'about', component: AboutComponent},
  { path: 'angkatan', component: AngkatanComponent},
  { path: 'angkatan/:id', component: UserComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
