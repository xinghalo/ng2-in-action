import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  // declarations 指定模块中的组件，使用ng generate会自动添加
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  // 描述模块的依赖
  imports: [
    BrowserModule
  ],
  providers: [],
  // 顶层组件
  bootstrap: [AppComponent]
})
export class AppModule { }
