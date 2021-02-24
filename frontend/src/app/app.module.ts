import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EditPostComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
