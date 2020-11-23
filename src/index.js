'use strict';

import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'nodelist-foreach-polyfill';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import teamPhoto from './modules/teamPhoto';

//Timer
countTimer();
//Menu
toggleMenu();
//Popup
togglePopup();
//Tabs
tabs();
//Slider
slider();
//Калькулятор
calc();
//Send AJAX form
sendForm();
//TeamPhoto (смена фотографии при наведении)
teamPhoto();