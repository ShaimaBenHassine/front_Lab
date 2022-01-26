import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/models/article.model';
import { Event } from 'src/models/event.model';
import { Tool } from 'src/models/tool.model';
import {
  Member, MemberEnseignant, MemberEtudiant
} from '../models/memeber.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  // public placeholderMembers: Member[] = GLOBAL._DB.ourmembers;

  constructor(private httpClient: HttpClient) {}
  

  getAllEtd(): Promise<MemberEtudiant[]> {
    return this.httpClient
      .get<MemberEtudiant[]>('http://localhost:9000/MEMBRE-SERVICE/membres/etd')
      .toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }
  getAllEns(): Promise<MemberEnseignant[]> {
    return this.httpClient
      .get<MemberEnseignant[]>(
        'http://localhost:9000/MEMBRE-SERVICE/membres/ens'
      )
      .toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }

  getEtdById(id: string): Promise<MemberEtudiant> {
    return this.httpClient
      .get<MemberEtudiant>(
        `http://localhost:9000/MEMBRE-SERVICE/fullmember/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  getEnsById(id: string): Promise<MemberEnseignant> {
    return this.httpClient
      .get<MemberEnseignant>(
        `http://localhost:9000/MEMBRE-SERVICE/fullmember/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */
  saveEtd(member: any): Promise<MemberEtudiant> {
    return this.httpClient
      .post<MemberEtudiant>(
        'http://localhost:9000/MEMBRE-SERVICE/membres/etd',
        member
      )
      .toPromise();
    // const memberToSave = {
    //   id: member.id ?? Utils.fakeNumber().toString(),
    //   createdDate: member.createdDate ?? new Date().toISOString(), ...member
    // };
    // this.placeholderMembers = [memberToSave, ...this.placeholderMembers.filter(item => item.id !== member.id)];

    // return new Promise(resolve => resolve(memberToSave));
  }
  saveEns(member: any): Promise<MemberEnseignant> {
    return this.httpClient
      .post<MemberEnseignant>(
        'http://localhost:9000/MEMBRE-SERVICE/membres/ens',
        member
      )
      .toPromise();
    // const memberToSave = {
    //   id: member.id ?? Utils.fakeNumber().toString(),
    //   createdDate: member.createdDate ?? new Date().toISOString(), ...member
    // };
    // this.placeholderMembers = [memberToSave, ...this.placeholderMembers.filter(item => item.id !== member.id)];

    // return new Promise(resolve => resolve(memberToSave));
  }

  affecterEnsToEtd(idetd: string, idens: string): Promise<Member> {
    return this.httpClient
      .put<Member>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/etudiant/${idetd}/${idens}`,
        {}
      )
      .toPromise();
  }
  affecterOutil(idetd: string, idens: string): Promise<Member> {
    return this.httpClient
      .put<Member>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/affecteroutils/${idetd}/${idens}`,
        {}
      )
      .toPromise();
  }
  affecterEvt(idetd: string, idens: string): Promise<Member> {
    return this.httpClient
      .put<Member>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/affecterevt/${idetd}/${idens}`,
        {}
      )
      .toPromise();
  }
  affecterPub(idetd: string, idens: String): Promise<Member> {
    return this.httpClient
      .put<Member>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/affecterpub/${idetd}/${idens}`,
        {}
      )
      .toPromise();
  }

  removeMemberById(id: string): Promise<void> {
    return this.httpClient
      .delete<void>(`http://localhost:9000/MEMBRE-SERVICE/membres/${id}`)
      .toPromise();
    // this.placeholderMembers = this.placeholderMembers.filter(item => item.id !== id);
    // return new Promise(resolve => resolve());
  }
  findOutilsById(id: string): Promise<Tool[]> {
    return this.httpClient
      .get<Tool[]>(
        `http://localhost:9000/MEMBRE-SERVICE/outils/developpeur/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  findEventById(id: string): Promise<Event[]> {
    return this.httpClient
      .get<Event[]>(
        `http://localhost:9000/MEMBRE-SERVICE/evenements/organisateur/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  findArticleById(id: string): Promise<Article[]> {
    return this.httpClient
      .get<Article[]>(
        `http://localhost:9000/MEMBRE-SERVICE/publications/auteur/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  deleteEncadranttoEtudiant(idetd: string): Promise<Member> {
    return this.httpClient
      .put<Member>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/encadrant/delete/${idetd}`,
        {}
      )
      .toPromise();
  }

  findOutilsdiifById(id: string): Promise<Tool[]> {
    return this.httpClient
      .get<Tool[]>(`http://localhost:9000/MEMBRE-SERVICE/outildiff/${id}`)
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  findEventdiifById(id: string): Promise<Event[]> {
    return this.httpClient
      .get<Event[]>(`http://localhost:9000/MEMBRE-SERVICE/eventdiff/${id}`)
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  findArticlediifById(id: string): Promise<Article[]> {
    return this.httpClient
      .get<Article[]>(
        `http://localhost:9000/MEMBRE-SERVICE/publicationsdiff/${id}`
      )
      .toPromise();
    // return new Promise(resolve => resolve(
    //   this.placeholderMembers.filter(item => item.id === id)[0] ?? null
    // ));
  }
  removeTeacherById(id: string): Promise<Boolean> {
    return this.httpClient
      .delete<Boolean>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/teacher/${id}`
      )
      .toPromise();
    // this.placeholderMembers = this.placeholderMembers.filter(item => item.id !== id);
    // return new Promise(resolve => resolve());
  }
  findByCin(id: string): Promise<any> {
    return this.httpClient
      .get<any>(`http://localhost:9000/MEMBRE-SERVICE/membres/findbycin/${id}`)
      .toPromise();
  }
  findbyEmail(id: string): Promise<any> {
    return this.httpClient
      .get<any>(`http://localhost:9000/MEMBRE-SERVICE/membres/findbyemail/${id}`)
      .toPromise();
  }
  findbyNom(id: string): Promise<any[]> {
    return this.httpClient
      .get<any[]>(`http://localhost:9000/MEMBRE-SERVICE/membres/findbynom/${id}`)
      .toPromise();
  }
  findbydiplome(id: string): Promise<MemberEtudiant[]> {
    return this.httpClient
      .get<MemberEtudiant[]>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/findbydiplome/${id}`
      )
      .toPromise();
  }
  findByGrade(id: string): Promise<MemberEnseignant[]> {
    return this.httpClient
      .get<MemberEnseignant[]>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/findbygrade/${id}`
      )
      .toPromise();
  }
  findByEtablissement(id: string): Promise<MemberEnseignant[]> {
    return this.httpClient
      .get<MemberEnseignant[]>(
        `http://localhost:9000/MEMBRE-SERVICE/membres/findbyetablissement/${id}`
      )
      .toPromise();
  }
}
