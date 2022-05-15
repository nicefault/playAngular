import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Server} from "../server.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() server: Server;


  constructor() {
    console.log('constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
