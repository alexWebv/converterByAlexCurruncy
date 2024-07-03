import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbar} from "@angular/material/toolbar";
import {FlexModule} from "@angular/flex-layout";
import { CardInfoComponent } from './card-info/card-info.component';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";



@NgModule({
  declarations: [
    HeaderComponent,
    CardInfoComponent
  ],
  exports: [
    HeaderComponent,
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    MatToolbar,
    FlexModule,
    MatCard,
    MatCardHeader,
    MatCardContent
  ]
})
export class SharedModule { }
