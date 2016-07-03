import {Component} from "angular2/core";
import {Router, CanDeactivate, ComponentInstruction} from "angular2/router";

@Component({
  template: `
    <h1>Component 2</h1>
    <button (click)="onNavigate()">Take me to Component 1</button>
  `
})
export class Component2Component implements CanDeactivate {
  constructor(private _router: Router) {}

  onNavigate() {
    this._router.navigate(['Component1', {source: 'Component 2'}]);
  }

  routerCanDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):boolean|Promise<boolean> {
    return confirm("Sure?");
  }
}
