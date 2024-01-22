import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Projet {
  id : string;
  nom: string;
  description: string;
  dateCreation: string;
  liste: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  projets = [];

  constructor(private http: HttpClient) {}
  getProjets() {
    return this.http.get("http://localhost:3000/projets")
  }

  getProjet(id: string) {
    return this.http.get(`http://localhost:3000/projets/${id}`)
  }

  createProjet(projet: any) {
    return this.http.post(`http://localhost:3000/projets`, projet)
  }

  updateProjet(projet: any) {
    return this.http.put(`http://localhost:3000/projets/${projet.id}`, projet)
  }

  deleteProjet(id: string) {
    return this.http.delete(`http://localhost:3000/projets/${id}`)
  }
}
