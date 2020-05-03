import { Inject, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MockSrvRouter } from './services/router.service';
import { RequestInterceptor } from './services/requests-interceptor.service';
import { ModuleConfig, ModuleEnabled, RoutesToken } from './interfaces';
import { RegisterRoutesService } from './services';

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
export class NgxMockServerModule {
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
      ngModule: NgxMockServerModule,
      providers: NgxMockServerModule._buildConfig(config)
    };
  }

  static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgxMockServerModule,
      providers: [
        {
          provide: MockSrvRouter,
          useValue: router
        },
        {
          provide: ModuleEnabled,
          useValue: config.enabled
        },
        NgxMockServerModule._buildConfig(config)
      ]
    };
  }
  constructor(@Inject(RegisterRoutesService) routes: RegisterRoutesService) {}
}

