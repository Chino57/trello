import { Component, OnInit } from '@angular/core';
import { ProjetService, Projet } from "../../services/projet.service";
import { ListeService } from 'src/app/services/liste.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projets!: Projet[];
  
  constructor(
    public projetServices: ProjetService,
    public listeService : ListeService) { }

  ngOnInit(){
    this.projetServices.getProjets().subscribe((projets: any) => {
      this.projets = projets;
      console.log(this.projets);
    })
  }

}
