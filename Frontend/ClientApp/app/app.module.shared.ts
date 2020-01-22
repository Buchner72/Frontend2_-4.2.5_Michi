import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppComponent } from './components/app/app.component';
import { CurrencyNumberFormatterDirective } from './components/formatter/currency-number-formatter.directive';
import { CurrencyNumberPipe } from './components/formatter/currency-number.pipe';
import { DateValueAccessor } from './components/valueAccessor/date-value-accessor';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { VertragProgressComponent } from './components/progressbar/vertrag-progress.component';
import { HomeComponent } from './components/home/home.component';
import { VertragComponent } from './components/vertrag/vertrag.component';
import { VnComponent } from './components/vertrag/vn/vn.component';
import { VnEditComponent } from './components/vertrag/vn/vn-edit.component';
import { VnListComponent } from './components/vertrag/vn/vn-list.component';
import { FpComponent } from './components/vertrag/fp/fp.component';
import { FpNewComponent } from './components/vertrag/fp/fp-new.component';
import { FpListComponent } from './components/vertrag/fp/fp-list.component';
import { KvComponent } from './components/vertrag/kv/kv.component';
import { UvComponent } from './components/vertrag/uv/uv.component';
import { UvkComponent } from './components/vertrag/uvk/uvk.component';
import { KfzComponent } from './components/vertrag/kfz/kfz.component';
import { KfzEditComponent } from './components/vertrag/kfz/kfz-edit.component';
import { KfzListComponent } from './components/vertrag/kfz/kfz-list.component';
import { KfzHaftpflichtComponent } from './components/vertrag/kfz/produkte/kfz-haftpflicht.component';
import { KfzKaskoComponent } from './components/vertrag/kfz/produkte/kfz-kasko.component';
import { KfzRechtsschutzComponent } from './components/vertrag/kfz/produkte/kfz-rechtsschutz.component';
import { KfzInsassenComponent } from './components/vertrag/kfz/produkte/kfz-insassen.component';
import { EurotaxComponent } from './components/vertrag/kfz/_eurotax/eurotax.component';
import { HeComponent } from './components/vertrag/he/he.component';
import { RsComponent } from './components/vertrag/rs/rs.component';
import { VertragService } from './components/vertrag/vertrag.service';
import { VertragProgressService } from './components/progressbar/vertrag-progress.service';
import { EurotaxService } from './components/vertrag/kfz/_eurotax/_service/eurotax.service';
import { TryoutComponent } from './components/tryout/tryout.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        CurrencyNumberFormatterDirective,
        CurrencyNumberPipe,
        DateValueAccessor,
        NavMenuComponent,
        VertragProgressComponent,
        HomeComponent,
        // Vertrag
        VertragComponent,
        VnComponent,
        VnEditComponent,
        VnListComponent,
        FpComponent,
        FpNewComponent,
        FpListComponent,
        KvComponent,
        UvComponent,
        UvkComponent,
        // Kfz
        KfzComponent,
        KfzEditComponent,
        KfzListComponent,
        KfzHaftpflichtComponent,
        KfzKaskoComponent,
        KfzRechtsschutzComponent,
        KfzInsassenComponent,
        EurotaxComponent,
        // HaushaltEigenheim
        HeComponent,
        // Rechtsschutz
        RsComponent,
        //
        TryoutComponent,
        //
        FooterComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'vertrag', component: VertragComponent },
            { path: 'vertrag/:id', component: VertragComponent },
            { path: 'tryout', component: TryoutComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
