import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../Model/face-snap.model";

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  @Input() faceSnap!: FaceSnap; // On importe notre model genere dans cette Klasse.
  isSnaps!: boolean;
  boutonText!: string;


  constructor() { }

  ngOnInit(): void {
    this.boutonText = "Oh snap !";
    this.isSnaps = true;
  }

  onChangeSnaps() {
      if(this.isSnaps){
        this.boutonText = "Oops, un Snap!";
        this.isSnaps = false;
        this.faceSnap.snap ++;
      }else{
          this.faceSnap.snap -- ;
          this.boutonText = "Oh snap !";
          this.isSnaps = true;
      }




  }

}
