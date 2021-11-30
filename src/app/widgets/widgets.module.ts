import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathEditorComponent } from './math-editor/math-editor.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MathSymPipe } from './math-sym.pipe';
import { MathQuillButtonComponent } from './math-editor/math-quill-button/math-quill-button.component';



@NgModule({
  declarations: [MathEditorComponent, MathSymPipe, MathQuillButtonComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatListModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MathEditorComponent
  ]
})
export class WidgetsModule { }
