import {Injectable} from "@angular/core";
import {FaceSnap} from "../Model/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FacesSnapsService{
    faceSnaps: FaceSnap[] = [
        {
            title:"Archibald",
            description: "Mon meilleur ami depuis tout petit !",
            creationDate: new Date(),
            snap: 5,
            imageUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            location: "a Paris"
        },
        {
            title: "Tulipe rose",
            description: "je dévoile un amour naissant, un sentiment pur et fragile",
            creationDate: new Date(),
            snap: 5,
            imageUrl:  "/assets/Images/tulipe-rose.jpg",
            location: "au Japon"
        },
        {
            title: "Orchidee",
            description: "j incarne  la beauté suprême, la splendeur  et la sensualité",
            creationDate: new Date(),
            snap: 5,
            imageUrl: "/assets/Images/Orchidee.jpg"
        }
    ];
}