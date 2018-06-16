import { ModuleEnabled, RoutesToken } from './interfaces/index';
import { RegisterRoutesService } from './services/index';
import { ModuleConfig } from './interfaces/index';
import { RequestInterceptor } from './services/requests-interceptor.service';
import { MockSrvRouter } from './services/router.service';
import { Inject, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

export const router = new MockSrvRouter();

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class MockServerModule {
  static _buildConfig(config: ModuleConfig): Provider[] {
    return [
      {
        provide: RoutesToken,
        useValue: config.routes,
        multi: true
      },
      {
        provide: RegisterRoutesService,
        useClass: RegisterRoutesService,
        multi: true
      }
    ];
  }

  static forChild(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: MockServerModule,
      providers: MockServerModule._buildConfig(config)
    };
  }

  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: MockServerModule,
      providers: [
        {
          provide: MockSrvRouter,
          useValue: router
        },
        {
          provide: ModuleEnabled,
          useValue: config.enabled
        },
        MockServerModule._buildConfig(config)
      ]
    };
  }
  constructor(@Inject(RegisterRoutesService) routes: RegisterRoutesService) {}
}
