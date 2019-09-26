/*
  filename: integralui.toolitem.js
  version : 1.1.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var e=function(c,a){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return e(c,a)};return function(c,a){function b(){this.constructor=c}e(c,a);c.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)}}(),__decorate=this&&this.__decorate||function(e,c,a,b){var f=arguments.length,d=3>f?c:null===b?b=Object.getOwnPropertyDescriptor(c,a):b,g;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,c,a,b);else for(var h=e.length-1;0<=h;h--)if(g=e[h])d=(3>f?g(d):3<f?g(c,a,d):g(c,a))||d;return 3<f&&d&&Object.defineProperty(c,a,d),d},__metadata=this&&this.__metadata||function(e,c){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,c)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_datepicker_1=require("./integralui.datepicker"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIToolItem=function(e){function c(a,c,f,d){var b=e.call(this,a,c)||this;b.elemRef=a;b.commonService=c;b.baseService=f;b.cmpResolver=d;b.dataFields={};b.currentSettings={};b.contentMargin={top:0,left:0};b.isPopupDelayed=!1;b.updateTimer=null;b.calendarRef=null;b.calendar=null;
b.dropListRef=null;b.dropList=null;b.parentCtrl=null;b.isLeaving=!1;b.toolItemHeight="auto";b.toolItemStyleOpacity=1;b.type=integralui_core_1.IntegralUIToolItemType.Label;b.itemClick=new core_1.EventEmitter;b.valueChanging=new core_1.EventEmitter;b.valueChanged=new core_1.EventEmitter;return b}__extends(c,e);Object.defineProperty(c.prototype,"settings",{get:function(){return this.currentSettings},set:function(a){this.currentSettings!=a&&(this.currentSettings=a)},enumerable:!0,configurable:!0});c.prototype.ngOnInit=
function(){this.dataFields=(this.parentCtrl=this.baseService.getComponent())?this.parentCtrl.getDataFields():{};this.generalClassName="iui-toolitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};c.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){a.value=a.getValue();clearTimeout(b)},1);a.updateLayout()};c.prototype.ngOnDestroy=function(){this.removeCalendar();this.removeDropList();this.resetLayoutTimer()};c.prototype.ngAfterContentChecked=function(){this.clientRect=
{width:this.elemRef.nativeElement.firstElementChild.clientWidth,height:this.elemRef.nativeElement.firstElementChild.clientHeight};this.clientRect.width!=this.prevClientRect.width?(this.updateLayout(),this.prevClientRect.width=this.clientRect.width):this.clientRect.height!=this.prevClientRect.height&&(this.updateLayout(),this.prevClientRect.height=this.clientRect.height)};c.prototype.getProgressValue=function(){if(this.data){var a=void 0!=this.data.min?this.data.min:0,b=void 0!=this.data.max?this.data.max:
100,c=this.data[this.dataFields.value];if(c&&!isNaN(c)&&!isNaN(b)&&0<b)return 100*Math.min(Math.max(c,a),b)/b}return 0};c.prototype.getItemClass=function(){var a="";if(this.data){var b=this.data.settings||{};switch(this.type){case integralui_core_1.IntegralUIToolItemType.CheckBox:switch(a="iui-toolitem-checkbox"+(b.general?" "+b.general:""),this.getValue()){case "checked":a+=b.checked?" "+b.checked:" iui-toolitem-checkbox-checked";break;case "indeterminate":a+=b.indeterminate?" "+b.indeterminate:
" iui-toolitem-checkbox-indeterminate";break;default:a+=b.unchecked?" "+b.unchecked:" iui-toolitem-checkbox-unchecked"}}}return a};c.prototype.getValue=function(){var a=null;if(this.data)switch(a=void 0!=this.data[this.dataFields.value]?this.data[this.dataFields.value]:null,this.type){case integralui_core_1.IntegralUIToolItemType.Button:a=void 0!=this.data[this.dataFields.text]?this.data[this.dataFields.text]:"";break;case integralui_core_1.IntegralUIToolItemType.CheckBox:this.data.settings&&(a="checked"==
a||1==a?"checked":this.data.settings.threeState&&"indeterminate"==a?"indeterminate":"unchecked");break;case integralui_core_1.IntegralUIToolItemType.Date:var b="en-US",c={year:"numeric",month:"numeric",day:"numeric"};if(this.data.settings)switch(b=this.data.settings.locales?this.data.settings.locales:"en-US",this.data.settings.format){case integralui_core_1.IntegralUIDateFormat.Long:c.weekday="long";break;case integralui_core_1.IntegralUIDateFormat.Custom:c=this.data.settings.formatOptions}a=a?a.toLocaleString(b,
c):"";break;case integralui_core_1.IntegralUIToolItemType.DropList:this.toolItemHeight=(a=(a=this.commonService.isObject(a)?a?a.text:"":void 0!=a&&this.currentSettings?this.findItemByValue(a,this.currentSettings.items||[]):"")&&""!=a?a:this.currentSettings.placeHolder)&&""!=a?"auto":"20px";this.toolItemStyleOpacity=!this.currentSettings||""!=a&&a!=this.currentSettings.placeHolder?1:.5;break;case integralui_core_1.IntegralUIToolItemType.Image:a=Array.isArray(a)?a:[{src:a}];break;case integralui_core_1.IntegralUIToolItemType.Numeric:a=
void 0!=this.data[this.dataFields.value]?this.data[this.dataFields.value]:"";break;case integralui_core_1.IntegralUIToolItemType.Progress:a=this.getProgressValue();break;case integralui_core_1.IntegralUIToolItemType.TextBox:a=void 0!=this.data[this.dataFields.text]?this.data[this.dataFields.text]:""}return a};c.prototype.findItemByValue=function(a,b){for(var c="",d=0;d<b.length;d++)if(void 0!=b[d].value&&b[d].value==a){c=void 0!=b[d].text&&""!=b[d].text?b[d].text:b[d].value.toString();break}return c};
c.prototype.callValueChanging=function(a){a={cancel:!1,data:this.data,text:this.data[this.dataFields.text],value:void 0!=a?a:this.data[this.dataFields.value]};this.valueChanging.emit(a);return a.cancel};c.prototype.callValueChanged=function(){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:this.data[this.dataFields.value]})};c.prototype.itemCheckedChanged=function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:a.checked})};c.prototype.itemCheckStateChanged=
function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:a.checkState})};c.prototype.itemTextChanged=function(a){this.valueChanged.emit({data:this.data,text:this.data[this.dataFields.text],value:this.data[this.dataFields.text]})};c.prototype.numericValueChange=function(a){a&&!isNaN(a)&&(this.data[this.dataFields.value]=Math.min(Math.max(Number(a),this.currentSettings&&void 0!=this.currentSettings.min?this.currentSettings.min:-9999999),this.currentSettings&&void 0!=
this.currentSettings.max?this.currentSettings.max:9999999),this.callValueChanged())};c.prototype.editorMouseWheel=function(a){a.stopPropagation()};c.prototype.editorPreventDragStart=function(a){a.preventDefault();a.stopPropagation()};c.prototype.onItemClicked=function(a){this.type!=integralui_core_1.IntegralUIToolItemType.Separator&&this.itemClick.emit({data:this.data});a.stopPropagation()};c.prototype.onMouseEnter=function(a){this.isEnabled&&(this.state|=integralui_core_1.IntegralUIObjectState.hovered,
this.mouseEnter.emit(a));this.isLeaving=!1;a.stopPropagation()};c.prototype.onMouseLeave=function(a){var b=this;b.isEnabled&&(b.state&=~integralui_core_1.IntegralUIObjectState.hovered,b.mouseLeave.emit(a),b.type==integralui_core_1.IntegralUIToolItemType.Button&&(b.isLeaving=!0,setTimeout(function(){b.isLeaving=!1},250)));a.stopPropagation()};c.prototype.listScrollerItemChanged=function(a){this.data&&a.item&&(this.data[this.dataFields.text]=a.item.text,this.data[this.dataFields.value]=a.item.value,
this.callValueChanged())};c.prototype.itemMouseUp=function(a){if(1==a.which)switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.openDropDown(a);break;case integralui_core_1.IntegralUIToolItemType.DropList:this.openDropDown(a)}};c.prototype.openDropDown=function(a){if(!this.isPopupDelayed)switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.showPopup(a);break;case integralui_core_1.IntegralUIToolItemType.DropList:this.showPopup(a)}a.stopPropagation()};c.prototype.addCalendar=
function(){var a=this,b=this.parentCtrl?this.parentCtrl.appRef:null;if(b){a.removeCalendar();var c=a.cmpResolver.resolveComponentFactory(integralui_datepicker_1.IntegralUICalendarPopup);c&&(a.calendarRef=b.createComponent(c),a.calendarRef._component?a.calendar=a.calendarRef._component:a.calendarRef._hostElement&&(a.calendar=a.calendarRef._hostElement.component),a.calendar&&(a.calendar.closed.subscribe(function(b){a.removeCalendar()}),a.calendar.dateChanged.subscribe(function(b){1!=a.callValueChanging(b.date)&&
(a.data.value=b.date,a.callValueChanged());a.isPopupDelayed=!0;setTimeout(function(){a.isPopupDelayed=!1;a.removeCalendar()},250)})))}};c.prototype.addDropList=function(){var a=this,b=this.parentCtrl?this.parentCtrl.appRef:null;if(b){a.removeDropList();var c=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUIListPopup);c&&(a.dropListRef=b.createComponent(c),a.dropListRef._component?a.dropList=a.dropListRef._component:a.dropListRef._hostElement&&(a.dropList=a.dropListRef._hostElement.component),
a.hideDropList(),a.dropList&&(a.dropList.closed.subscribe(function(b){a.removeDropList()}),a.dropList.selectionChanged.subscribe(function(b){b.item&&1!=a.callValueChanging(b.item.value)&&(a.data.value=b.item.value,a.value=a.getValue(),a.callValueChanged());a.isPopupDelayed=!0;setTimeout(function(){a.isPopupDelayed=!1;a.removeDropList()},250)})))}};c.prototype.removeCalendar=function(){this.calendar&&(this.calendar.closed&&this.calendar.closed.unsubscribe(),this.calendar.dateChanged&&this.calendar.dateChanged.unsubscribe());
this.calendarRef&&this.calendarRef.destroy();this.calendar=null};c.prototype.removeDropList=function(){this.dropList&&(this.dropList.closed&&this.dropList.closed.unsubscribe(),this.dropList.selectionChanged&&this.dropList.selectionChanged.unsubscribe());this.dropListRef&&this.dropListRef.destroy();this.dropList=null};c.prototype.hideCalendar=function(){this.calendar&&(this.calendar.display="none")};c.prototype.hideDropList=function(){this.dropList&&(this.dropList.display="none")};c.prototype.showPopup=
function(a){if(this.data){a=this.commonService.getShiftPos();var b=this.commonService.getPageRect(this.elemRef.nativeElement.firstElementChild);switch(this.type){case integralui_core_1.IntegralUIToolItemType.Date:this.addCalendar();this.calendar&&(this.calendar.allowAnimation=!1,this.calendar.calendarStyle=this.data.settings&&this.data.settings.style&&this.data.settings.style.calendar?this.data.settings.style.calendar:null,this.calendar.date=this.data.value,this.calendar.display="block",this.calendar.firstDayOfWeek=
this.data.settings&&void 0!=this.data.settings.firstDayOfWeek?this.data.settings.firstDayOfWeek:integralui_core_1.IntegralUIWeekDays.Sunday,this.calendar.position={x:b.left+a.x+2,y:b.bottom+a.y},this.calendar.size=this.data.settings&&this.data.settings.calendarSize?this.data.settings.calendarSize:{width:250,height:200},this.allowAnimation&&(this.calendar.position.y-=2),this.calendar.refresh(),this.calendar.open(),this.calendar.focus());break;case integralui_core_1.IntegralUIToolItemType.DropList:this.addDropList(),
this.dropList&&(this.dropList.allowAnimation=!1,this.dropList.display="block",this.dropList.items=this.data.settings&&this.data.settings.items?this.data.settings.items:[],this.dropList.listStyle=this.data.settings&&this.data.settings.style&&this.data.settings.style.list?this.data.settings.style.list:null,this.dropList.minWidth=this.data.settings&&this.data.settings.minWidth?this.data.settings.minWidth:b.width,this.dropList.maxVisibleItems=this.data.settings&&this.data.settings.maxVisibleItems?this.data.settings.maxVisibleItems:
5,this.dropList.position={x:b.left+a.x+1,y:b.bottom+a.y},this.dropList.size={width:Math.max(b.width,this.dropList.minWidth)-2,height:0},this.dropList.refresh(),this.dropList.open(),this.dropList.focus())}}};c.prototype.getDataField=function(a){switch(a){case "text":return this.dataFields.text;case "value":return this.dataFields.value}};c.prototype.isHovered=function(){return this.state&integralui_core_1.IntegralUIObjectState.hovered?!0:!1};c.prototype.resetLayoutTimer=function(){this.updateTimer&&
clearTimeout(this.updateTimer);this.updateTimer=null};c.prototype.updateLayout=function(){var a=this;a.resetLayoutTimer();a.updateTimer=setTimeout(function(){a.contentMargin.top=(a.clientRect.height-a.contentElem.nativeElement.firstElementChild.offsetHeight)/2;a.value=a.getValue();clearTimeout(a.updateTimer)},100)};c.prototype.getControlStyle=function(){var a={};this.data&&this.parentCtrl&&(a=this.parentCtrl.getDataFields(),a=this.data[a.style]||{});0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+
"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};c.prototype.getProgressStyle=function(){return{width:this.getProgressValue()+"%","z-index":2}};c.prototype.getListScrollItemIcon=function(a){return this.currentSettings&&this.currentSettings.iconClass?this.currentSettings.iconClass+" "+a.icon:a.icon};c.prototype.getToolItemStyle=function(){var a={};if(this.data&&this.data.settings){var b=this.data.settings.style||{};switch(this.type){case integralui_core_1.IntegralUIToolItemType.Button:a=
b;break;case integralui_core_1.IntegralUIToolItemType.CheckBox:a=b;break;case integralui_core_1.IntegralUIToolItemType.Progress:a=b;break;case integralui_core_1.IntegralUIToolItemType.Rating:a=b;break;case integralui_core_1.IntegralUIToolItemType.Slider:a=b}}return a};__decorate([core_1.ViewChild("content",{read:core_1.ElementRef,"static":!1}),__metadata("design:type",core_1.ElementRef)],c.prototype,"contentElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],c.prototype,"type",
void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],c.prototype,"settings",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],c.prototype,"itemClick",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],c.prototype,"valueChanging",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],c.prototype,"valueChanged",void 0);return c=__decorate([core_1.Component({selector:"iui-toolitem",
template:'\n        <div [ngClass]="getControlClass()" [ngStyle]="getControlStyle()" (click)="onItemClicked($event)" (mouseup)="itemMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mouseleave)="onMouseLeave($event)" >\n            <div *ngIf="data" [ngSwitch]="type" [ngStyle]="{ \'margin-top\': contentMargin.top + \'px\', height: \'100%\' }" #content>\n                \x3c!-- BUTTON --\x3e\n                <div *ngSwitchCase="0" class="iui-toolitem-button" [ngClass]="{ \'iui-toolitem-button-leave\': isLeaving }">\n                    <span *ngIf="data.icon" [ngClass]="data.icon"></span>\n                    <span *ngIf="data.text" class="iui-toolitem-label">{{data.text}}</span>\n                </div>\n\n                \x3c!-- CHECKBOX --\x3e\n                <div *ngSwitchCase="1" class="iui-toolitem-checkbox">\n                    <iui-checkbox [allowAnimation]="true" [controlStyle]="getToolItemStyle()" [threeState]="currentSettings && currentSettings.threeState != undefined ? currentSettings.threeState : false" [(ngModel)]="data[getDataField(\'value\')]" (checkedChanged)="itemCheckedChanged($event)" (checkStateChanged)="itemCheckStateChanged($event)">{{data.text}}</iui-checkbox>\n                </div>\n\n                \x3c!-- DATEPICKER --\x3e\n                <div *ngSwitchCase="2" class="iui-toolitem-datepicker">\n                    <div class="iui-toolitem-datepicker-button" [ngClass]="{ \'iui-toolitem-datepicker-button-hover\': isHovered() }"><span></span></div>\n                    <span class="iui-toolitem-label">{{getValue()}}</span>\n                </div>\n\n                \x3c!-- DROPLIST --\x3e\n                <div *ngSwitchCase="3" class="iui-toolitem-droplist">\n                    <div class="iui-toolitem-dropdown-button" [ngClass]="{ \'iui-toolitem-dropdown-button-hover\': isHovered() }"><span></span></div>\n                    <span class="iui-toolitem-droplist-label" [ngStyle]="{ height: toolItemHeight, opacity: toolItemStyleOpacity }">{{value}}</span>\n                </div>\n\n                \x3c!-- IMAGE --\x3e\n                <div *ngSwitchCase="4" class="iui-toolitem-image">\n                    <img *ngFor="let item of data[getDataField(\'value\')]" [src]="item.src" />\n                </div>\n\n                \x3c!-- LABEL --\x3e\n                <div *ngSwitchCase="5">\n                    <span class="iui-toolitem-label">{{data.text}}</span>\n                </div>\n\n                \x3c!-- LIST SCROLLER --\x3e\n                <div *ngSwitchCase="6">\n                    <iui-listscroller [controlStyle]="getToolItemStyle()" [enabled]="enabled" [items]="currentSettings && currentSettings.items ? currentSettings.items : []" [itemSize]="currentSettings && currentSettings.itemSize ? currentSettings.itemSize : {}" (selectionChanged)="listScrollerItemChanged($event)">\n                        <ng-template let-item>\n                            <div align="center">\n                                <div [ngClass]="getListScrollItemIcon(item)"></div>\n                            </div>\n                        </ng-template>\n                    </iui-listscroller>\n                </div>\n\n                \x3c!-- NUMERIC --\x3e\n                <input *ngSwitchCase="7" class="iui-toolitem-numeric" type="number" [(ngModel)]="data[getDataField(\'value\')]" (change)="numericValueChange($event.target.value)" (DOMMouseScroll)="editorMouseWheel($event)" (mousewheel)="editorMouseWheel($event)" draggable="true" (dragstart)="editorPreventDragStart($event)" />\n\n                \x3c!-- PROGRESS --\x3e\n                <div *ngSwitchCase="8" class="iui-toolitem-progress">\n                    <iui-progressbar [allowAnimation]="true" [controlStyle]="getToolItemStyle()" [value]="data[getDataField(\'value\')]"></iui-progressbar>\n                </div>\n\n                \x3c!-- RATING --\x3e\n                <div *ngSwitchCase="9" class="iui-toolitem-rating" align="center">\n                    <iui-rating [controlStyle]="getToolItemStyle()" [enabled]="enabled" [(ngModel)]="data[getDataField(\'value\')]" [division]="currentSettings ? currentSettings.division : 1" [increment]="currentSettings ? currentSettings.increment : 0" [max]="currentSettings ? currentSettings.max : 5" [stepSize]="currentSettings ? currentSettings.stepSize : 16" (valueChanged)="callValueChanged()"></iui-rating>\n                </div>\n\n                \x3c!-- SEPARATOR --\x3e\n                <div *ngSwitchCase="10" class="iui-toolitem-separator" [ngClass]="{ \'iui-toolitem-separator-vertical\': currentSettings && currentSettings.orientation == 1 }"></div>\n\n                \x3c!-- SLIDER --\x3e\n                <div *ngSwitchCase="11" class="iui-toolitem-slider" align="center">\n                    <iui-slider [allowAnimation]="true" [enabled]="enabled" [controlStyle]="getToolItemStyle()" [(ngModel)]="data[getDataField(\'value\')]" (valueChanged)="callValueChanged()"></iui-slider>\n                </div>\n\n                \x3c!-- TEXTBOX --\x3e\n                <div *ngSwitchCase="12">\n                    <input class="iui-toolitem-textbox" type="text" [(ngModel)]="data[getDataField(\'text\')]" (change)="itemTextChanged()" />\n                </div>\n\n                <div *ngSwitchDefault>\n                    <ng-content></ng-content>\n                </div>\n            </div>\n        </div>\n    ',
inputs:"controlStyle data enabled icon name size state text".split(" "),outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,integralui_core_1.IntegralUIBaseService,core_1.ComponentFactoryResolver])],c)}(integralui_core_1.IntegralUIItem);exports.IntegralUIToolItem=IntegralUIToolItem;