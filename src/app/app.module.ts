import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { SimplifyiotComponent } from './simplifyiot/simplifyiot.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustpipePipe } from './custpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    SimplifyiotComponent,
    InnovativeComponent,
    DemopipesComponent,
    CustpipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
