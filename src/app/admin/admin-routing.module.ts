import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAdminMembersComponent } from './admin-admin-members/admin-admin-members.component' ;
import { AdminChaptersComponent } from './admin-chapters/admin-chapters.component' ;
import { AdminHomeComponent } from './admin-home/admin-home.component' ;
import { AdminRegisterAdminComponent } from './admin-register-admin/admin-register-admin.component' ;
import { AdminRegisterChapterComponent } from './admin-register-chapter/admin-register-chapter.component' ;
import { AdminRegisterRoleComponent } from './admin-register-role/admin-register-role.component' ;
import { AdminRolesComponent } from './admin-roles/admin-roles.component' ;
import { AdminHomeComponent } from './admin-home/admin-home.component' ;

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent
  },
  {
    path: 'members',
    component: AdminAdminMembersComponent
  },
  {
    path: 'chapters',
    component: AdminChaptersComponent
  },
  {
    path: 'register-admin',
    component: AdminRegisterAdminComponent
  },
  {
    path: 'register-chapter',
    component: AdminRegisterChapterComponent
  },
  {
    path: 'register-role',
    component: AdminRegisterRoleComponent
  },
  {
    path: 'roles',
    component: AdminRolesComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
