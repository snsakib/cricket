import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play.component';
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 

const routes: Routes = [
  { path: '', component: PlayComponent }
];

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayModule { }
