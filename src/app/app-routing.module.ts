import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { CreateConceptComponent } from './concept/createconcept/createconcept.component';
import { UpdateConceptStepperComponent } from './concept/update-concept-stepper/update-concept-stepper.component';
import { UpdateconceptComponent } from './concept/updateconcept/updateconcept.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DefinestepsComponent } from './steps/definesteps/definesteps.component';
import { DefineconceptComponent } from './concept/defineconcept/defineconcept.component';
import { ConceptFormComponent } from './concept/concept-form/concept-form.component';
import { DefineSolutionComponent } from './concept/define-solution/define-solution.component';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: AuthComponent},
  {path: 'login', component: AuthComponent},
  {path: 'create-concept', component: CreateConceptComponent},
  {path: 'update-concept/:id', component: UpdateConceptStepperComponent},
  {path: 'define-steps', component: DefinestepsComponent},
  {path: 'update-concept/:id', component: UpdateconceptComponent},
  { path: 'define-concept/:id', component: DefineconceptComponent},
  {path: 'concept-form', component: ConceptFormComponent},
  { path: 'define-solution/:id', component: DefineSolutionComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'solution', component: SolutionComponent},
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
