import { ModuleEnabled, RoutesToken } from '../interfaces/tokens';
import { RouteDeclaration } from '../interfaces/route';
import { MockSrvRouter } from './router.service';
import { Inject, Injectable } from '@angular/core';
import { flatten } from 'lodash';

@Injectable()
export class RegisterRoutesService {
  constructor(
    private mockSrvRouter: MockSrvRouter,
    @Inject(RoutesToken) routes: RouteDeclaration[][],
    @Inject(ModuleEnabled) enabled: boolean
  ) {
    if (!enabled) {
      return;
    }

    flatten(routes).forEach((route: RouteDeclaration) => {
      mockSrvRouter.addRoute(route);
    });
  }
}
