import $ from 'jquery';
import Backbone from 'backbone';
import AppRouter from './router';

const appDiv = $('<div id="appDiv"></div>')
$('body').prepend(appDiv);

const router = new AppRouter();
Backbone.history.start({ pushState:true })
