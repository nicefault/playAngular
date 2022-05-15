import {Component} from '@angular/core';
import {Server, ServerType} from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverList:Server[] = [
    new Server(ServerType.server, 'serverName', 'serverContent')
  ];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverList.push(new Server(ServerType.server, serverData.serverName, serverData.serverContent))
  }
  onBlueprintAdded(serverData:{serverName:string, serverContent:string}){
    this.serverList.push(
      new Server(ServerType.blueprint, serverData.serverName, serverData.serverContent)
    )
  }
}
