﻿/*
  filename: integralui.dialog.js
  version : 1.2.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var c=function(b,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d])};return c(b,a)};return function(b,a){function d(){this.constructor=b}c(b,a);b.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),__decorate=this&&this.__decorate||function(c,b,a,d){var f=arguments.length,e=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,a):d,g;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(c,b,a,d);else for(var h=c.length-1;0<=h;h--)if(g=c[h])e=(3>f?g(e):3<f?g(b,a,e):g(b,a))||e;return 3<f&&e&&Object.defineProperty(b,a,e),e},__metadata=this&&this.__metadata||function(c,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(c,b)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIDialog=function(c){function b(b){var a=c.call(this,b)||this;a.commonService=b;a.isEnabled=!0;a.isVisible=!1;a.closed=new core_1.EventEmitter;a.closing=new core_1.EventEmitter;a.opened=new core_1.EventEmitter;a.opening=new core_1.EventEmitter;return a}__extends(b,c);Object.defineProperty(b.prototype,"visible",{get:function(){return this.isVisible},
set:function(a){this.isVisible!=a&&(a?this.open():this.close())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-dialog";this.initStyle()};b.prototype.updateLayout=function(){};b.prototype.open=function(){if(!this.isVisible){var a={cancel:!1};this.opening.emit(a);a.cancel||(this.isVisible=!0,this.opened.emit(null))}};b.prototype.close=function(){if(this.isVisible){var a={cancel:!1};this.closing.emit(a);a.cancel||(this.isVisible=!1,this.closed.emit(null))}};
b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};__decorate([core_1.ViewChild("inputLabel",{read:core_1.ElementRef,"static":!1}),__metadata("design:type",core_1.ElementRef)],b.prototype,"inputLabelElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],b.prototype,"closeButton",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",
[Boolean])],b.prototype,"visible",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"closed",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"closing",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"opened",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"opening",void 0);return b=__decorate([core_1.Component({selector:"iui-dialog",
template:'\n  \t\t<div *ngIf="visible" class="iui-dialog-animation" [ngClass]="getControlClass()" [ngStyle]="getControlStyle()">\n  \t\t\t<ng-content></ng-content>\n  \t\t\t<div class="iui-dialog-buttons">\n  \t\t\t\t<span *ngIf="closeButton" class="iui-dialog-icon iui-dialog-button-close" (click)="close()"></span>\n  \t\t\t</div>\n\t\t</div>\n\t\t<p *ngIf="visible" class="iui-dialog-overlay iui-overlay-animation" (click)="close()"></p>\n\t',inputs:"controlStyle data enabled name size state".split(" "),
encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[integralui_common_service_1.IntegralUICommonService])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIDialog=IntegralUIDialog;