import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule} from "@angular/common/http";
import {WorkerService} from "./services/worker-services/workerService";
import { WorkerComponent } from './pages/worker/worker.component';
import { WorkerLayoutComponent } from './worker-layout/worker-layout.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {FindWorkComponent} from "./pages/find-work/find-work.component";
import {DataViewModule} from "primeng/dataview";
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {RippleModule} from "primeng/ripple";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, HomepageComponent, WorkerComponent, WorkerLayoutComponent, FindWorkComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        InputSwitchModule,
        FormsModule,
        ButtonModule,
        ChipModule,
        DataViewModule,
        InputTextModule,
        DropdownModule,
        RatingModule,
        RippleModule,
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,WorkerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
