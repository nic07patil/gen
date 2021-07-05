import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './dashboard/insights/insights.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: 'insights',
        component: InsightsComponent,
        data: {
          title: "Insights",
          pageName: 'Insights',
          urls: [
            { title: "Dashboard" },
            { title: "Insights" }
          ],
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
