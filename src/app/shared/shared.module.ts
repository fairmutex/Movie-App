import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { KeysFilterPipe } from './pipes/keys-filter.pipe';
import { StarComponent } from './components/star.component';



@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        KeysFilterPipe,
        StarComponent,
    ],
    exports: [
        KeysFilterPipe,
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