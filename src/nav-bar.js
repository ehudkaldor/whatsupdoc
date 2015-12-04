import {bindable} from 'aurelia-framework';
import {containerless} from 'aurelia-framework';
import {dropdown, sticky, transition, visibility} from 'semantic-ui';

@containerless()
export class NavBar {

  attached() {
    // fix main menu to page on passing
    $('.main.menu').visibility({
      type: 'fixed'
    });
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });
    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });
  }
}
