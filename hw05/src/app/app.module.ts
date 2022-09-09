import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';
import { CardBlockComponent } from './card-block/card-block.component';
import { UnorderedListComponent } from './unordered-list/unordered-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsContainerComponent,
    CardBlockComponent,
    UnorderedListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
