import { Component, inject, Inject, OnInit } from '@angular/core';
import { ITechnology } from '../models/tech.model';
import { Technologies } from '../features/services/technologies';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
   servicio = inject(Technologies)
   technologyList: ITechnology[] = [];
   
   ngOnInit(): void {
       this.servicio.getTechnologies().subscribe((techs: ITechnology[]) => {
          this.technologyList = techs.sort((a: ITechnology, b: ITechnology) => a.order - b.order)
       })
   }

}
