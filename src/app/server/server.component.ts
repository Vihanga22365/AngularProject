import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: any = 0;
  serverStatus: string = '';

  constructor() {
    this.serverId = Math.random().toFixed(2);
    this.serverStatus = this.serverId > 0.5 ? 'offline' : 'online';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getBackgroundColor(): string {
    if (this.serverStatus == 'online') {
      return 'green';
    } else if (this.serverStatus == 'offline') {
      return 'red';
    } else {
      return 'blue';
    }
  }
}
