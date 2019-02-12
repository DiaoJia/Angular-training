import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    PageNotFoundComponent,
    DynamicFormsComponent,
    AttributeDirectivesComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
