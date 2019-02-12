import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "dynamic-forms",
    component: DynamicFormsComponent
  },
  {
    path: "attribute-directives",
    component: AttributeDirectivesComponent
  },
  {
    path: "lifecycle-hooks",
    component: LifecycleHooksComponent
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
