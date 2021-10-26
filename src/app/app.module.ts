import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RequestErrorComponent } from './shared/request-error/request-error.component';
import { RequestErrorInterceptor } from './shared/request-error/request-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RequestErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestErrorInterceptor,
    multi: true,
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
