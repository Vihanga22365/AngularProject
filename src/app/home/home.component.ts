import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  disableServerButton: boolean = true;
  serverCreated: string = 'Still not create new server';
  serverName: string = '';
  serverCreateStatus = false;
  servers: any[] = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.disableServerButton = false;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreateStatus = true;
    this.servers.push(this.serverName);
    this.serverCreated = `${this.serverName} server is created now`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
