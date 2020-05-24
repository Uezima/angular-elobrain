import { Component, Input, OnInit } from '@angular/core';
import { BigTitle } from '../../models/big-title.model';

@Component({
  selector: 'app-big-title',
  templateUrl: './big-title.component.html',
  styleUrls: ['./big-title.component.scss']
})
export class BigTitleComponent implements OnInit{
  @Input() bigTitle: BigTitle

  ngOnInit(){}

}
