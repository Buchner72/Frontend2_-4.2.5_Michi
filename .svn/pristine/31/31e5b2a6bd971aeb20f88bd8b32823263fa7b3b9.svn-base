import {
    Component,
    ViewChild,
    EventEmitter,
    Input,
    Output,
    OnInit
} from '@angular/core';

import { VertragService } from '../vertrag.service';
import { VertragProgressService } from '../../progressbar/vertrag-progress.service';

import { CurrencyNumberFormatterDirective } from '../../formatter/currency-number-formatter.directive';
import { CurrencyNumberPipe } from '../../formatter/currency-number.pipe';

import { VnListComponent } from './vn-list.component';

import { Vn } from './_model/vn.model';

@Component({
    selector: 'vn',
    templateUrl: './vn.component.html',
    providers: [
        VertragService,
        CurrencyNumberPipe
    ]
})
export class VnComponent implements OnInit {
    @ViewChild(VnListComponent)
    private vnListComponent: VnListComponent;

    @Input()
    modus: string;
    @Input()
    isEnabledPVn: boolean;
    @Input()
    isEnabledPFp: boolean;
    @Input()
    isEnabledPKv: boolean;
    @Input()
    isEnabledPUv: boolean;
    @Input()
    isEnabledPKfz: boolean;
    @Input()
    isEnabledPHe: boolean;
    @Input()
    isEnabledPRs: boolean;

    @Output()
    emitVn = new EventEmitter<Vn>();

    public isCollapsed: boolean;

    // Vn
    public vn: any;
    public vnNew: any;
    public vnUpdate: any;
    //
    public errMsg: string;

    constructor(private vertragService: VertragService, private vertragProgressService: VertragProgressService) { }

    ngOnInit(): void {
        this.getVn();
        this.getCollapseable();
    }

    // ### Vn
    doReset(): void {
        this.vn = undefined;
        this.vnNew = undefined;
        this.vnUpdate = undefined;
    }

    // Panel
    getCollapseable(): void {
        this.vertragService.getCollapseableVn()
            .subscribe(
            isCollapsedVn => this.isCollapsed = isCollapsedVn,
            error => this.errMsg = <any>error
            );
    }

    onToggleCollapseable(): void {
        this.isCollapsed = !this.isCollapsed;
        this.vertragService.toggleCollapseableVn(this.isCollapsed)
            .subscribe(
            isCollapsedVn => this.isCollapsed = isCollapsedVn,
            error => this.errMsg = <any>error
            );
    }

    //onVnGet
    getVn(): void {
        this.vertragService
            .getVn()
            .subscribe(
                vn => {
                    this.vn = vn;
                    //
                    this.emitVn.emit(this.vn);
                },
                error => this.errMsg = <any>error
            )
    }

    // Vn New
    onVnNew(): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .newVn()
            .subscribe(
                vn => {
                    this.vnNew = vn;
                },
                error => this.errMsg = <any>error
            );
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset() }, 250);
    }

    // Vn Add
    doVnAdd(vn: any): void {
        this.vertragProgressService.increment(50);
        //
        if (vn !== undefined) {
            this.vertragService
                .addVn(vn)
                .subscribe(
                    vn => {
                        this.vn = vn;
                        //
                        this.emitVn.emit(this.vn);
                    },
                    error => this.errMsg = <any>error
                )
        }
        // undefined (Cancel)
        this.vnNew = undefined;
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    // Vn Update
    doVnUpdate(vn: any): void {
        this.vertragProgressService.increment(50);
        //
        if (vn !== undefined) {
            this.vertragService
                .updateVn(vn)
                .subscribe(
                    vn => {
                        this.vn = vn;
                        //
                        this.emitVn.emit(this.vn);
                    },
                    error => this.errMsg = <any>error
                )
        }
        this.vnUpdate = undefined;
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    // Vn Delete
    doVnDelete(): void {
        this.vertragProgressService.increment(50);
        //
        this.vertragService
            .deleteVn()
            .subscribe(
                vn => {
                    this.vn = vn
                    //
                    this.emitVn.emit(this.vn);
                },
                error => this.errMsg = <any>error
            )
        //
        this.vertragProgressService.increment(99);
        setTimeout(() => { this.vertragProgressService.reset(); }, 250);
    }

    doForwardedVnEdit(): void {
        this.isCollapsed = true;
        this.vnListComponent.doForwardedVnEdit();
    }
}