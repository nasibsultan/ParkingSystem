import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';

const MaterialCompontents= [
MatButtonModule,
DragDropModule
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
