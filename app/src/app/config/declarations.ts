import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-testimonialsComponent
import { testimonialsComponent } from '../components/testimonials.component';
//CORE_REFERENCE_IMPORT-specialComponentComponent
import { specialComponentComponent } from '../components/specialComponent.component';
//CORE_REFERENCE_IMPORT-enhanceComponentComponent
import { enhanceComponentComponent } from '../components/enhanceComponent.component';
//CORE_REFERENCE_IMPORT-exploreComponentComponent
import { exploreComponentComponent } from '../components/exploreComponent.component';
//CORE_REFERENCE_IMPORT-section1Component
import { section1Component } from '../components/section1.component';
//CORE_REFERENCE_IMPORT-HomeComponent
import { HomeComponent } from '../components/Home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-testimonialsComponent
  testimonialsComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-specialComponentComponent
  specialComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-enhanceComponentComponent
  enhanceComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-exploreComponentComponent
  exploreComponentComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-section1Component
  section1Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-HomeComponent
  HomeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
