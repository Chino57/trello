import { Component, Input, OnInit } from '@angular/core';
import { Carte, CarteService } from "../../services/carte.service";
import { Liste, ListeService } from 'src/app/services/liste.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  cartes!: Carte[];
  carte!: Carte;
  liste! : Liste[];
  actualList!: Liste;
  
  constructor(public carteService: CarteService,
              public listeService: ListeService) { }

  displayCard(liste: Liste) {
    this.actualList = liste
    this.carteService
        .getCartesByListesId(liste.id)
        .subscribe((cartes: any) => {
          this.cartes = cartes;
          console.log(this.cartes)    
        })
  }
  
  
  ngOnInit(){
    this.displayCard(this.liste[0])
    
  };
}
