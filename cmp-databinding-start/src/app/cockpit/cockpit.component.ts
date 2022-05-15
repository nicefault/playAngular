import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}> ();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}> ();
  @ViewChild('newServerContent') serverContentInput;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerName, newServerContent) {
    this.serverCreated.emit(
      {serverName: newServerName, serverContent: newServerContent}
    );
  }

  onAddBlueprint(newServerName, newServerContent) {
    this.blueprintCreated.emit(
      {serverName: newServerName, serverContent: newServerContent}
    );
  }
}
