import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {

  bildNatur = "assets/images/bild_natur.png"
  bildHobbies = "assets/images/bild_hobbies.png"
  bildPortrait = "assets/images/bild_portrait.png"

  constructor() { }

  ngOnInit(): void {
  }

}
