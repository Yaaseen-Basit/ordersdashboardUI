import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { RecentorderComponent } from './recentorder/recentorder.component';
import { OrderDetailsPopupComponent } from './order-details-popup/order-details-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopdatacardsComponent } from './topdatacards/topdatacards.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUsersComponent } from './new-users/new-users.component';
import { BottomGraphsCardsComponent } from './bottom-graphs-cards/bottom-graphs-cards.component';
// import { ChartsModule   } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { TagComponent } from './tag/tag.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    TopnavbarComponent,
    RecentorderComponent,
    OrderDetailsPopupComponent,
    TopdatacardsComponent,
    NewUsersComponent,
    BottomGraphsCardsComponent,
    TagComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,HttpClientModule,CommonModule,MatDialogModule,MatProgressBarModule,
    AppRoutingModule,MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
