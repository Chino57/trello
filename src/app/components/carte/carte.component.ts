import { Component, OnInit, Input} from '@angular/core';
import { Carte, CarteService } from "src/app/services/carte.service";
import { Liste, ListeService } from 'src/app/services/liste.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  liste! : Liste[];
  cartes!: Carte[];
  @Input()carte!: Carte;
  
  constructor(public carteService: CarteService) { }

    ngOnInit() {
      this.carteService.getCartes().subscribe((cartes: any) => {
        this.cartes = cartes;
        console.log(this.cartes);
      })
    }
    }
