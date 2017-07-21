import 'babel-polyfill';
import $ from 'jquery';
import Backbone from 'backbone';
import AppRouter from './router';

const appDiv = $('<div id="appDiv"></div>');
const navDiv = $('<div id="navDiv"></div>');
$('body').append(navDiv);
$('body').append(appDiv);

const router = new AppRouter();
Backbone.history.start({ pushState:true })
