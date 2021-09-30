import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Logs } from '../interfaces/log';
import { ModuleWithProviders } from '@angular/compiler/src/core';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AuthModule {
  static forRoot(config: Logs): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [{
        provide: Logs,
        useValue: config
      }]
    }
  }
}
