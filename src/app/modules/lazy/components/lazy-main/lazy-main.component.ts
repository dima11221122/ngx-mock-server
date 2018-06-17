import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lazy-main',
  templateUrl: './lazy-main.component.html',
  styleUrls: ['./lazy-main.component.css']
})
export class LazyMainComponent implements OnInit {
  items: MatTableDataSource<Item>;
  displayedColumns = ['id', 'name'];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = new MatTableDataSource<Item>(this.route.snapshot.data.items);
  }

}
