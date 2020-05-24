import { Component, Input } from '@angular/core';
import { InlineTopic } from '../../models/inline-topic.model';


@Component({
  selector: 'app-inline-topic',
  templateUrl: './inline-topic.component.html',
  styleUrls: ['./inline-topic.component.scss']
})
export class InlineTopicComponent{
  @Input() inlineTopics: InlineTopic[]
}
