/** Angular Dependencies */
import { NgModule } from '@angular/core';

/** Module Level Dependencies*/
import { DashboardComponent } from './components/dashboard.component';
import { DashboardContainerComponent } from './components/container.component';
import { FooterComponent } from './layout/footer/footer.component';
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopNavigationBarComponent } from './layout/top-navigation-bar/top-navigation-bar.component';
import { CommonModule, TranslateModule } from '../shared/common.module';

/** Module Definition */
@NgModule({
    //imports: [CommonModule, TranslateModule],
    imports: [],
    exports: [],
    declarations: [
        DashboardContainerComponent,
        DashboardComponent,
        // FooterComponent,
        // TopNavigationBarComponent,
        // SidebarComponent,
        // QuickSidebarComponent
    ],
    providers: [],
})
export class DashboardModule { }
