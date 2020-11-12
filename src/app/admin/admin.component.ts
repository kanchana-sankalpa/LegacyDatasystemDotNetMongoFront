import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '@app/_models';
import { UserService } from '@app/_services';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    loading = false;
    users: User[] = [];
    form: FormGroup;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
            console.log(this.users);
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
    } 
}