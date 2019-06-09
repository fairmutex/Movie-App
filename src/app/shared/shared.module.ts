import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { StarComponent } from './components/star.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarComponent,
    ],
    exports: [
        StarComponent
    ],
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
