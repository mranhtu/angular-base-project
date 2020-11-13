import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {LoadingComponent} from './loading.component';

@NgModule({
    imports: [
        TranslateModule
    ],
    declarations: [
        LoadingComponent],
    exports: [
        LoadingComponent
    ]
})
export class LoadingModule {}
