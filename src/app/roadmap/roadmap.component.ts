import { Component, OnInit } from '@angular/core';

import { roadmapInfoData } from "./roadmap-data"

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  roadmapData = roadmapInfoData;

  bild_idea = "assets/images/bild_idea.png"

  constructor() { }

  ngOnInit(): void {
  }

}
