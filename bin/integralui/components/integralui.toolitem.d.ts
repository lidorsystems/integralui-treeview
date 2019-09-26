import { ComponentFactoryResolver, ElementRef, EventEmitter } from '@angular/core';
import { IntegralUIBaseService, IntegralUIItem, IntegralUIToolItemType } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIToolItem extends IntegralUIItem {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected baseService?: IntegralUIBaseService;
    protected cmpResolver?: ComponentFactoryResolver;
    private dataFields;
    value: any;
    currentSettings: any;
    contentMargin: any;
    protected isPopupDelayed: boolean;
    private updateTimer;
    contentElem: ElementRef;
    private calendarRef;
    private calendar;
    private dropListRef;
    private dropList;
    protected parentCtrl: any;
    isLeaving: boolean;
    toolItemHeight: string;
    toolItemStyleOpacity: number;
    type: IntegralUIToolItemType;
    settings: any;
    itemClick: EventEmitter<any>;
    valueChanging: EventEmitter<any>;
    valueChanged: EventEmitter<any>;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService, baseService?: IntegralUIBaseService, cmpResolver?: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    getProgressValue(): number;
    protected getItemClass(): string;
    getValue(): any;
    protected findItemByValue(value: any, list: Array<any>): string;
    protected callValueChanging(value?: any): boolean;
    protected callValueChanged(): void;
    itemCheckedChanged(e: any): void;
    itemCheckStateChanged(e: any): void;
    itemTextChanged(e: any): void;
    numericValueChange(value: any): void;
    editorMouseWheel(e: any): void;
    editorPreventDragStart(e: any): void;
    onItemClicked(e: any): void;
    onMouseEnter(e: any): void;
    onMouseLeave(e: any): void;
    listScrollerItemChanged(e: any): void;
    itemMouseUp(e: any): void;
    protected openDropDown(e: any): void;
    protected addCalendar(): void;
    protected addDropList(): void;
    protected removeCalendar(): void;
    protected removeDropList(): void;
    protected hideCalendar(): void;
    protected hideDropList(): void;
    protected showPopup(e: any): void;
    getDataField(key: string): any;
    isHovered(): boolean;
    private resetLayoutTimer;
    updateLayout(): void;
    getControlStyle(): any;
    getProgressStyle(): any;
    getListScrollItemIcon(item: any): any;
    getToolItemStyle(): any;
}
