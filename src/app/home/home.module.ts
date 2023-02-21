import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SentenceCasePipe } from '../pipes/sentence-case.pipe';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PipesModule,
  ],exports:[
    HomeComponent
  ]
})
export class HomeModule { }
