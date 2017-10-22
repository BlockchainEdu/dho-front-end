import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminChaptersComponent } from './admin-chapters/admin-chapters.component';
import { AdminRegisterChapterComponent } from './admin-register-chapter/admin-register-chapter.component';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';
import { AdminRegisterRoleComponent } from './admin-register-role/admin-register-role.component';
import { AdminRegisterAdminComponent } from './admin-register-admin/admin-register-admin.component';
import { AdminAdminMembersComponent } from './admin-admin-members/admin-admin-members.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminChaptersComponent, AdminRegisterChapterComponent, AdminRolesComponent, AdminRegisterRoleComponent, AdminRegisterAdminComponent, AdminAdminMembersComponent, AdminHomeComponent]
})
export class AdminModule { }
