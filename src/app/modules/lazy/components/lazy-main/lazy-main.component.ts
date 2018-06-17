import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-main',
  templateUrl: './lazy-main.component.html',
  styleUrls: ['./lazy-main.component.css']
})
export class LazyMainComponent implements OnInit {
  items: Item[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.route.snapshot.data.items;
  }

}
