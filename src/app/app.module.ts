import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SmallPackageComponent } from './small-package/small-package.component';
import { ProPackageComponent } from './pro-package/pro-package.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { PageSelectionPanelComponent } from './page-selection-panel/page-selection-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SmallPackageComponent,
    ProPackageComponent,
    ContactComponent,
    TechStackComponent,
    PageSelectionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot('G-39DWZF6TBS'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
