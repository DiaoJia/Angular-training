import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DynamicFormsComponent } from './pages/dynamic-forms/dynamic-forms.component';
import { AttributeDirectivesComponent } from './pages/attribute-directives/attribute-directives.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    PageNotFoundComponent,
    DynamicFormsComponent,
    AttributeDirectivesComponent,
    LifecycleHooksComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    SharedService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
