import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';

const MaterialCompontents= [
MatButtonModule,
DragDropModule,
MatDialogModule
]

@NgModule({
  imports: [
    MaterialCompontents
  ],
  exports: [
    MaterialCompontents

  ]
})
export class MaterialModule { }
