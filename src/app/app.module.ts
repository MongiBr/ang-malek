import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { PortefeuilleOperationComponent } from './components/portefeuille-operation/portefeuille-operation.component';
import { FormVirementComponent } from './components/form-virement/form-virement.component';
import { FormRetirerComponent } from './components/form-retirer/form-retirer.component';
import { FormVersementComponent } from './components/form-versement/form-versement.component';
import { FormRemiseComponent } from './components/form-remise/form-remise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    LoginComponent,
    RegisterComponent,
    AdminSidebarComponent,
    PortefeuilleOperationComponent,
    FormVirementComponent,
    FormRetirerComponent,
    FormVersementComponent,
    FormRemiseComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [UserService],

  bootstrap: [AppComponent],
})
export class AppModule {}
