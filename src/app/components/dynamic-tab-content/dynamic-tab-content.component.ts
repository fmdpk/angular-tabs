import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-tab-content.component.html',
  styleUrl: './dynamic-tab-content.component.scss',
})
export class DynamicTabContentComponent implements OnInit {
  @Input() data!: string;

  ngOnInit(): void {
    console.log(this.data);
  }
}
