import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateConceptComponent } from './concept/createconcept/createconcept.component';
import { NewfunctiondialogComponent } from './concept/newfunctiondialog/newfunctiondialog.component';
import { UpdateconceptComponent } from './concept/updateconcept/updateconcept.component';
import { WidgetsModule } from './widgets/widgets.module';
import { CKEditorModule } from 'ckeditor4-angular';

import { ConceptFormBuilderComponent } from './concept/defineconcept/concept-form-builder/concept-form-builder.component';
import { DefineconceptComponent } from './concept/defineconcept/defineconcept.component';
import { AdComponentDirective } from './concept/defineconcept/ad-component.directive';
import { ListItemComponent } from './concept/defineconcept/concept-form-builder/list-item/list-item.component';
import { NewtermdialogComponent } from './concept/newtermdialog/newtermdialog.component';
import { DefinestepsComponent } from './steps/definesteps/definesteps.component';
import { UpdateConceptStepperComponent } from './concept/update-concept-stepper/update-concept-stepper.component';
import { ConceptFormComponent } from './concept/concept-form/concept-form.component';
import { ConceptFormControlComponent } from './concept/concept-form/concept-form-control/concept-form-control.component';
import { ConceptFormDialogComponent } from './concept/concept-form/concept-form-dialog/concept-form-dialog.component';
import { DefineSolutionComponent } from './concept/define-solution/define-solution.component';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './solution/solution.component';
import { CreatestepComponent } from './steps/createstep/createstep.component';
import { UpdatetermdialogComponent } from './concept/updatetermdialog/updatetermdialog.component';
import { UpdatefunctiondialogComponent } from './concept/updatefunctiondialog/updatefunctiondialog.component';

import { SharedModule } from './shared/shared.module';
import { NewconstraintdialogComponent } from './concept/newconstraintdialog/newconstraintdialog.component';
import { UpdateconstraintdialogComponent } from './concept/updateconstraintdialog/updateconstraintdialog.component';
import { DefinesolutionsComponent } from './solution/definesolutions/definesolutions.component';
import { CreatesolutionsComponent } from './solution/createsolutions/createsolutions.component';
import {MatRadioModule} from '@angular/material/radio';
import { NewvariabledialogComponent } from './concept/newvariabledialog/newvariabledialog.component';
import { AddconstraintdialogComponent } from './concept/addconstraintdialog/addconstraintdialog.component';
import { NewconditiondialogComponent } from './steps/newconditiondialog/newconditiondialog.component';
import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';
import { UpdatevariabledialogComponent } from './concept/updatevariabledialog/updatevariabledialog.component';
import { UpdatetermconstraintdialogComponent } from './concept/updatetermconstraintdialog/updatetermconstraintdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    HomeComponent,
    PageNotFoundComponent,
    CreateConceptComponent,
    NewfunctiondialogComponent,
    UpdatefunctiondialogComponent,
    UpdateconceptComponent,
    ConceptFormBuilderComponent,
    DefineconceptComponent,
    AdComponentDirective,
    ListItemComponent,
    NewtermdialogComponent,
    ConceptFormComponent,
    ConceptFormControlComponent,
    ConceptFormDialogComponent,
    DefineSolutionComponent,
    DefinestepsComponent,
    UpdateConceptStepperComponent,
    SolutionComponent,
    CreatestepComponent,
    UpdatetermdialogComponent,
    NewconstraintdialogComponent,
    UpdateconstraintdialogComponent,
    DefinesolutionsComponent,
    CreatesolutionsComponent,
    NewvariabledialogComponent,
    AddconstraintdialogComponent,
    NewconditiondialogComponent,
    UpdatevariabledialogComponent,
    UpdatetermconstraintdialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    WidgetsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatChipsModule,
    MatStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatBadgeModule,
    CKEditorModule,
    AppRoutingModule,
    SharedModule,
    MatRadioModule,
    TreeViewModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
