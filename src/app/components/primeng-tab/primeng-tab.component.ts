import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TabsModule} from 'primeng/tabs';
import {RouterOutlet} from '@angular/router';
import {DynamicTabContentComponent} from '../dynamic-tab-content/dynamic-tab-content.component';
import {CdkDrag, CdkDragDrop, CdkDragStart, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

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
    RouterOutlet,
    DynamicTabContentComponent,
    CdkDrag,
    CdkDropList,
  ],
  templateUrl: './primeng-tab.component.html',
  styleUrl: './primeng-tab.component.scss',
})
export class PrimengTabComponent implements OnInit {
  @Input() data!: string;
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
    {
      id: 4,
      icon: 'pi pi-cog',
      label: 'tab 4',
    },
    {
      id: 5,
      icon: 'pi pi-home',
      label: 'tab 5',
    },
  ];

  selected = new FormControl(0);
  selectedDragItem = new FormControl(-1);

  ngOnInit() {
    console.log(this.data)
  }

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

  removeTab(event: MouseEvent, index: number) {
    console.log(index)
    if(index % 2 === 0){
      event.preventDefault()
      return;
    } else {
      this.tabs.splice(index, 1);
      if (this.selected.getRawValue() === index) {
        this.selected.setValue(index - 1);
      }
      this.reorderTabs()
    }
  }

  onTabChange(tabIndex: number | string) {
    console.log(tabIndex)
    this.selected.setValue(+tabIndex);
  }

  drop(event: CdkDragDrop<TabLabelInterface[]>) {
    console.log(event)
    if (event.previousIndex === event.currentIndex) return;
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.setActiveTab(event)
    this.reorderTabs()
  }

  setActiveTab(event: CdkDragDrop<TabLabelInterface[]>) {
    let selectedTabIndex = +this.selected.getRawValue()!
    if (this.selectedDragItem.getRawValue() === this.selected.getRawValue()) {
      this.selected.setValue(+event.currentIndex);
      return;
    } else if (
      event.previousIndex < +this.selected.getRawValue()! &&
      event.currentIndex >= +this.selected.getRawValue()!
    ) {
      this.selected.setValue(selectedTabIndex - 1)
      return;
    } else if (
      event.previousIndex > +this.selected.getRawValue()! &&
      event.currentIndex <= +this.selected.getRawValue()!
    ) {
      this.selected.setValue(selectedTabIndex + 1)
      return;
    } else {
      return
    }
  }

  reorderTabs(){
    this.tabs.forEach((item: TabLabelInterface, index: number) => {
      item.id = index;
      item.label = 'tab ' + index;
    });
  }

  dragStarted(event: CdkDragStart<any>, index: number) {
    this.selectedDragItem.setValue(index)
    console.log(event)
  }
}
