import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TabsModule } from 'primeng/tabs';

interface TabLabelInterface {
  id: number;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-primeng-tab',
  standalone: true,
  imports: [
    TabsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './primeng-tab.component.html',
  styleUrl: './primeng-tab.component.scss',
})
export class PrimengTabComponent {
  tabs: TabLabelInterface[] = [
    {
      id: 0,
      icon: 'pi pi-check',
      label: 'tab 0',
    },
    {
      id: 1,
      icon: 'pi pi-times',
      label: 'tab 1',
    },
    {
      id: 2,
      icon: 'pi pi-search',
      label: 'tab 2',
    },
    {
      id: 3,
      icon: 'pi pi-user',
      label: 'tab 3',
    },
  ];

  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push({
      id: this.tabs.length + 1,
      label: `tab ${this.tabs.length + 1}`,
      icon: 'pi pi-user',
    });

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
    this.tabs.forEach((item: TabLabelInterface, index: number) => {
      item.id = index;
      item.label = 'tab ' + index;
    });
  }

  onTabChange(tabIndex: number | string) {
    this.selected.setValue(+tabIndex);
  }
}
