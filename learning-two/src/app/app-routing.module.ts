import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './project-servers/server-creator2/home/home.component';
import { UsersComponent } from './project-servers/server-creator2/users/users.component';
import { UserComponent } from './project-servers/server-creator2/users/user/user.component';
import { ServersComponent } from './project-servers/server-creator2/servers/servers.component';
import { ServerComponent } from './project-servers/server-creator2/servers/server/server.component';
import { EditServerComponent } from './project-servers/server-creator2/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './project-servers/server-creator2/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './project-servers/server-creator2/servers/server/server-resolver.service';

const appRoutes:Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent, children: [
      	{ path: ':id', component: UserComponent },
      	{ path: ':id/:name', component: UserComponent }
	]},
	{ 
	    path: 'servers',
	    //canActivate: [AuthGuard],
	    canActivateChild: [AuthGuard],
	    component: ServersComponent,
	    children: [
          	{ path: ':id', component: ServerComponent, resolve: { server: ServerResolver} },
          	{ path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
	    ]
	},
	//{ path: '404', component: PageNotFoundComponent },
	{ path: '404', component: PageNotFoundComponent, data: { message: 'Page Not Found!'} },
	{ path: '**', redirectTo: '/404' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    
}