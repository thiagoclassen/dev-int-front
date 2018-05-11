// const modules = MatSidenavModule;

import { NgModule } from '@angular/core';

import {
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
} from '@angular/material';


@NgModule({
    imports: [MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatInputModule],
    exports: [MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule]
})
export class MyMaterialModule { }
