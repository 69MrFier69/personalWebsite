import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { pdfdocData } from './pdf-data';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  
  //pdf sources
  pdfData = pdfdocData;

  constructor (public auth: AuthService){}

  ngOnInit(): void {
  }

}
