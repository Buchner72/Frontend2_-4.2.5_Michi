import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class VertragProgressService {

    // Observable number sources
    private percentSource = new Subject<number>();

    // Observable string streams
    percent$ = this.percentSource.asObservable();

    // Service message commands
    increment(percent: number) {
        this.percentSource.next(percent);
    }

    reset() {
        this.percentSource.next(0);
    }
}