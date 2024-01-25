import { Component, OnInit, Input } from '@angular/core';
import { ProjetService, Projet } from "../../services/projet.service";
import { Liste, ListeService } from 'src/app/services/liste.service';
import { Carte, CarteService } from 'src/app/services/carte.service';


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets!: Projet[];
  actualProjet!: Projet;
  listes! : Liste[];
  liste!: Liste;
  cartes!: Carte[]
  @Input()projet!: string;
  @Input()newListe!: string;
  @Input()newCarte!: string;
  
  constructor(
    public projetServices: ProjetService,
    public listeService : ListeService,
    public carteService: CarteService) { }

  selectProjet(projet: Projet) {
    this.actualProjet = projet;
    this.listeService
        .getListesByProjectId(projet.id)
        .subscribe((listes: any) => {
          this.listes = listes;
          console.log(this.listes);
        })
  }

  ngOnInit(){
    this.projetServices.getProjets().subscribe((projets: any) => {
      this.projets = projets;
      console.log(this.projets);
      this.selectProjet(this.projets[0]);
    })
  }

  sendProjet() {
    this.projetServices
        .createProjet({
          id: "5",
          nom: this.projet,
          description: "Un nouveau super projet",
          dateCreation: "26/01/2024",
          liste: "Listes de tache à effectuer"
        })
        .subscribe((nouveauProjet: any) => {
          this.projets.push(nouveauProjet);
          this.projet = "";
        });
  }

  sendList() {
    this.listeService
        .createListe({
          id: "5",
          nom : this.newListe,
          idProjet: "5",
          cartes: "liste de carte correspondantes",
          projet: "mon projet super cool"
        })
        .subscribe((nouvelleListe: any) => {
          this.listes.push(nouvelleListe);
          this.newListe = "";
        });
  }
  sendCard() {
      this.carteService
        .createCarte({
          id: "5",
          titre: this.newCarte,
          description: "création du schéma de mon site",
          dateCreation: "26/01/2024",
          idListe: "5",
          liste: "Tâches importantes" 
        })
        .subscribe((nouvelleCarte: any) => {
          this.cartes.push(nouvelleCarte);
          this.newCarte = "";
        });
  }
}
