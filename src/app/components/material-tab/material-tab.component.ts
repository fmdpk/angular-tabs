import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DynamicTabContentComponent } from '../dynamic-tab-content/dynamic-tab-content.component';

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

  @ViewChild('tabContent', { read: ViewContainerRef })
  tabContent!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }

    const factory = this.resolver.resolveComponentFactory(
      DynamicTabContentComponent
    );
    const componentRef = this.tabContent.createComponent(factory);
    componentRef.instance.data = `Content for ${this.tabs.length} tab`;
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
  }
}
