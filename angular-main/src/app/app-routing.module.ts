import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { MyMicroComponent } from './my-micro/my-micro.component';
import { MyPageComponent } from './my-page/my-page.component';

interface IRoutes extends Route {
  name: string;
}

export const routes: IRoutes[] = [
  { name: '首页', path: '', component: HomeComponent },
  {
    name: 'hello',
    path: 'hello',
    component: HelloComponent,
  },
  {
    // 👇 非严格匹配，/my-page/* 都指向 MyPage 页面
    path: 'my-page',
    name: '子页面一',
    children: [
      {
        path: '**',
        component: MyPageComponent,
      },
    ],
  },
  {
    path: 'my-micro',
    name: '子页面二',
    children: [
      {
        path: '**',
        component: MyMicroComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
