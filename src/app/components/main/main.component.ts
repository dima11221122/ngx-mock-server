import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { merge } from 'rxjs';
import { UsersService } from '../../routes/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users$;
  search;
  @ViewChild('form') form: NgForm;
  constructor(
    private route: ActivatedRoute,
    private users: UsersService
  ) { }

  ngOnInit() {
    this.users$ = merge(
      this.route.data.pipe(map(data => data.users)),
      this.form.valueChanges.pipe(
        debounceTime(500),
        switchMap(() => this.users.search(this.search))
      )
    );
  }

}
