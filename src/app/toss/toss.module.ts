import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TossComponent } from './toss.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [TossComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class TossModule { }
