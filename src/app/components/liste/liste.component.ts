import { Component, Input, OnInit } from '@angular/core';
import { Liste, ListeService } from "../../services/liste.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {

  listes!: Liste[];
  @Input()liste!:Liste;
  
  constructor(
    public listeService: ListeService) { }


  ngOnInit(){
    this.listeService.getListes().subscribe((listes: any) => {
      this.listes = listes;
      console.log(this.listes);
    })

  }
}
