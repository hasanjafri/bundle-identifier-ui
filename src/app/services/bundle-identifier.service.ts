import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { BundleIdentifier } from '../models/bundleIdentifier';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BundleIdentifierService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3333/api';

  public getAllLists(): Observable<BundleIdentifier[]> {
    const URI = `${this.serverApi}/bundle/all`;
    return this.http.get(URI).map(res => res.json()).map(res => <BundleIdentifier[]>res.data);
  }

  public setBundleIdentifier(list: BundleIdentifier) {
    const URI = `${this.serverApi}/bundle/set`;
    const headers = new Headers;
    const body = JSON.stringify({bundle_id: list.bundle_id, build_number: list.build_number});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers}).map(res => res.json());
  }

  public readBundleIdentifier(list: BundleIdentifier) {
    const URI = `${this.serverApi}/bundle/id/` + list.bundle_id;
    return this.http.get(URI).map(res => res.json());
  }

  public bumpBundleIdentifier(list: BundleIdentifier) {
    const URI = `${this.serverApi}/bundle/bump`;
    const headers = new Headers;
    const body = JSON.stringify({bundle_id: list.bundle_id});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body, {headers: headers}).map(res => res.json());
  }

}
