import { ToolbarService } from './../services/toolbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(
    private toolbar: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbar.createToolbar(2);
  }

}
