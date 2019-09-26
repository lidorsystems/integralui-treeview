/*
  filename: integralui.datepicker.js
  version : 1.1.0
  Copyright © 2016-2019 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(){var d=function(b,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return d(b,a)};return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}(),__decorate=this&&this.__decorate||function(d,b,a,c){var f=arguments.length,e=3>f?b:null===c?c=Object.getOwnPropertyDescriptor(b,a):c,g;
if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(d,b,a,c);else for(var h=d.length-1;0<=h;h--)if(g=d[h])e=(3>f?g(e):3<f?g(b,a,e):g(b,a))||e;return 3<f&&e&&Object.defineProperty(b,a,e),e},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)};Object.defineProperty(exports,"__esModule",{value:!0});
var core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_calendar_1=require("./integralui.calendar"),IntegralUICalendarPopup=function(d){function b(a){var b=d.call(this,a)||this;b.elemRef=a;b.calendarDisplayPosition="absolute";b.calendarPos={top:-9999,left:0};b.calendarOpacity=0;b.calendarSize={width:0,height:0};b.firstDayOfWeek=integralui_core_1.IntegralUIWeekDays.Sunday;b.closed=new core_1.EventEmitter;
b.dateChanged=new core_1.EventEmitter;return b}__extends(b,d);Object.defineProperty(b.prototype,"size",{get:function(){return this.ctrlSize},set:function(a){a&&(a.width&&this.ctrlSize.width!=a.width&&(this.ctrlSize.width=a.width),a.height&&this.ctrlSize.height!=a.height&&(this.ctrlSize.height=a.height),this.calendarSize={width:this.ctrlSize.width-2,height:this.ctrlSize.height-2})},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.calendarDisplayPosition=this.allowAnimation?"absolute":
"relative";this.generalClassName="iui-popup";this.initStyle()};b.prototype.ngAfterContentInit=function(){this.focus()};b.prototype.ngAfterViewInit=function(){this.calendarSize={width:this.ctrlSize.width-2,height:this.ctrlSize.height-2};this.open()};b.prototype.open=function(){var a=this;if(a.allowAnimation){a.calendarOpacity=0;a.calendarPos.top=-a.calendarSize.height;var b=1E-4*a.calendarSize.height/4,d=setInterval(function(){0>a.calendarPos.top?(a.calendarPos.top+=4,a.calendarOpacity+=b):(a.calendarPos.top=
0,a.calendarOpacity=1,clearInterval(d))},5)}else a.calendarPos.top=0,a.calendarOpacity=1};b.prototype.close=function(a){var b=this;if(b.allowAnimation){b.calendarOpacity=1;b.calendarPos.top=0;var d=1E-4*b.calendarSize.height/4,e=setInterval(function(){b.calendarPos.top>-b.calendarSize.height?(b.calendarPos.top-=4,b.calendarOpacity-=d):(b.calendarPos.top=-b.calendarSize.height,b.calendarOpacity=0,b.closed.emit({value:a}),b.calendar&&b.calendar.reset(),clearInterval(e))},5)}else b.closed.emit({value:a}),
b.calendar&&b.calendar.reset()};b.prototype.calendarDateChanged=function(a){this.dateChanged.emit({date:a.date})};b.prototype.onBlur=function(a){this.close(this.date)};b.prototype.refresh=function(){this.calendar.refresh()};__decorate([core_1.ViewChild("calendar",{"static":!0}),__metadata("design:type",integralui_calendar_1.IntegralUICalendar)],b.prototype,"calendar",void 0);__decorate([core_1.Input(),__metadata("design:type",Date)],b.prototype,"date",void 0);__decorate([core_1.Input(),__metadata("design:type",
Object)],b.prototype,"calendarStyle",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"firstDayOfWeek",void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],b.prototype,"size",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"closed",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dateChanged",void 0);return b=__decorate([core_1.Component({selector:"iui-calendar-popup",
template:'\n        <div [ngClass]="getControlClass()" style="position:absolute;overflow:hidden;z-index:999" [ngStyle]="getControlStyle()" (blur)="onBlur($event)" tabindex="999">\n            <div style="left:0;top:0" [ngStyle]="{ position: calendarDisplayPosition, opacity: calendarOpacity }">\n                <iui-calendar [allowAnimation]="true" [controlStyle]="calendarStyle" [firstDayOfWeek]="firstDayOfWeek" [size]="calendarSize" [selectedDate]="date" (dateChanged)="calendarDateChanged($event)" #calendar></iui-calendar>\n            </div>\n        </div>\n    ',
encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef])],b)}(integralui_core_1.IntegralUIPopup);exports.IntegralUICalendarPopup=IntegralUICalendarPopup;
var IntegralUIDatePicker=function(d){function b(a,b,f){var c=d.call(this,b)||this;c.elemRef=a;c.commonService=b;c.cmpResolver=f;c.calendarRef=null;c.calendar=null;c.buttonMargin={top:2,right:2,bottom:2,left:2};c.currentCalendarSize={width:250,height:200};c.headerMargin={top:0,right:0,bottom:0,left:0};c.headerSize={width:0,height:0};c.titleMargin={top:2,right:2,bottom:2,left:2};c.titleSize={width:0,height:0};c.updateTimer=null;c.headerClass=[];c.calendarFirstDayOfWeek=integralui_core_1.IntegralUIWeekDays.Sunday;
c.format=integralui_core_1.IntegralUIDateFormat.Short;c.locales="en-us";c.dateChanged=new core_1.EventEmitter;return c}__extends(b,d);b.prototype.ngOnInit=function(){this.currentSelectedDate||(this.currentSelectedDate=new Date);this.generalClassName="iui-datepicker";this.headerClassName=this.generalClassName+"-header";this.calendarClassName="iui-calendar";this.calendarCellClassName="iui-calendar-cell";this.initStyle()};b.prototype.ngAfterViewInit=function(){this.updateLayout()};b.prototype.initStyle=
function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{disabled:this.headerClassName+"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},calendar:{general:{disabled:this.calendarClassName+"-disabled",
focused:this.calendarClassName+"-focused",normal:this.calendarClassName,hovered:this.calendarClassName+"-hovered",selected:this.calendarClassName+"-selected"},cell:{disabled:this.calendarCellClassName+"-disabled",focused:this.calendarCellClassName+"-focused",grayed:this.calendarCellClassName+"-grayed",normal:this.calendarCellClassName,hovered:this.calendarCellClassName+"-hovered",selected:this.calendarCellClassName+"-selected",today:this.calendarCellClassName+"-today"}}};this.updateStyle(this.controlStyle);
this.updateControlClass();this.updateHeaderClass()};b.prototype.ngOnDestroy=function(){this.removeCalendar()};Object.defineProperty(b.prototype,"calendarSize",{get:function(){return this.currentCalendarSize},set:function(a){a&&(a.width&&this.currentCalendarSize.width!=a.width&&(this.currentCalendarSize.width=a.width),a.height&&this.currentCalendarSize.height!=a.height&&(this.currentCalendarSize.height=a.height))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedDate",{get:function(){return this.currentSelectedDate},
set:function(a){this.currentSelectedDate!=a&&(this.currentSelectedDate=a,this.dateChanged.emit({date:this.currentSelectedDate}))},enumerable:!0,configurable:!0});b.prototype.getSelectedDate=function(){var a="";if(this.currentSelectedDate){a={year:"numeric",month:"numeric",day:"numeric"};switch(this.format){case integralui_core_1.IntegralUIDateFormat.Long:a.weekday="long";break;case integralui_core_1.IntegralUIDateFormat.Custom:a=this.formatOptions}a=this.currentSelectedDate.toLocaleString(this.locales,
a)}return a};b.prototype.addCalendar=function(){if(this.appRef){this.removeCalendar();var a=this.cmpResolver.resolveComponentFactory(IntegralUICalendarPopup);a&&(this.calendarRef=this.appRef.createComponent(a),this.calendarRef._component?this.calendar=this.calendarRef._component:this.calendarRef._hostElement&&(this.calendar=this.calendarRef._hostElement.component))}};b.prototype.hideCalendar=function(){this.calendar&&(this.calendar.display="none")};b.prototype.removeCalendar=function(){this.calendar&&
(this.calendar.closed&&this.calendar.closed.unsubscribe(),this.calendar.dateChanged&&this.calendar.dateChanged.unsubscribe());this.calendarRef&&this.calendarRef.destroy();this.calendar=null};b.prototype.showCalendar=function(a){var b=this;b.calendar||b.addCalendar();if(b.calendar){a=b.commonService.getShiftPos();var d=b.commonService.getPageRect(b.elemRef.nativeElement);b.calendar.allowAnimation=b.allowAnimation;b.calendar.date=b.selectedDate;b.calendar.display="block";b.calendar.firstDayOfWeek=b.calendarFirstDayOfWeek;
b.calendar.position={x:d.left+a.x,y:d.bottom+a.y};b.calendar.size=b.calendarSize;b.calendar.calendarStyle=b.options.currentStyle.calendar;b.calendar.closed.subscribe(function(a){b.removeCalendar()});b.calendar.dateChanged.subscribe(function(a){b.selectedDate=a.date;b.removeCalendar()})}};b.prototype.updateLayout=function(){var a=this;a.updateTimer=setTimeout(function(){a.clientRect={width:a.elemRef.nativeElement.firstElementChild.clientWidth,height:a.elemRef.nativeElement.firstElementChild.clientHeight};
a.headerSize={width:a.clientRect.width-4,height:a.headerElem.nativeElement.offsetHeight};a.updateHeaderLayout();clearTimeout(a.updateTimer)},1)};b.prototype.updateHeaderLayout=function(){var a=this,b=setTimeout(function(){a.headerMargin={top:(a.clientRect.height-a.headerElem.nativeElement.offsetHeight)/2-2,right:0,bottom:0,left:0};a.buttonMargin={top:(a.headerSize.height-a.headerButtonElem.nativeElement.offsetHeight)/2,right:0,bottom:0,left:2};a.titleMargin={top:(a.headerSize.height-a.headerTitleElem.nativeElement.offsetHeight)/
2,right:2,bottom:0,left:2};a.titleSize={width:a.headerSize.width-(a.headerButtonElem.nativeElement.offsetWidth+a.buttonMargin.left+a.buttonMargin.right)-(a.titleMargin.left+a.titleMargin.right)-2,height:a.headerSize.height};clearTimeout(b)},1)};b.prototype.onCtrlMouseEnter=function(a){this.isEnabled&&(this.state|=integralui_core_1.IntegralUIObjectState.hovered)};b.prototype.onCtrlMouseLeave=function(a){this.state&=~integralui_core_1.IntegralUIObjectState.hovered};b.prototype.openCalendar=function(a){this.showCalendar(a)};
b.prototype.getControlStyle=function(){var a={};0<this.ctrlSize.width&&(a.width=this.ctrlSize.width+"px");0<this.ctrlSize.height&&(a.height=this.ctrlSize.height+"px");return a};b.prototype.updateHeaderClass=function(){this.headerClass.length=0;this.headerClass.push(this.headerClassName);this.options.currentStyle&&(this.headerClass.push(this.options.currentStyle.header.normal),this.state&integralui_core_1.IntegralUIObjectState.disabled?this.headerClass.push(this.options.currentStyle.header.disabled):
this.state&integralui_core_1.IntegralUIObjectState.focused?this.headerClass.push(this.options.currentStyle.header.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.headerClass.push(this.options.currentStyle.header.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.headerClass.push(this.options.currentStyle.header.hovered))};b.prototype.getHeaderClass=function(){return this.headerClass};b.prototype.getHeaderStyle=function(a){return this.commonService.isString(a)?
a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+"-selected")}:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,
hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected}};b.prototype.getCalendarStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.getCalendarGeneralStyle(a.general),cell:this.getCalendarCellStyle(a.cell)}:{general:this.getCalendarGeneralStyle(),cell:this.getCalendarCellStyle()}};b.prototype.getCalendarGeneralStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,
this.calendarClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.calendarClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.calendarClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.calendarClassName),selected:this.commonService.isFieldAvailable(a.selected,this.calendarClassName+"-selected")}:{disabled:this.defaultStyle.calendar.general.disabled,focused:this.defaultStyle.calendar.general.focused,hovered:this.defaultStyle.calendar.general.hovered,
normal:this.defaultStyle.calendar.general.normal,selected:this.defaultStyle.calendar.general.selected}};b.prototype.getCalendarCellStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.calendarCellClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.calendarCellClassName+"-focused"),grayed:this.commonService.isFieldAvailable(a.focused,this.calendarCellClassName+"-grayed"),hovered:this.commonService.isFieldAvailable(a.hovered,
this.calendarCellClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.calendarCellClassName),selected:this.commonService.isFieldAvailable(a.selected,this.calendarCellClassName+"-selected"),today:this.commonService.isFieldAvailable(a.today,this.calendarCellClassName+"-today")}:{disabled:this.defaultStyle.calendar.cell.disabled,focused:this.defaultStyle.calendar.cell.focused,grayed:this.defaultStyle.calendar.cell.grayed,normal:this.defaultStyle.calendar.cell.normal,hovered:this.defaultStyle.calendar.cell.hovered,
selected:this.defaultStyle.calendar.cell.selected,today:this.defaultStyle.calendar.cell.today}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),calendar:this.getCalendarStyle(a.calendar)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},
header:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected},calendar:{general:{disabled:this.defaultStyle.calendar.general.disabled,focused:this.defaultStyle.calendar.general.focused,hovered:this.defaultStyle.calendar.general.hovered,normal:this.defaultStyle.calendar.general.normal,selected:this.defaultStyle.calendar.general.selected},cell:{disabled:this.defaultStyle.calendar.cell.disabled,
focused:this.defaultStyle.calendar.cell.focused,grayed:this.defaultStyle.calendar.cell.grayed,normal:this.defaultStyle.calendar.cell.normal,hovered:this.defaultStyle.calendar.cell.hovered,selected:this.defaultStyle.calendar.cell.selected,today:this.defaultStyle.calendar.cell.today}}}};b.prototype.refresh=function(){var a=this,b=setTimeout(function(){a.updateStyle(a.controlStyle);a.updateControlClass();a.updateHeaderClass();clearTimeout(b)},1)};__decorate([core_1.ViewChild("header",{read:core_1.ElementRef,
"static":!1}),__metadata("design:type",core_1.ElementRef)],b.prototype,"headerElem",void 0);__decorate([core_1.ViewChild("headerButton",{read:core_1.ElementRef,"static":!1}),__metadata("design:type",core_1.ElementRef)],b.prototype,"headerButtonElem",void 0);__decorate([core_1.ViewChild("headerTitle",{read:core_1.ElementRef,"static":!1}),__metadata("design:type",core_1.ElementRef)],b.prototype,"headerTitleElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"appRef",
void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"calendarFirstDayOfWeek",void 0);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],b.prototype,"calendarSize",null);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"format",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"formatOptions",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],b.prototype,
"locales",void 0);__decorate([core_1.Input(),__metadata("design:type",Date),__metadata("design:paramtypes",[Date])],b.prototype,"selectedDate",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"dateChanged",void 0);return b=__decorate([core_1.Component({selector:"iui-datepicker",template:"\n\t\t<div [ngClass]=\"getControlClass()\" [ngStyle]=\"getControlStyle()\" (mouseenter)=\"onCtrlMouseEnter($event)\" (mouseleave)=\"onCtrlMouseLeave($event)\">\n            <div class=\"iui-datepicker-header\" [ngStyle]=\"{ 'margin-top': headerMargin.top + 'px' }\" #header>\n                <div class=\"iui-datepicker-header-button iui-datepicker-header-button-down\" [ngStyle]=\"{ 'margin-top': buttonMargin.top + 'px', 'margin-right': buttonMargin.right + 'px' }\" (mousedown)=\"openCalendar($event)\" #headerButton><span></span></div>\n                <div class=\"iui-datepicker-header-title\" [ngStyle]=\"{ 'margin-top': titleMargin.top + 'px', 'margin-left': titleMargin.left + 'px', width: titleSize.width + 'px' }\" #headerTitle><span>{{getSelectedDate()}}</span></div>\n            </div>\n\t\t</div>\n\t",
inputs:"controlStyle data enabled name size state".split(" "),encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUIDatePicker=IntegralUIDatePicker;