import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../Model/face-snap.model";
import {FacesSnapsService} from "../Service/faces-snaps.service";

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  @Input() faceSnap!: FaceSnap; // Propriete: On importe notre model genere dans cette Klasse. Il devient injectable depuis le parent
  isSnaps!: boolean;
  boutonText!: string;

  constructor(private faceSnapsServices: FacesSnapsService) { }

  ngOnInit(): void {
    this.boutonText = "Oh snap !";
    this.isSnaps = true;
  }

  onChangeSnaps() {
      if(this.isSnaps){
        this.boutonText = "Oops, un Snap!";
        this.isSnaps = false;
        this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'snap');
      }else{
          this.faceSnapsServices.snapFaceSnapById(this.faceSnap.id, 'unsnap') ;
          this.boutonText = "Oh snap !";
          this.isSnaps = true;
      }




  }

}
