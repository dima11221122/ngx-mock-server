import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { UsersService } from '../../routes/services/users.service';
import { User } from '../../models/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users$: Observable<MatTableDataSource<User>>;
  displayedColumns = ['id', 'username'];
  search: string;
  @ViewChild('form', { static: true }) form: NgForm;
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
    ).pipe(
      map(data => new MatTableDataSource(data))
    );
  }

}
