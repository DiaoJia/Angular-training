import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';
import { LifecycleHooksComponent } from './pages/lifecycle-hooks/lifecycle-hooks.component';
import { AttributeDirectivesComponent } from './pages/attribute-directives/attribute-directives.component';
import { DynamicFormsComponent } from './pages/dynamic-forms/dynamic-forms.component';
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

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
    path: "dynamic-components",
    component: DynamicComponentsComponent
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
