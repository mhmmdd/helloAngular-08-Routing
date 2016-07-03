import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Component1Component} from "./component1.component";
import {Component2Component} from "./component2.component";

@Component({
  selector: 'my-app',
  template: `
    <header>
      <ul>
        <li><a [routerLink]="['Component1', {source: 'AppComponent', optional:'This is optional'}]">Component 1</a></li>
        <li><a [routerLink]="['Component2']">Component 2</a></li>
      </ul>
    </header>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/c1/:source/...', name: 'Component1', component: Component1Component},
  {path: '/c2', name: 'Component2', component: Component2Component}
])
export class AppComponent {

}
