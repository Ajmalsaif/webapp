import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { DemoNgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NavbarComponent } from '../navbar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DemoNgZorroAntdModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule ,
    
  ]
})
export class ApplicationModule { }
