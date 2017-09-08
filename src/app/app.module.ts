import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SurgeonComponent } from './tracking/surgeon/surgeon.component';
import { FacilityComponent } from './tracking/facility/facility.component';
import { SystemComponent } from './tracking/system/system.component';
import { CaseComponent } from './tracking/case/case.component';

@NgModule({
  declarations: [
    AppComponent,
    SurgeonComponent,
    FacilityComponent,
    SystemComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
