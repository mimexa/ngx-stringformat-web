import { Component } from '@angular/core';
import { StringFormatPipe } from 'ngx-stringformat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pattern: string = 'lorem %s dolor sit amet';
  args: Array<{ value }> = new Array<{ value }>();
  result: string = '';
  constructor() {
    this.args.push({ value: 'ipsum' });
    this.evaluate();
  }
  remove(index: number) {
    this.args.splice(index, 1);
    this.evaluate();
  }

  insert(index: number) {
    this.args.splice(index + 1, 0, { value: '' });
    this.evaluate();
  }

  evaluate() {
    let values = this.args.map(
      item => item.value
    );
    this.result = new StringFormatPipe().transform(this.pattern, ...values);
  }
}
