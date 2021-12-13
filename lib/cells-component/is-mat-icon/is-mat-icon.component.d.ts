import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class IsMatIconComponent implements OnInit, OnChanges {
    input: string;
    display: string;
    isIcon: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
