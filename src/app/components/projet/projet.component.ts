import { Component, OnInit } from '@angular/core';
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

}
