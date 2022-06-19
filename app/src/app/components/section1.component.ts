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
  selector: 'bh-section1',
  templateUrl: './section1.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class section1Component {
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
      this.sd_PK4Nu5GAoPKVZV1T(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PK4Nu5GAoPKVZV1T(bh) {
    try {
      bh = this.sd_Bby5hbccfHYQhrnO(bh);
      //appendnew_next_sd_PK4Nu5GAoPKVZV1T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PK4Nu5GAoPKVZV1T');
    }
  }

  //appendnew_flow_section1Component_start

  sd_Bby5hbccfHYQhrnO(bh) {
    try {
      this.page.section1 = undefined;
      this.page.panel = [];
      bh = this.sd_qkbu6lGFXgNlfguX(bh);
      //appendnew_next_sd_Bby5hbccfHYQhrnO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bby5hbccfHYQhrnO');
    }
  }

  sd_qkbu6lGFXgNlfguX(bh) {
    try {
      const page = this.page;
      page.section1 = {
        logo: 'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
        navItems: ['About', 'Services', 'Project', 'Contact'],
        backgroundImage:
          'https://linkedinreplication.web.app/assets/Web/Images/post.jpg',
        heading: 'The smartest way to buy a home',
        content: 'hfhwhfkwe hfewfewkfk',
        belowContent: 'ufehhwefk efiejwkf fjewijf',
      };
      page.panel = [
        {
          icon: 'place',
          title: 'Location',
          decription: 'find destination',
        },
        {
          icon: 'local_offer',
          title: 'Budget',
          decription: 'Choose your budget',
        },
        {
          icon: 'home',
          title: 'Type of home',
          decription: 'Apartment',
        },
      ];

      //appendnew_next_sd_qkbu6lGFXgNlfguX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qkbu6lGFXgNlfguX');
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
  //appendnew_flow_section1Component_Catch
}
