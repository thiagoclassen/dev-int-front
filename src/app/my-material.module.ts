// const modules = MatSidenavModule;

import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
} from '@angular/material';


@NgModule({
    imports: [MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule],
    exports: [MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule]
})
export class MyMaterialModule { }
