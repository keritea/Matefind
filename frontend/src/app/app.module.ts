import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ControlComponent } from './control/control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';

import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users.component';
import { UserTileComponent } from './users/user-tile/user-tile.component';
import { UserService } from './services/user.service';
import { HighlightDirective } from './directives/highlight.directive';
import { LastNewsComponent } from './main/last-news/last-news.component';
import { NewsService } from './services/news.service';
import { SigninComponent } from './header/signin/signin.component';
import { RegistrationComponent } from './header/registration/registration.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { TeamsComponent } from './teams/teams.component';
import { PublicationsComponent } from './publications/publications.component';
import { MessagesComponent } from './messages/messages.component';
import { GameTileComponent } from './games/game-tile/game-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ControlComponent,
    MainComponent,
    UsersComponent,
    UserTileComponent,
    HighlightDirective,
    LastNewsComponent,
    SigninComponent,
    RegistrationComponent,
    UserProfileComponent,
    GamesComponent,
    TeamsComponent,
    PublicationsComponent,
    MessagesComponent,
    GameTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [
    UserService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
