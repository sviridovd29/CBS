import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {

  mainList = ['01 просто текст', "02 просто текст", "03 просто текст", "04 просто текст", "05 просто текст"]

  constructor() { }

  ngOnInit(): void {
  }

}
