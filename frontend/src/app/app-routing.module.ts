import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from "./post/post.component";
const routes: Routes = [
  { path: 'edit/:id/:title/:body', component: EditPostComponent },
  { path : 'home', component: HomeComponent},
  { path : 'post/:id/:title/:body', component: PostComponent},
  { path :'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }