import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Commentaire {
  id: string;
  contenu: string;
  dateCreation: string;
  idCarte: string;
  utilisateur: string;
  carte: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  commentaires = [];
  constructor(private http: HttpClient) { }

  getComs() {
    return this.http.get("http://localhost:3000/commentaires")
  }

  getCom(id: string) {
    return this.http.get(`http://localhost:3000/commentaires/${id}`)
  }

  getComsbyCardId(idCarte: string) {
    return this.http.get(`http://localhost:3000/commentaires?idCarte=${idCarte}`)
  }

  createCom(commentaire: any) {
    return this.http.post(`http://localhost:3000/commentaires`, commentaire)
  }

  updateCom(commentaire: any) {
    return this.http.put(`http://localhost:3000/commentaires/${commentaire.id}`, commentaire)
  }

  deleteCom(id: string) {
    return this.http.delete(`http://localhost:3000/commentaires/${id}`)
  }
}
