import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'solutions',component:SolutionsComponent},
  {path:'services',component:ServicesComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'careers',component:CareersComponent},
  {path:'blog',component:BlogComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'',redirectTo:"about",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
