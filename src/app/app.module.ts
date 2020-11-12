import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
//import { SearchComponent } from './search';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import {DynamicTableComponent} from './dynamictable';
import { MatTableModule } from '@angular/material/table' ;
import {MatPaginator} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';


import {DynamicTable2Component} from './dynamictable2';

//import { DynamictableComponent } from './dynamictable/dynamictable.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule,  BrowserAnimationsModule   ],
  exports:[ MatTableModule, MatFormFieldModule,
    MatInputModule,MatTabsModule,  BrowserAnimationsModule ]
,
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        DynamicTableComponent,
       // SearchComponent
        //,
        DynamicTable2Component 
      ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }