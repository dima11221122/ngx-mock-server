import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users$;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.users$ = this.route.data.pipe(map(data => data.users));
  }

}
