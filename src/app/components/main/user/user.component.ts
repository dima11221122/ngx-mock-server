import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.route.data.pipe(map(data => data.user));
  }

}
