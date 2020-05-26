import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { InlineTopicComponent } from './shared/components/inline-topic/inline-topic.component';
import { ExplanationComponent } from './shared/components/explanation/explanation.component';
import { BigTitleComponent } from './shared/components/big-title/bit-title.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SigninComponent } from './pages/landing/signin/signin.component';
import { DailyComponent } from './pages/dashboard/daily/daily.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard-layout.component';
import { LandingLayoutComponent } from './layouts/landing/landing-layout.component';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InlineTopicComponent,
    ExplanationComponent,
    BigTitleComponent,
    FooterComponent,
    SigninComponent,
    SidebarComponent,
    DailyComponent,
    DashboardLayoutComponent,
    LandingLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardRoutingModule,
    LandingRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
