import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';


@Component({
  selector: 'app-button-element',
  templateUrl: './button-element.component.html',
  styleUrls: ['./button-element.component.css']
})
export class ButtonElementComponent implements OnInit {
  @Input() name: string;
  @Input() isDisabled: boolean;
  @Input() currentStep;

  constructor() { }

  ngOnInit() {
  }

}
