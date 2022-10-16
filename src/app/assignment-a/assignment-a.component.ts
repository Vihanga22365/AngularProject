import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-a',
  templateUrl: './assignment-a.component.html',
  styleUrls: ['./assignment-a.component.css'],
})
export class AssignmentAComponent implements OnInit {
  showStatus: boolean = true;
  logs: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleParagraph() {
    this.showStatus = !this.showStatus;
    this.logs.push(`${Date.now()} : ${this.logs.length + 1}`);
  }
}
