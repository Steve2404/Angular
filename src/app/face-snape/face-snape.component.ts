import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  title! : string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnaps!: boolean;
  boutonText!: string;


  constructor() { }

  ngOnInit(): void {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis tout petit !";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.boutonText = "Oh snap !"
    this.isSnaps = true;

  }

  onChangeSnaps() {
      if(this.isSnaps){
        this.boutonText = "Oops, un Snap!";
        this.isSnaps = false;
        this.snaps ++;
      }else{
          this.snaps -- ;
          this.boutonText = "Oh snap !";
          this.isSnaps = true;
      }




  }

}
