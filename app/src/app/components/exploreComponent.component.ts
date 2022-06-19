/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-exploreComponent',
  templateUrl: './exploreComponent.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class exploreComponentComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_jlx5X7nIPQ7szTGy(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jlx5X7nIPQ7szTGy(bh) {
    try {
      bh = this.sd_Rcn7hyIsgDtbmxnA(bh);
      //appendnew_next_sd_jlx5X7nIPQ7szTGy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jlx5X7nIPQ7szTGy');
    }
  }

  //appendnew_flow_exploreComponentComponent_start

  sd_Rcn7hyIsgDtbmxnA(bh) {
    try {
      this.page.section2 = undefined;
      bh = this.sd_kOiMg5NedTRCwaXT(bh);
      //appendnew_next_sd_Rcn7hyIsgDtbmxnA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rcn7hyIsgDtbmxnA');
    }
  }

  sd_kOiMg5NedTRCwaXT(bh) {
    try {
      const page = this.page;
      page.section2 = {
        heading: 'Explore Our Project',
        paragraph1:
          'We love our residential design and build projects - big and small From full builds, major renovations or a new lease off life to individual space and create perfect place.',
        housesImages: [
          {
            image: '/Web/images/indlu1.jpg',
            title: 'Faishore Duel Haven',
            paragraph: 'Manipulating the space and livingroom each apartment',
            date: ' January 18-2022',
          },
          {
            image: '/Web/images/indlu2.jpg',
            title: 'Modern Penthouse',
            paragraph:
              'custom furnishings and window furnishing to soften the space',
            date: 'January 15 -2022',
          },
          {
            image: '/Web/images/indlu3.jpg',
            title: 'Faishore Home Garden',
            paragraph:
              'Renovation result is a light and breezy modern home garden',
            date: ' January 18-2022',
          },
          {
            image: '/Web/images/indlu4.jpg',
            title: 'Hastings Apartment',
            paragraph: 'Apartment needed cosmetic changes to bring it to life',
            date: 'January 10-2022',
          },
        ],
      };
      //appendnew_next_sd_kOiMg5NedTRCwaXT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kOiMg5NedTRCwaXT');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_exploreComponentComponent_Catch
}
