import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotoService } from './services/moto.service';
import { MotorcycleListComponent } from './components/motorcycle-list/motorcycle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
