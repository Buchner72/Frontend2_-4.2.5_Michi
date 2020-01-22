import { Component, Input, OnDestroy } from '@angular/core';

import { VertragProgressService } from './vertrag-progress.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'vertrag-progress',
    templateUrl: './vertrag-progress.component.html'
})
export class VertragProgressComponent implements OnDestroy {
    percent: number = 0;
    subscription: Subscription;

    constructor(private vertragProgressService: VertragProgressService) {
        this.subscription = vertragProgressService.percent$.subscribe(
            percent => {
                this.percent = percent;
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
