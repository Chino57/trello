import { Component, OnInit, Input} from '@angular/core';
import { Carte, CarteService } from "src/app/services/carte.service";
import { Liste, ListeService } from 'src/app/services/liste.service';
import { Commentaire, CommentaireService } from 'src/app/services/commentaire.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  liste! : Liste[];
  cartes!: Carte[];
  @Input()carte!: Carte;
  actualCarte!: Carte;
  commentaires!: Commentaire[];
  
  constructor(public carteService: CarteService,
              public commentaireService: CommentaireService) { }

  displayComs(carte: Carte) {
    this.actualCarte = carte;
    console.log(this.carte)
    this.commentaireService
        .getComsbyCardId(carte.id)
        .subscribe((commentaires: any) => {
          this.commentaires = commentaires
          console.log(commentaires)
        })
  }

    ngOnInit() {
      this.carteService.getCartes().subscribe((cartes: any) => {
        this.cartes = cartes;
        console.log(this.cartes);
        this.displayComs(this.carte)
      })
    }
    }
