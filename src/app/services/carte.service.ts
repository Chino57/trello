import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Carte {
  id : string;
  titre: string;
  description: string;
  dateCreation: string;
  idListe: string;
  commentaires: string;
  liste: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  cartes = [];

  constructor(private http: HttpClient) { }

  getCartes() {
    return this.http.get("http://localhost:3000/cartes")
  }

  getCarte(id: string) {
    return this.http.get(`http://localhost:3000/cartes/${id}`)
  }

  getCartesByListesId(idListe: string) {
    return this.http.get(`http://localhost:3000/cartes?idListe=${idListe}`)
  }

  createCarte(carte: any) {
    return this.http.post(`http://localhost:3000/cartes`, carte)
  }

  updateCarte(carte: any) {
    return this.http.put(`http://localhost:3000/cartes/${carte.id}`, carte)
  }

  deleteCarte(id: string) {
    return this.http.delete(`http://localhost:3000/cartes/${id}`)
  }
}