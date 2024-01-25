import { Component, OnInit, Input } from '@angular/core';
import { ProjetService, Projet } from "../../services/projet.service";
import { Liste, ListeService } from 'src/app/services/liste.service';


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
  @Input()projet!: string;
  
  constructor(
    public projetServices: ProjetService,
    public listeService : ListeService) { }

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
          nom: this.projet,
          description: "Un nouveau super projet",
          dateCreation: "26/01/2024",
          liste: "Listes de tache à effectuer"
        })
        .subscribe((projet: any) => {
          this.projets.push(projet);
          this.projet = "";
        });
  }
}
