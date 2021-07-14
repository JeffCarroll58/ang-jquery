import $ from 'jquery';
import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'jquery',
  templateUrl: './jquery.component.html',
  styleUrls: [ './app.component.css' ]
})
export class JqueryComponent implements OnInit  {
  @Input() name: string;
  ngOnInit() {

      $(document).ready(function() {


          alert('we call alert from JQuery');

      });

  }


}
