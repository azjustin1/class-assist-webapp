import { NgModule } from '@angular/core';

import { NavigatorComponent } from './navigator.component';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [SharedModule, RouterModule],
	declarations: [NavigatorComponent],
	providers: [],
	exports: [NavigatorComponent],
})
export class NavigatorModule {}
