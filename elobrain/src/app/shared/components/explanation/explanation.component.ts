import { Component, Input } from '@angular/core';
import { Explanation } from 'src/app/shared/models/explanation.model';

@Component({
  selector: 'app-explanation',
  templateUrl: './explanation.component.html',
  styleUrls: ['./explanation.component.scss']
})
export class ExplanationComponent{
  @Input() explanation: Explanation
}
