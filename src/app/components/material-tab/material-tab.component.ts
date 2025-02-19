import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-material-tab',
  standalone: true,
  imports: [
    MatTabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './material-tab.component.html',
  styleUrl: './material-tab.component.scss',
})
export class MaterialTabComponent {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
  }
}
