import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuard } from './auth.guard';
import { ListepartenairesComponent } from './listepartenaires/listepartenaires.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import {CompteComponent } from './compte/compte.component';
import {AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'acceuil',
    component: AcceuilComponent
  },
  {
    path: 'ajout',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'listepartenaires',
    component:ListepartenairesComponent
  },
  // {
  //   path: 'partenaires',
  //   component:ListepartenairesComponent
  // },
  {
    path: 'depot',
    component:DepotComponent
  },
  {
    path: 'compte',
    component:CompteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
