/*
  filename: integralui.checkbox.js
  version : 1.3.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=function(a,c){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(a,e){for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b])};return d(a,c)};return function(a,c){function b(){this.constructor=a}d(a,c);a.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}}(),__decorate=this&&this.__decorate||function(d,a,c,b){var e=arguments.length,f=3>e?a:null===b?b=Object.getOwnPropertyDescriptor(a,c):b,g;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(d,a,c,b);else for(var h=d.length-1;0<=h;h--)if(g=d[h])f=(3>e?g(f):3<e?g(a,c,f):g(a,c))||f;return 3<e&&f&&Object.defineProperty(a,c,f),f},__metadata=this&&this.__metadata||function(d,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,a)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),animations_1=require("@angular/animations"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),forms_1=require("@angular/forms"),IntegralUICheckBox=function(d){function a(a,e){var b=d.call(this,a,e)||this;b.elemRef=a;b.commonService=e;b.animationState="start";b.buttonClass=[];b.checked=!1;b.checkState=integralui_core_1.IntegralUICheckState.Unchecked;b.threeState=!1;b.checkedChanged=new core_1.EventEmitter;
b.checkStateChanged=new core_1.EventEmitter;return b}__extends(a,d);var c=a;a.prototype.ngOnInit=function(){this.generalClassName="iui-checkbox";this.buttonClassName=this.generalClassName+"-btn";this.contentClassName=this.generalClassName+"-content";this.initStyle()};a.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+
"-selected"},button:{general:this.buttonClassName,disabled:this.buttonClassName+"-disabled",checked:this.buttonClassName+"-checked",indeterminate:this.buttonClassName+"-indeterminate",unchecked:this.buttonClassName+"-unchecked"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateButtonClass();
this.updateContentClass()};a.prototype.ngAfterViewInit=function(){};a.prototype.updateCheckValue=function(b){var a=this;a.animationState="middle";var c=setTimeout(function(){a.animationState="end";a.threeState?a.checkState=b:a.checked=b;a.updateButtonClass();var d={checked:a.checked,checkState:a.checkState};a.threeState?a.checkStateChanged.emit(d):a.checkedChanged.emit(d);var e=setTimeout(function(){a.animationState="start";clearTimeout(e)},175);clearTimeout(c)},175)};a.prototype.processValueChange=
function(){this.updateCheckValue(this.value)};a.prototype.checkMouseDown=function(a){if(this.isEnabled&&1==a.which){if(this.threeState)switch(this.checkState){case integralui_core_1.IntegralUICheckState.Indeterminate:this.checkState=integralui_core_1.IntegralUICheckState.Checked;this.checked=!1;break;case integralui_core_1.IntegralUICheckState.Checked:this.checkState=integralui_core_1.IntegralUICheckState.Unchecked;this.checked=!0;break;default:this.checkState=integralui_core_1.IntegralUICheckState.Indeterminate,
this.checked=!1}else this.checkState=(this.checked=void 0!=this.checked?!this.checked:!0)?integralui_core_1.IntegralUICheckState.Checked:integralui_core_1.IntegralUICheckState.Unchecked;this.threeState?this.value=this.checkState:this.value=this.checked}};a.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};a.prototype.updateButtonClass=function(){this.buttonClass.length=0;this.buttonClass.push(this.buttonClassName);
if(this.options.currentStyle){this.buttonClass.push(this.options.currentStyle.button.general);if(this.threeState)switch(this.checkState){case integralui_core_1.IntegralUICheckState.Indeterminate:this.buttonClass.push(this.options.currentStyle.button.indeterminate);break;case integralui_core_1.IntegralUICheckState.Checked:this.buttonClass.push(this.options.currentStyle.button.checked);break;case integralui_core_1.IntegralUICheckState.Unchecked:this.buttonClass.push(this.options.currentStyle.button.unchecked)}else this.buttonClass.push(this.checked?
this.options.currentStyle.button.checked:this.options.currentStyle.button.unchecked);this.state&integralui_core_1.IntegralUIObjectState.disabled&&this.buttonClass.push(this.options.currentStyle.button.disabled)}};a.prototype.getButtonClass=function(){return this.buttonClass};a.prototype.getButtonStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.buttonClassName),disabled:this.commonService.isFieldAvailable(a.disabled,this.buttonClassName+
"-disabled"),checked:this.commonService.isFieldAvailable(a.checked,this.buttonClassName+"-checked"),indeterminate:this.commonService.isFieldAvailable(a.indeterminate,this.buttonClassName+"-indeterminate"),unchecked:this.commonService.isFieldAvailable(a.unchecked,this.buttonClassName+"-unchecked")}:{general:this.defaultStyle.button.general,disabled:this.defaultStyle.button.disabled,checked:this.defaultStyle.button.checked,indeterminate:this.defaultStyle.button.indeterminate,unchecked:this.defaultStyle.button.unchecked}};
a.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),button:this.getButtonStyle(a.button),content:this.getContentStyle(a.button)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},button:{general:this.defaultStyle.button.general,disabled:this.defaultStyle.button.disabled,checked:this.defaultStyle.button.checked,
indeterminate:this.defaultStyle.button.indeterminate,unchecked:this.defaultStyle.button.unchecked},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}}};__decorate([core_1.Input(),__metadata("design:type",Boolean)],a.prototype,"checked",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],a.prototype,"checkState",
void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean)],a.prototype,"threeState",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"checkedChanged",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],a.prototype,"checkStateChanged",void 0);return a=c=__decorate([core_1.Component({selector:"iui-checkbox",template:'\n\t\t<div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" draggable="true" (dragstart)="preventDragStart($event)" (mousedown)="checkMouseDown($event)">\n            <div [ngClass]="getButtonClass()">\n                <span [@ctrlAnimation]="allowAnimation && animationState"></span>\n            </div>\n            <div [ngClass]="getContentClass()">\n    \t\t\t<ng-content></ng-content>\n            </div>\n\t\t</div>\n\t',
inputs:"controlStyle data enabled name size state".split(" "),outputs:["valueChanged"],providers:[{provide:forms_1.NG_VALUE_ACCESSOR,useExisting:core_1.forwardRef(function(){return c}),multi:!0}],animations:[animations_1.trigger("ctrlAnimation",[animations_1.state("start",animations_1.style({opacity:"1"})),animations_1.state("middle",animations_1.style({opacity:"0.6"})),animations_1.state("end",animations_1.style({opacity:"1"})),animations_1.transition("start => middle",animations_1.animate("175ms ease-out")),
animations_1.transition("middle => end",animations_1.animate("175ms ease-in"))])],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService])],a)}(integralui_core_1.IntegralUIBaseValueComponent);exports.IntegralUICheckBox=IntegralUICheckBox;