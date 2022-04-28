import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-manager',
  templateUrl: './server-manager.component.html',
  styleUrls: ['./server-manager.component.css']
})
export class ServerManagerComponent implements OnInit {
  serverNameList = [];
  serverName = '';
  isDuplicatedServerName = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
    if(this.checkDuplicatedServerName(this.serverName)) {
      this.isDuplicatedServerName = true
    }else{
      this.isDuplicatedServerName = false
    }
  }

  onCreateServer() {
    if(this.checkDuplicatedServerName(this.serverName) == false){
      console.log(this.serverName)
      this.serverNameList.push(this.serverName)
      this.serverName = '';
    }
    console.log(this.serverNameList)
  }

  checkDuplicatedServerName(serverName){
    if(this.serverNameList.includes(serverName)){
      return true;
    }
    return false;
  }



}
