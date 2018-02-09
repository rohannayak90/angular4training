import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ServersComponent } from './project-servers/servers/servers.component';
import { ServersComponent } from './project-servers/server-creator2/servers/servers.component';
//import { ServerComponent } from './project-servers/server/server.component';
import { ServerComponent } from './project-servers/server-creator2/servers/server/server.component';
import { ProjectRecipesComponent } from './project-recipes/project-recipes.component';
import { HeaderComponent } from './project-recipes/header/header.component';
import { RecipesComponent } from './project-recipes/recipes/recipes.component';
import { RecipeListComponent } from './project-recipes/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project-recipes/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project-recipes/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project-recipes/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project-recipes/shopping-list/shopping-edit/shopping-edit.component';
import { ServerCreatorComponent } from './project-servers/server-creator/server-creator.component';
import { CockpitComponent } from './project-servers/server-creator/cockpit/cockpit.component';
import { ServerElementComponent } from './project-servers/server-creator/server-element/server-element.component';
import { Assignment4Component } from './assignments/assignment4/assignment4.component';
import { GameControlComponent } from './assignments/assignment4/game-control/game-control.component';
import { OddControlComponent } from './assignments/assignment4/odd-control/odd-control.component';
import { EvenControlComponent } from './assignments/assignment4/even-control/even-control.component';
import { ProjectDirectivesComponent } from './project-directives/project-directives.component';
import { BasicHighlightDirective } from './project-directives/directives/basic-highlight.directive';
import { BetterHighlightDirective } from './project-directives/directives/better-highlight.directive';
import { UnlessDirective } from './project-directives/directives/unless.directive';
import { DropdownDirective } from './project-recipes/shared/dropdown.directive';
import { ProjectServicesComponent } from './project-services/project-services.component';
import { AccountComponent } from './project-services/account/account.component';
import { NewAccountComponent } from './project-services/new-account/new-account.component';
import { Assignment5Component } from './assignments/assignment5/assignment5.component';
import { ActiveUsersComponent } from './assignments/assignment5/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/assignment5/inactive-users/inactive-users.component';
import { CounterService } from './assignments/assignment5/counter.service';
import { ShoppingListService } from './project-recipes/shopping-list/shopping-list.service';
import { ServerCreator2Component } from './project-servers/server-creator2/server-creator2.component';
import { HomeComponent } from './project-servers/server-creator2/home/home.component';
import { UsersComponent } from './project-servers/server-creator2/users/users.component';
import { UserComponent } from './project-servers/server-creator2/users/user/user.component';
import { EditServerComponent } from './project-servers/server-creator2/servers/edit-server/edit-server.component';
import { ServersService } from './project-servers/server-creator2/servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './project-servers/server-creator2/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './project-servers/server-creator2/servers/server/server-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    ProjectRecipesComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServerCreatorComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    OddControlComponent,
    EvenControlComponent,
    ProjectDirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ProjectServicesComponent,
    AccountComponent,
    NewAccountComponent,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServerCreator2Component,
    HomeComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CounterService,
    ShoppingListService,
    ServersService,
    AuthService,
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
