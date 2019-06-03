import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { KeysFilterPipe } from './pipes/keys-filter.pipe';
import { SanitizeHtmlPipe } from './pipes/sanitizeHtml.pipe';
import { ToastComponent } from './toast/toast.component';
import { ToastProvider } from './toast/providers/toast.provider';
import { NumberLimitPipe } from './pipes/number-limit.pipe';
import { StarComponent } from './components/star.component';



@NgModule({

    imports: [
        CommonModule
    ],
    declarations: [
        KeysFilterPipe,
        SanitizeHtmlPipe,
        NumberLimitPipe,
        StarComponent,
        ToastComponent,
    ],
    exports: [
        KeysFilterPipe,
        SanitizeHtmlPipe,
        NumberLimitPipe,
        ToastComponent,
        StarComponent
    ],


})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ToastProvider]
        };
    }
}