// modules
import { NgModule }             from '@angular/core';

// components
import { TestInputComponent }   from './input.component';

@NgModule({
    bootstrap: [],
    declarations: [TestInputComponent],
    imports: [NgModule],
    providers: [],
    entryComponents: [TestInputComponent],
    exports:[TestInputComponent]
})
export class TestInputModule { }
