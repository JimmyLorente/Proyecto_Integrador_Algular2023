import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavleftComponent } from './navleft/navleft.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    NavleftComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SharedComponent,
    NavbarComponent,
    NavleftComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
