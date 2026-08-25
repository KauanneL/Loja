import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LojaService {
    private url = 'http://localhost:3000/produtos';

    constructor(private http: HttpClient) { }

    obterTodos() {
        return this.http.get(this.url);
    }
}
