import {
    Inject,
    Injectable
} from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Marke } from '../_model/EutaxMarke.model';
import { Modell } from '../_model/EutaxModell.model';
import { Typ } from '../_model/EutaxTyp.model';
import { Fahrzeug } from '../_model/EutaxFahrzeug.model';


@Injectable()
export class EurotaxService {
    private baseUrl: string;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Eurotax search Marke
    searchMarke(kfzTyp: string, searchTerm: string): Observable<Marke[]> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SearchEurotaxMarke/' + kfzTyp + '/' + searchTerm)
            .map(res => res.json() || [])
            .catch(this.handleError);
    }

    // Eurotax search Modell
    searchModell(kfzTyp: string, natCodeMarke: string, baujahr: string, searchTerm: string): Observable<Modell[]> {
        if (searchTerm == undefined) {
            return this.http
                .get(this.baseUrl + '/api/Vertrag/SearchEurotaxModell/' + kfzTyp + '/' + baujahr + '/' + natCodeMarke)
                .map(res => res.json() || [])
                .catch(this.handleError);
        } else {
            return this.http
                .get(this.baseUrl + '/api/Vertrag/SearchEurotaxModell/' + kfzTyp + '/' + baujahr + '/' + natCodeMarke + '/' + searchTerm)
                .map(res => res.json() || [])
                .catch(this.handleError);
        }
    }

    // Eurotax search Typ
    searchTyp(kfzTyp: string, natCodeMarke: string, natCodeModell: string, baujahr: string, searchTerm: string): Observable<Typ[]> {
        if (searchTerm == undefined) {
            return this.http
                .get(this.baseUrl + '/api/Vertrag/SearchEurotaxTyp/' + kfzTyp + '/' + baujahr + '/' + natCodeMarke + '/' + natCodeModell)
                .map(res => res.json() || [])
                .catch(this.handleError);
        } else {
            return this.http
                .get(this.baseUrl + '/api/Vertrag/SearchEurotaxTyp/' + kfzTyp + '/' + baujahr + '/' + natCodeMarke + '/' + natCodeModell + '/' + searchTerm)
                .map(res => res.json() || [])
                .catch(this.handleError);
        }
    }

    // Eurotax search Fahrzeug
    searchFahrzeug(kfzTyp: string, natCode: string, baujahr: string): Observable<Fahrzeug[]> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SearchEurotaxFahrzeug/' + kfzTyp + '/' + natCode + '/' + baujahr)
            .map(res => res.json() || [])
            .catch(this.handleError);
    }

    // Eurotax search NatCode
    searchNatCode(kfzTyp: string, natCode: string, baujahr: string): Observable<Fahrzeug[]> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SearchEurotaxNatCode/' + kfzTyp + '/' + natCode + '/' + baujahr)
            .map(res => res.json() || [])
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = "${error.status} - ${error.statusText || ''} ${err}"
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
 