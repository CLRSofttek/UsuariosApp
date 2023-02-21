import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentenceCasePipe } from './sentence-case.pipe';
import { AddressPipe } from './address.pipe';



@NgModule({
  declarations: [
    SentenceCasePipe,
    AddressPipe
  ],
  imports: [
    CommonModule
  ],exports:[
    SentenceCasePipe,
    AddressPipe
  ]
})
export class PipesModule { }
