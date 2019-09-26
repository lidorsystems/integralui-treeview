import { ElementRef } from '@angular/core';
import { IntegralUIBaseValueComponent, IntegralUIIncrementMode } from './integralui.core';
import { IntegralUICommonService } from '../services/integralui.common.service';
export declare class IntegralUIRating extends IntegralUIBaseValueComponent {
    protected elemRef: ElementRef;
    protected commonService?: IntegralUICommonService;
    protected ctrlMaxValue: number;
    protected currentDivision: number;
    protected currentStepSize: number;
    protected currentIncrement: IntegralUIIncrementMode;
    protected isRatingChangeActive: boolean;
    protected contentSize: any;
    protected ratingSize: any;
    protected ratingClass: Array<any>;
    protected ratingClassName: string;
    division: number;
    value: number;
    increment: IntegralUIIncrementMode;
    max: number;
    stepSize: number;
    constructor(elemRef: ElementRef, commonService?: IntegralUICommonService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    protected initStyle(): void;
    ngAfterContentChecked(): void;
    getContentWidth(): any;
    getRatingWidth(): any;
    processValueChange(): void;
    updateLayout(): void;
    ctrlMouseDown(e: any): void;
    ctrlMouseMove(e: any): void;
    ctrlMouseUp(e: any): void;
    ctrlMouseWheel(e: any): void;
    ctrlTouchEnd(e: any): void;
    onWindowMouseUp(e: any): void;
    getControlStyle(): any;
    getRatingValueClass(): any[];
    protected updateRatingClass(): void;
    protected getRatingStyle(value: any): any;
    protected updateStyle(value: any): void;
}
