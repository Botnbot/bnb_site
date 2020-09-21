import {MDCRipple} from '@material/ripple/index';
import {MDCTabBar} from '@material/tab-bar';

const selector = '.mdc-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const contentElements = document.querySelectorAll('.content');
tabBar.listen('MDCTabBar:activated', (event) => {
  document.querySelector('.content--active').classList.remove('content--active');
  contentElements[event.detail.index].classList.add('content--active');
});