import { Component, NgModule } from '@angular/core';
import { first } from 'rxjs/operators';

import { RoleModel, User } from '@app/_models';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService, AuthenticationService,SearchService } from '@app/_services';
import {DynamicTableComponent} from '../dynamictable';
import { MatTabsModule } from '@angular/material/tabs';


@Component(
    { templateUrl: 'home.component.html' }
    )


export class HomeComponent {
  loading = false;
    user: User;
    userFromApi: User;
    form: FormGroup;
    temp;
    datalist:any;
    loadComponent=false;
    tabs = ['First', 'Second', 'Third'];
    returnresponse:any;
    roles: RoleModel[] = [];
    

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private searchService: SearchService
    ) {
        this.user = this.authenticationService.userValue;
    }

    ngOnInit() {
        this.loading = true;
        this.loadComponent = false;
        console.log(this.user);
        this.userService.getById(this.user.userId).pipe(first()).subscribe(user => {
            this.loading = false;
            this.userFromApi = user;
        });

        this.loading = true;
        this.userService.getUserRoles().pipe(first()).subscribe(roles => {
            this.loading = false;
            this.roles = roles;
            console.log(this.roles);
        });
      
        

        this.form = new FormGroup({
            value: new FormControl('', [Validators.required])
          });
        }
        get f(){
          return this.form.controls;
        }
          
        submit(){
          console.log(this.form.value);
        /*   this.newitemService.create(this.form.value).subscribe(res => {
               console.log('Post created successfully!');
               this.router.navigateByUrl('newitem/index');
          }) */
          var formvavlue=this.form.value.value;
          this.loading = true;
          this.searchService.getDataWithObservable("text",formvavlue).subscribe(response => {
            console.log(response);
            this.returnresponse=response;
            this.loading = false;
            //this.temp= response[4].data;
           // console.log(this.temp);
           // this.datalist= response[4].data;
            this.loadComponent = true;
            // Fires if new data is received from the server. Use response to update your client side data table
            if(response.length==0){
              alert('No Data Found!');
             }
        });
    }
}