import {I18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
  // static inject = [I18N,Element,EventAggregator];
  // constructor(i18n,element,ea) {
  // 	// alert("yo!");
  //
  //   this.i18n = i18n;
  //   this.element = element;
  //
  //   ea.subscribe('i18n:locale:changed', payload => {
  //     this.i18n.updateTranslations(this.element);
  //   });
  // }
  //
  // attached(){
  //   this.i18n.updateTranslations(this.element);
  // }

  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      {
        route: ['','welcome'],
        name: 'welcome',
        moduleId: 'welcome',
        nav: true,
        title: 'welcome',
        settings: {
          children: false,
          parent: false,
          side: 'main'
        }
      },
      {
        route: 'about',
        name: 'about',
        moduleId: 'about',
        nav: true,
        title: 'about',
        settings: {
          children: ['shlomit', 'janel', 'heather'],
          parent: false,
          side: 'secondary'
        }
      },
      {
        route: 'services',
        name: 'services',
        moduleId: 'services',
        nav: true,
        title: 'services',
        settings: {
          children: [],
          parent: false
        }
      },
      {
        route: 'users/login',
        name: 'users/login',
        moduleId: 'users/login',
        nav: false,
        title:'login',
        settings: {
          children: false,
          parent: false
        }
      },
      {
        route: 'users/register',
        name: 'users/register',
        moduleId: 'users/register',
        nav: false,
        title:'register',
        settings: {
          children: false,
          parent: false
        }
      }
      // { route: 'users/patients-list',     name: 'patients-list',    moduleId: 'users/patients-list',    nav: true, title:'patients list' },
      // { route: 'users/patient',           name: 'patient',          moduleId: 'users/patient',          nav: true, title:'patient' }
    ]);

    this.router = router;
  }
}
