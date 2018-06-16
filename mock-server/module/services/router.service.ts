import { AvailableMethod, RouteCallback, RouteDeclaration } from '../interfaces/index';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pathtoRegexp } from '../helpers/path-to-regexp';
import { MockRequestParameters } from '../interfaces/index';

class Route {
  private static clearQueryString(url: string): string {
    const qsindex = url.indexOf('?');
    if (qsindex >= 0) {
      url = url.split('?')[0];
    }
    return url;
  }

  private static getPathAndQuery(url: string): [string, MockRequestParameters] {
    const qsindex = url.indexOf('?');
    if (qsindex >= 0) {
      const [path, query] = url.split('?');
      const queryParams: MockRequestParameters = {};
      query.split('&').forEach(item => queryParams[item.split('=')[0]] = item.split('=')[1]);
      return [path, queryParams];
    }
    return [url, {}];
  }

  constructor(private method: AvailableMethod, private regex: RegExp, private callback: RouteCallback) {}

  /** Test if the route matches the request. */
  matches(req: HttpRequest<any>): boolean {
    if (this.method !== req.method) {
      return false;
    }
    return this.regex.test(Route.clearQueryString(req.url));
  }

  /** Run the route callback on the request. Make sure matches(req) == true!! */
  serve(req: HttpRequest<any>): Promise<HttpResponse<any>> {
    const [path, queryParams] = Route.getPathAndQuery(req.url);
    const args = <string[]>this.regex.exec(path);
    args.splice(0, 1);
    return this.callback(req, queryParams, ...args);
  }
}

/**
    Router that helps setup a mock back-end.

    Usage is pretty simple.

    Example:

      router.post("/posts/:title", (req : Request, title : string) : Promise<ResponseOptions> {
          // your route implementation
      });
*/
@Injectable()
export class MockSrvRouter {
  private _routes: Route[] = [];
  private _routesDeclaration: RouteDeclaration[] = [];

  serve(req: HttpRequest<any>): Promise<HttpResponse<any>> {
    let i: number;
    for (i = 0; i < this._routes.length; i++) {
      if (this._routes[i].matches(req)) {
        const res = Promise.resolve(this._routes[i].serve(req));
        console.log('HTTP REQUEST: ', req, res);
        return res;
      }
    }

    return null;
  }

  addRoute(route: RouteDeclaration) {
    if (this._routesDeclaration.indexOf(route) !== -1) {
      return;
    }

    this._routesDeclaration.push(route);
    const { method, path, callback } = route;
    const expr: RegExp = <RegExp>pathtoRegexp(path, [], {});
    this._routes.push(new Route(method, expr, callback));
  }
}
