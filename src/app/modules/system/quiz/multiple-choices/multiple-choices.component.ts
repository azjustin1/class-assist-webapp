import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	standalone: true,
	imports: [MatInputModule, TranslateModule],
	selector: 'app-multiple-choices',
	templateUrl: 'multiple-choices.component.html',
})
export class MultipleChoicesComponent {
}
