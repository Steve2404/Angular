+ ng generate component face-snap ---> Creation d un Composant

//Fonction d initialisation
ngOnInit() {
this.mySnap = new FaceSnap(
"Archibald",
"Mon meilleur ami depuis tout petit !",
new Date(),
0,
"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"
);
this.mySnap2 = new FaceSnap(
"Tulipe-rose",
"je dévoile un amour naissant, un sentiment pur et fragile",
new Date(),
0,
"/assets/Images/tulipe-rose.jpg"
);
this.mySnap3 = new FaceSnap(
"Orchidee",
"j incarne  la beauté suprême, la splendeur  et la sensualité",
new Date(),
0,
"/assets/Images/Orchidee.jpg"
);
}