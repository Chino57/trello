import { Component, OnInit } from '@angular/core';
import { Liste, ListeService } from "../../services/liste.service";
import { Carte, CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {

  listes!: Liste[];
  cartes!: Carte[];

  constructor(
    public listeService: ListeService, 
    public carteService: CarteService ) { }


  ngOnInit(){
    this.listeService.getListes().subscribe((listes: any) => {
      this.listes = listes;
      console.log(this.listes);
    })

  }
}
