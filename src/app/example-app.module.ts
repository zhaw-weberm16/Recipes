import {NgModule} from '@angular/core';
import {ExampleAppComponent} from './example-app.component';
import {AppModule} from 'path-framework-weberm16/app/app.module';

@NgModule({
    imports:      [AppModule.forRoot()],
    declarations: [ExampleAppComponent],
    bootstrap:    [ExampleAppComponent],
})
export class ExampleAppModule {}