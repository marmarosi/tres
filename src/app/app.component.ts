import { Component } from '@angular/core';
import { NgtCanvas, extend } from 'angular-three';
import * as THREE from 'three';
import { SceneGraph } from './scene-graph.component';

extend(THREE);

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ngt-canvas [sceneGraph]="sceneGraph" />
  `,
  imports: [NgtCanvas],
  styles: [`
    :host {
      display: block;
      height: 100dvh;
    }
  `],
})
export class AppComponent {
  protected sceneGraph = SceneGraph;
}
