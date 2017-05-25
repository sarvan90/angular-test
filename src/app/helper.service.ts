import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class HelperService {
  private listUrl = 'http://localhost:3000/users';
  private itemUrl = 'http://localhost:3000/items/'
  constructor(private http: Http) { }

  getList() {
    return this.http.get(this.listUrl)
                    .map(this.extractData)
                    .catch(this.handleError);;          
  }

  getQueryList(str) {
    return this.http.get(this.listUrl+`?name_like=${str}`)
                    .map(this.extractData)
                    .catch(this.handleError);;          
  }

  getItems() {
    return this.http.get(this.itemUrl)
                    .map(this.extractData)
                    .catch(this.handleError);;          
  }

  createItem(name: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.itemUrl, { "name" : name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  updateItem(name: object) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.itemUrl, name, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }


  extractData(res){
    let body = res.json();
    return body || { };

  }

  handleError(error: Response | any){
    // In a real world app, you might use a remote logging infrastructure
    /*let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);*/
    return Observable.throw("Connect to DB:\n npm install -g json-server \n double click run.bat ");
  }

}
