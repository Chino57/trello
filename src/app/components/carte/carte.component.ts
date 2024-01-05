import { Component, OnInit } from '@angular/core';
import { Carte, CarteService } from "../../services/carte.service";

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor(private carteService: CarteService) { }
  cartes! : Carte[];
  
  ngOnInit(){
        this.carteService.getCartes().subscribe((cartes: any) => {
        this.cartes = cartes;
        console.log(this.cartes);
      })
    }
  }
