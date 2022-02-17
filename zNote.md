+ ng generate component face-snap ---> Creation d un Composant

+ #### --> Les Pipes: 
   + Ils permettent de formatter du text. On peut avoir :
      + **LowerCasePipe** : on affiche le texte en minuscules
      + **UpperCasePipe** : on affiche le texte en majuscules
      + **TitleCasePipe** : on affiche le texte avec une majuscule au début de
     
   + Pour le formatage des nombres:
        + **DecimalPipe** : facilite l'affichage de nombres avec des chiffres après la virgule (qui met une virgule plutôt qu'un point, par exemple).
          - number: 'nbreMin_chif_avant_virgule.nbreMin_chif_apres_virgule-nbreMax_chif_apres_virgule'
        + **PercentPipe** : formate les chiffres en pourcentage.
        + **CurrencyPipe** : permet d'afficher des nombres sous forme de monnaie très facilement.
          - currency: 'Euro' --> affiche le symbole
          - currency: 'Euro': 'code' --> affiche le code(EUR)
        