import { Component, OnInit } from '@angular/core';
import { licensedocData } from './license-data';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  licenseData = licensedocData;
  constructor() { }

  ngOnInit(): void {
  }

}
