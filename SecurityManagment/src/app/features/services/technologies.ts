import { Injectable } from '@angular/core';
import { ITechnology } from '../../models/tech.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Technologies {
  private _technologies: ITechnology[] = [
    {name: "Mock Data", imageUrl: "/techs/Mock Data.gif", order: 1},
    {name: "Code coverage", imageUrl: "/techs/code-coverage.jpg", order: 2},
    {name: "HTML", imageUrl: "/techs/HTML.svg", order: 3},
    {name: "CSS", imageUrl: "/techs/CSS.svg", order: 4},
    {name: "Bootstrap", imageUrl: "/techs/Bootstrap.svg", order: 5},
    {name: "Lazy loading", imageUrl: "/techs/lazy-loading.svg", order:6},
    {name: "Reusable Components", imageUrl: "/techs/reusable-component.png", order:7}
  ];


     getTechnologies(): Observable<ITechnology[]> {
        return of(this._technologies);
     }
}
