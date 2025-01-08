import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './shared/components/loading-page/loading-page.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoadingPageComponent,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}