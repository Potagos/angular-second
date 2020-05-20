import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  constructor(
    private router: Router,
  ) { }

  createToolbar(status: number = 0){
    this.router.navigate([{ outlets: { toolbar: '' + status }}]);
  }

  clearToolbar(){
    this.router.navigate([{ outlets: { toolbar: null }}]);
  }
}
