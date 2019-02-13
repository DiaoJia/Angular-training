import { AdService } from './services/ad.service';
import { AdBannerComponent } from './pages/dynamic-components/ad-banner.component';
import { AdDirective } from './shared/directives/ad.directive';
import { HeroProfileComponent } from './pages/dynamic-components/hero-profile.component';
import { HeroJobAdComponent } from './pages/dynamic-components/hero-job-ad.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
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
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignUpComponent,
    PageNotFoundComponent,
    DynamicFormsComponent,
    AttributeDirectivesComponent,
    LifecycleHooksComponent,
    LoaderComponent,
    HighlightDirective,
    DynamicComponentsComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    AdBannerComponent
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
    AdService,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true
		},
  ],
  entryComponents:[HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
