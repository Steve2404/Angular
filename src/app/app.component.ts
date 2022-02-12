import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./Model/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //Variable d initialisation
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  //Fonction d initialisation
  ngOnInit() {
    this.mySnap = {
      title:"Archibald",
      description: "Mon meilleur ami depuis tout petit !",
      creationDate: new Date(),
      snap: 0,
      imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      location: "Paris"
    };

    this.mySnap2 = {
      title: "Tulipe-rose",
      description: "je dévoile un amour naissant, un sentiment pur et fragile",
      creationDate: new Date(),
      snap: 0,
      imageUrl:  "/assets/Images/tulipe-rose.jpg",
      location: "Japon"
    };

    this.mySnap3 = {
      title: "Orchidee",
      description: "j incarne  la beauté suprême, la splendeur  et la sensualité",
      creationDate: new Date(),
      snap: 0,
      imageUrl: "/assets/Images/Orchidee.jpg"
    }
  }
}
