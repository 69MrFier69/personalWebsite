import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './body/body.component';
import { homeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

// Import SDK for Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

//imports fpr pdf-viewer
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

//font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { TerminalWindowComponent } from './terminal-window/terminal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    BodyComponent,
    SidenavComponent,
    PagesComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProgressBarsComponent,
    TerminalWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    AuthModule.forRoot({
      domain: 'dev-491ddrgd.us.auth0.com',
      clientId: 'YipHN1qydQHfyYWfEzdEnch8l51ksNRc'
    }),
    FontAwesomeModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
