import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customerportal';

  constructor(private _translate: TranslateService) {
    _translate.addLangs(['en', 'hi']);
    _translate.setDefaultLang('en');

  }
}
