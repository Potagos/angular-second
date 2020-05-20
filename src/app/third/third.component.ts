import { ToolbarService } from './../services/toolbar.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(
    private toolbar: ToolbarService
  ) { }

  ngOnInit(): void {
    this.toolbar.clearToolbar();
  }

}
