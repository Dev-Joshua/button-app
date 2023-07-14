import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() onlyText: boolean = false;
  @Input() disableShadow: boolean = false;
  @Input() disableOnlyTxt: boolean = false;
  @Input() btnIcon: boolean = false;
  @Input() btnIconEnd: boolean = false;
  @Input() sm: boolean = false;
  @Input() md: boolean = false;
  @Input() lg: boolean = false;
  @Input() primary: boolean = false;
  @Input() secondary: boolean = false;
  @Input() danger: boolean = false;
  @Input() bgDefault: boolean = false;
  @Input() bgPrimary: boolean = false;
  @Input() bgSecondary: boolean = false;
  @Input() bgDanger: boolean = false;
  @Input() bgOutline: boolean = false;
  @Input() bgOnlyTxt: boolean = false;
}
