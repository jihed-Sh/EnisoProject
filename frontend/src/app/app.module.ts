import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { WorkerListComponent } from './ghaith_components/worker-list/worker-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerService } from './services/worker.service';
import { BrowserModule } from '@angular/platform-browser';

import { Routes,RouterModule} from '@angular/router'

const routes :Routes = [
    {path: 'category/:id' , component: WorkerListComponent},
    {path: 'category' , component: WorkerListComponent},
    {path: 'workers' , component: WorkerListComponent},
    {path: '' , redirectTo: '/workers' , pathMatch: 'full'},
    {path: '**' , redirectTo: '/workers', pathMatch: 'full'},
];

@NgModule({
    declarations: [
        AppComponent, WorkerListComponent, NotfoundComponent, 
    ],
    imports: [
        RouterModule.forRoot(routes),
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        BrowserModule
        
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, WorkerService,ProductService
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
