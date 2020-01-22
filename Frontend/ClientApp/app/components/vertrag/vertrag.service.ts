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

//Vn
import { Vn } from './vn/_model/vn.model';
// Vp
import { Vp } from './vp/_model/vp.model';
// Kfz
import { Kfz } from './kfz/_model/kfz.model';
import { Pkw } from './kfz/_model/kfz-pkw.model';
import { Lkw } from './kfz/_model/kfz-lkw.model';
import { Motorrad } from './kfz/_model/kfz-motorrad.model';
import { Moped } from './kfz/_model/kfz-moped.model';
import { Dreirad } from './kfz/_model/kfz-dreirad.model';
import { VierradKl50 } from './kfz/_model/kfz-vierradKl50.model';
import { VierradGr50 } from './kfz/_model/kfz-vierradGr50.model';
import { Zugmaschine } from './kfz/_model/kfz-zugmaschine.model';
import { Anhaenger } from './kfz/_model/kfz-anhaenger.model';

@Injectable()
export class VertragService {
    private baseUrl: string;

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Reset Vertragscontainer
    reset(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/Reset')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError);
    }

    // Load Vertragscontainer
    load(file: any): Observable<boolean> {
        let formData: FormData = new FormData();
        formData.append('name', file.name);
        formData.append("file", file);
        let body = formData;
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.baseUrl + '/api/Vertrag/Load', body, options)
            .map(res => res.text() || null)
            .catch(this.handleError)
    }

    // Save Vertragscontainer
    save(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/Save')
            .map(res => {
                var blob = new Blob([res.text()], { type: 'application/octet-stream' });
                var url = window.URL.createObjectURL(blob);
                //window.open(url); // bekomme keinen brauchbaren filenamen
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style.display = "none";
                a.href = url;
                a.download = 'test.xml';
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(this.handleError);
    }

    // Plattform = tis/muki
    getPlattform(): Observable<string> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetPlattform')
            .map(res => { return res.text() || {} })
            .catch(this.handleError);
    }

    // Modus = angebot/antrag
    getModus(): Observable<string> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetModus')
            .map(res => { return res.text() || {} })
            .catch(this.handleError);
    }

    setModus(modus: string): Observable<string> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetModus?modus=' + modus)
            .map(res => { return res.text() || {} })
            .catch(this.handleError);
    }

    // Kunde = privat/firma
    getKunde(): Observable<string> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetKunde')
            .map(res => { return res.text() || {} })
            .catch(this.handleError);
    }

    setKunde(kunde: string): Observable<string> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetKunde?kunde=' + kunde)
            .map(res => { return res.text() || {} })
            .catch(this.handleError);
    }

    // Vn Collapseable
    getCollapseableVn(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseableVn')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseableVn(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleCollapseableVn?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Fp Collapseable
    getCollapseablePFp(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePFp')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePFp(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleCollapseablePFp?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Kv Collapseable
    getCollapseablePKv(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePKv')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePKv(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetCollapseablePKv?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Uv Collapseable
    getCollapseablePUv(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePUv')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePUv(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetCollapseablePUv?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Uvk Collapseable
    getCollapseablePUvk(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePUvk')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePUvk(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetCollapseablePUvk?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Kfz Collapseable
    getCollapseablePKfz(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePKfz')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePKfz(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleCollapseablePKfz?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // He Collapseable
    getCollapseablePHe(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePHe')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePHe(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetCollapseablePHe?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Rs Collapseable
    getCollapseablePRs(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetCollapseablePRs')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    toggleCollapseablePRs(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/SetCollapseablePRs?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Fp Enableable
    toggleEnableablePFp(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePFp?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePFp(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePFp')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Kv Enableable
    toggleEnableablePKv(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePKv?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePKv(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePKv')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Uv Enableable
    toggleEnableablePUv(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePUv?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePUv(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePUv')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Uvk Enableable
    toggleEnableablePUvk(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePUvk?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePUvk(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePUvk')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Kfz Enableable
    toggleEnableablePKfz(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePKfz?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePKfz(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePKfz')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // He Enableable
    toggleEnableablePHe(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePHe?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePHe(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePHe')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // Rs Enableable
    toggleEnableablePRs(value: boolean): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/ToggleEnableablePRs?value=' + value)
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    getEnableablePRs(): Observable<boolean> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetEnableablePRs')
            .map(res => {
                if (res.text() == 'true') {
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError)
    }

    // ### Vn ###
    // get Vn
    getVn(): Observable<Vn> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/GetVn')
            .map(this.extractVn)
            .catch(this.handleError)
    }

    // get new Vn
    newVn(): Observable<Vn> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/NewVn')
            .map(this.extractVn)
            .catch(this.handleError)
    }

    // add new Vn
    addVn(vn: Vn): Observable<Vn> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.baseUrl + '/api/Vertrag/AddVn', JSON.stringify(vn), options)
            .map(this.extractVn)
            .catch(this.handleError)
    }

    // update existing Vn
    updateVn(vn: Vn): Observable<Vn> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.baseUrl + '/api/Vertrag/UpdateVn', JSON.stringify(vn), options)
            .map(this.extractVn)
            .catch(this.handleError)
    }

    // delete existing Vn
    deleteVn(): Observable<Vn> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(this.baseUrl + '/api/Vertrag/DeleteVn', options)
            .map(this.extractVn)
            .catch(this.handleError)
    }

    private extractVn(res: Response) {
        let vn = res.json();
        // Datum
        // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
        // Datum convert
        if (vn !== null && vn.geburtsdatum !== null) {
            vn.geburtsdatum = new Date(parseInt(vn.geburtsdatum.substr(0, 4)), parseInt(vn.geburtsdatum.substr(5, 2)) - 1, parseInt(vn.geburtsdatum.substr(8, 2)), 12);
        }
        return vn as Vn || undefined;
    }

    // ### Vp ###
    // query all Vp
    queryVp(): Observable<Vp[]> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/QueryVp')
            .map((res: Response) => res.json() || {})
            .catch(this.handleError)
    }

    // get new Vp
    newVp(): Observable<Vp> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/NewVp')
            .map((res: Response) => res.json() || {})
            .catch(this.handleError)
    }

    // add new Vp
    addVp(vp: Vp): Observable<Vp[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.baseUrl + '/api/Vertrag/AddVp', JSON.stringify(vp), options)
            .map((res: Response) => res.json() || [])
            .catch(this.handleError)
    }

    // update existing Vp
    updateVp(vp: Vp): Observable<Vp[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(this.baseUrl + '/api/Vertrag/UpdateVp', JSON.stringify(vp), options)
            .map((res: Response) => res.json() || {})
            .catch(this.handleError)
    }

    // delete existing Vp
    deleteVp(id: string): Observable<Vp[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(this.baseUrl + '/api/Vertrag/DeleteVp?id=' + id, options)
            .map((res: Response) => res.json() || {})
            .catch(this.handleError)
    }

    // ### Kfz ###
    // query all Kfz
    queryKfz(): Observable<Kfz[]> {
        return this.http
            .get(this.baseUrl + '/api/Vertrag/QueryKfz')
            .map(this.extractKfzList)
            .catch(this.handleError)
    }

    // get new Kfz
    getKfzNew(typ: string): Observable<any> {
        switch (typ) {
            case "Pkw":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Pkw || undefined)
                    .catch(this.handleError);
            case "Lkw":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Lkw || undefined)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Motorrad || undefined)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Moped || undefined)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Dreirad || undefined)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as VierradKl50 || undefined)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as VierradGr50 || undefined)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Zugmaschine || undefined)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .get(this.baseUrl + '/api/Vertrag/GetKfzNew?typ=' + typ)
                    .map((res: Response) => res.json() as Anhaenger || undefined)
                    .catch(this.handleError)
        }
    }

    // add new Kfz
    addKfz(kfz: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzMoped', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzDreirad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzVierradKl50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzVierradGr50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzZugmaschine', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .post(this.baseUrl + '/api/Vertrag/AddKfzAnhaenger', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    // update existing Kfz
    updateKfz(kfz: any): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzMoped', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzDreirad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzVierradKl50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzVierradGr50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzZugmaschine', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzAnhaenger', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            default:
        }
    }

    // delete existing Kfz
    deleteKfz(id: string): Observable<any[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .delete(this.baseUrl + '/api/Vertrag/DeleteKfz?id=' + id, options)
            .map((res: Response) => res.json() || {})
            .catch(this.handleError)
    }

    // Haftpflicht
    toggleKfzHaftpflicht(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtMoped', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtDreirad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtVierradKl50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtVierradGr50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtZugmaschine', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzHaftpflichtAnhaenger', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    updateKfzHaftpflicht(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtMoped', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtDreirad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtVierradKl50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtVierradGr50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtZugmaschine', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzHaftpflichtAnhaenger', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    // Kasko
    toggleKfzKasko(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzKaskoPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzKaskoLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzKaskoMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    updateKfzKasko(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzKaskoPkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzKaskoLkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/UpdateKfzKaskoMotorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    // Rechtsschutz
    toggleKfzRechtsschutz(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Pkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Lkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Motorrad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Motorrad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Moped":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Moped', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Dreirad":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Dreirad', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradKl50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_VierradKl50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "VierradGr50":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_VierradGr50', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Zugmaschine":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Zugmaschine', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Anhaenger":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzRechtsschutz_Anhaenger', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    // Insassen
    toggleKfzInsassen(kfz: any): Observable<Kfz[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //
        switch (kfz.typ) {
            case "Pkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzInsassen_Pkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
            case "Lkw":
                return this.http
                    .put(this.baseUrl + '/api/Vertrag/ToggleKfzInsassen_Lkw', JSON.stringify(kfz), options)
                    .map(this.extractKfzList)
                    .catch(this.handleError)
        }
    }

    private extractKfzList(res: Response) {
        let kfzListSrc = res.json();
        let kfzListDest = [];
        var tmp: string;
        //
        kfzListSrc.forEach(item => {
            switch (item.typ) {
                case "Pkw":
                    let pkw: Pkw;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    // Listenpreis anpassen
                    if (item !== null && item.listenpreis !== null) {
                        tmp = item.listenpreis.toString();
                        item.listenpreis = tmp.replace('.', ',');
                    }
                    // Sonderausstattung anpassen
                    if (item !== null && item.sonderausstattung !== null) {
                        tmp = item.sonderausstattung.toString();
                        item.sonderausstattung = tmp.replace('.', ',');
                    }
                    // Folierung anpassen
                    if (item !== null && item.folierung !== null) {
                        tmp = item.folierung.toString();
                        item.folierung = tmp.replace('.', ',');
                    }
                    pkw = item as Pkw;
                    //
                    kfzListDest.push(pkw);
                    break;
                case "Lkw":
                    let lkw: Lkw;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    // Listenpreis anpassen
                    if (item !== null && item.listenpreis !== null) {
                        tmp = item.listenpreis.toString();
                        item.listenpreis = tmp.replace('.', ',');
                    }
                    // Sonderausstattung anpassen
                    if (item !== null && item.sonderausstattung !== null) {
                        tmp = item.sonderausstattung.toString();
                        item.sonderausstattung = tmp.replace('.', ',');
                    }
                    // Folierung anpassen
                    if (item !== null && item.folierung !== null) {
                        tmp = item.folierung.toString();
                        item.folierung = tmp.replace('.', ',');
                    }
                    lkw = item as Lkw;
                    //
                    kfzListDest.push(lkw);
                    break;
                case "Motorrad":
                    let motorrad: Motorrad;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    // Listenpreis anpassen
                    if (item !== null && item.listenpreis !== null) {
                        tmp = item.listenpreis.toString();
                        item.listenpreis = tmp.replace('.', ',');
                    }
                    // Sonderausstattung anpassen
                    if (item !== null && item.sonderausstattung !== null) {
                        tmp = item.sonderausstattung.toString();
                        item.sonderausstattung = tmp.replace('.', ',');
                    }
                    motorrad = item as Motorrad;
                    //
                    kfzListDest.push(motorrad);
                    break;
                case "Moped":
                    let moped: Moped;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    moped = item as Moped;
                    //
                    kfzListDest.push(moped);
                    break;
                case "Dreirad":
                    let dreirad: Dreirad;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    dreirad = item as Dreirad;
                    //
                    kfzListDest.push(dreirad);
                    break;
                case "VierradKl50":
                    let vierradKl50: VierradKl50;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    vierradKl50 = item as VierradKl50;
                    //
                    kfzListDest.push(vierradKl50);
                    break;
                case "VierradGr50":
                    let vierradGr50: VierradGr50;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    vierradGr50 = item as VierradGr50;
                    //
                    kfzListDest.push(vierradGr50);
                    break;
                case "Zugmaschine":
                    let zugmaschine: Zugmaschine;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    zugmaschine = item as Zugmaschine;
                    //
                    kfzListDest.push(zugmaschine);
                    break;
                case "Anhaenger":
                    let anhaenger: Anhaenger;
                    // Datum
                    // Es muss eine Uhrzeit angegeben werden, da man sich ansonsten stundenweise in der Zeit zurück bewegt (GMT+1 zieht bei jedem zuweisungsvorgang 1 Stunde ab)
                    // Datum convert
                    if (item !== null && item.versicherungsbeginn != null) {
                        item.versicherungsbeginn = new Date(parseInt(item.versicherungsbeginn.substr(0, 4)), parseInt(item.versicherungsbeginn.substr(5, 2)) - 1, parseInt(item.versicherungsbeginn.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.erstzulassungsDatum !== null) {
                        item.erstzulassungsDatum = new Date(parseInt(item.erstzulassungsDatum.substr(0, 4)), parseInt(item.erstzulassungsDatum.substr(5, 2)) - 1, parseInt(item.erstzulassungsDatum.substr(8, 2)), 12);
                    }
                    //
                    if (item !== null && item.anmeldeDatum !== null) {
                        item.anmeldeDatum = new Date(parseInt(item.anmeldeDatum.substr(0, 4)), parseInt(item.anmeldeDatum.substr(5, 2)) - 1, parseInt(item.anmeldeDatum.substr(8, 2)), 12);
                    }
                    anhaenger = item as Anhaenger;
                    //
                    kfzListDest.push(anhaenger);
                    break;
            }
        });
        return kfzListDest || [];
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