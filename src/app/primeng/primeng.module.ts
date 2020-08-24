import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { MessageModule } from 'primeng/message';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

const primengModule = [
  ToolbarModule,
  ToastModule,
  PanelModule,
  MessageModule,
  SplitButtonModule,
  InputNumberModule,
  TableModule,
  SidebarModule,
  ButtonModule
];

const materialModule = [
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    primengModule,
    materialModule
  ],
  exports: [
    primengModule,
    materialModule
  ]
})
export class PrimengModule { }
