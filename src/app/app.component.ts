import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LANGUAGES} from './common/constants';
import {LocalStorageTool} from './common/tools/localStorageTool';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'base-project';

  constructor(
    private transService: TranslateService,
  ){
    this.transService.setDefaultLang(LANGUAGES.VI);
    this.transService.use(LocalStorageTool.getLanguage());
  }

  ngOnInit(): void {

  }
}
