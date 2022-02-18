import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../Model/face-snap.model";
import {FacesSnapsService} from "../Service/faces-snaps.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  //Variable d initialisation
  faceSnaps!: FaceSnap[]; // UN tableau qui va contenir tous nos face-snaps

  constructor(private faceSnapsServices: FacesSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsServices.faceSnaps;

  }

}
