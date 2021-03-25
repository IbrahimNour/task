import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatDialogModule } from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { SearchFiltterPipe } from './search-filtter.pipe';




@NgModule({
  declarations: [SearchFiltterPipe],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MatDialogModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    SearchFiltterPipe
  ]
})
export class SharedModule { }
