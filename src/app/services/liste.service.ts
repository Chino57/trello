import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Liste {
  id : string;
  nom: string;
  idProjet: string;
  cartes: string;
  projet: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListeService {

  listes = [];

  constructor(private http: HttpClient) { }

  getListes() {
    return this.http.get("http://localhost:3000/liste")
  }

  getListe(id: string) {
    return this.http.get(`http://localhost:3000/liste/${id}`)
  }

  getListesByProjectId(projectId: string) {
    return this.http.get(`http://localhost:3000/liste?projectId=${projectId}`)
  }

  createListe(liste: any) {
    return this.http.post(`http://localhost:3000/liste`, liste)
  }

  updateListe(liste: any) {
    return this.http.put(`http://localhost:3000/liste/${liste.id}`, liste)
  }

  deleteListe(id: string) {
    return this.http.delete(`http://localhost:3000/liste/${id}`)
  }
}
