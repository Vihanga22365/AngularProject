import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AssignmentAComponent } from './assignment-a/assignment-a.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, HomeComponent, AssignmentAComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
