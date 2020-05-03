# ngx-mock-server
[![npm version](https://badge.fury.io/js/ngx-mock-server.svg)](https://badge.fury.io/js/ngx-mock-server)
[![GitHub issues](https://img.shields.io/github/issues/dima11221122/ngx-mock-server.svg)](https://github.com/dima11221122/ngx-mock-server/issues)
[![GitHub forks](https://img.shields.io/github/forks/dima11221122/ngx-mock-server.svg)](https://github.com/dima11221122/ngx-mock-server/network)
[![GitHub stars](https://img.shields.io/github/stars/dima11221122/ngx-mock-server.svg)](https://github.com/dima11221122/ngx-mock-server/stargazers)
[![GitHub license](https://img.shields.io/github/license/dima11221122/ngx-mock-server.svg)](https://github.com/dima11221122/ngx-mock-server/blob/master/LICENSE)

*Inspired by [ng2-mock-server](https://www.npmjs.com/package/ng2-mock-server)*

An angular 5+ mock to mock back-end. The package uses http client interceptors mechanism. It's a really useful package when real back-end isn't available.

## Features
- No back-end required :no_entry_sign:
- Support regexp and strings in routes definitions :mega:
- Support lazy modules :dromedary_camel:
- Works with Angular 5+ (including Angular 9) :boom:
- Can be disabled from outside :cop:
- Zero-dependency :zero:

## Getting started
`npm i ngx-mock-server`

Mock necessary endpoints:

```typescript
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteDeclaration, json } from 'ngx-mock-server';

const users = [
  { id: 1, username: 'user1' },
  { id: 2, username: 'user2' }
];

export function usersCallback(req) {
  const query = req.params.get('query');
  return json(200, [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' }
  ]);
}

export const appMockRoutes: RouteDeclaration[] = [
  {
    path: '/users',
    method: 'GET',
    callback: usersCallback
  },
]
```

Import `NgxMockServerModule` with mocked endpoints:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxMockServerModule } from 'ngx-mock-server';
import { appMockRoutes } from './mock';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    NgxMockServerModule.forRoot({
      routes: appMockRoutes,
      enabled: true
    })
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Test!:

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('/users').subscribe((users) => console.log(users));
  }
}

```

[StackBlitz](https://stackblitz.com/edit/angular-iyffif)

## DEMO

[Here](https://dima11221122.github.io/ngx-mock-server/users)
