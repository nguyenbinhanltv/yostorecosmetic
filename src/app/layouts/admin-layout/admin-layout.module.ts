import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
import { ProductsComponent } from 'app/pages/products/products.component';
import { CreateComponent } from 'app/pages/products/create/create.component';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ToolbarModule,
    SplitButtonModule,
    ToastModule,
    MessageModule,
    PanelModule
  ],
  declarations: [
    ProductsComponent,
    CreateComponent
  ],
  providers: [MessageService]
})

export class AdminLayoutModule {}
