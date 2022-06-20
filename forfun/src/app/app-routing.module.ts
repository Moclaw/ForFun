import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappybirthdayComponent } from './happybirthday/happybirthday.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomieoflamComponent } from './homieoflam/homieoflam.component';
import { LoveroflamComponent } from './loveroflam/loveroflam.component';
import { SorryloverComponent } from './sorrylover/sorrylover.component';

const routes: Routes = [
	{ path: "", component: HomePageComponent, pathMatch: "full" },
	{ path: "homieoflam", component: HomieoflamComponent },
	{ path: "loveroflam", component: LoveroflamComponent },
	{ path: "birthday", component: HappybirthdayComponent },
	{path:"sorrylover", component: SorryloverComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
