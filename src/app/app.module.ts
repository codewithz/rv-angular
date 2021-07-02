import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { BlogPostComponent } from './post.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { BooksComponent } from './books/books.component';
import { HtmlVsDomComponent } from './html-vs-dom/html-vs-dom.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveSwitchComponent } from './directive-switch/directive-switch.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    BlogPostComponent,
    CourseComponent,
    BooksComponent,
    HtmlVsDomComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    LikeComponent,
    DirectiveIfComponent,
    DirectiveSwitchComponent,
    DirectiveForComponent,
    TrackingComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
