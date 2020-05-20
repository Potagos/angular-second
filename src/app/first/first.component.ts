import { ToolbarService } from './../services/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(
    private toolbar: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbar.createToolbar(1);
  }

}
