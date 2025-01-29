import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';
@Component({
  selector: 'lifecycle-demo',
  imports: [],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css',
})
export class LifecycleDemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data: string = '';

  constructor() {
    console.log('Constructor: Component created!');
  }

  ngOnChanges() {
    // console.log('ngOnChanges: Input property changed!');
  }

  ngOnInit() {
    // console.log('ngOnInit: Component initialized!');
  }

  ngDoCheck() {
    // console.log('ngDoCheck: Change detection running!');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit: Content projected!');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked: Content checked!');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit: View initialized!');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked: View checked!');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy: Component destroyed!');
  }
}
