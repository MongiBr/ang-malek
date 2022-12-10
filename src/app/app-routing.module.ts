import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { PortefeuilleOperationComponent } from './components/portefeuille-operation/portefeuille-operation.component';
import { FormVirementComponent } from './components/form-virement/form-virement.component';
import { FormRetirerComponent } from './components/form-retirer/form-retirer.component';
import { FormVersementComponent } from './components/form-versement/form-versement.component';
import { FormRemiseComponent } from './components/form-remise/form-remise.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'Dashboard', component: AdminSidebarComponent },
  { path: 'portefeuille', component: PortefeuilleOperationComponent },
  { path: 'virement', component: FormVirementComponent },
  { path: 'retirer', component: FormRetirerComponent },
  { path: 'versement', component: FormVersementComponent },
  { path: 'remise', component: FormRemiseComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
