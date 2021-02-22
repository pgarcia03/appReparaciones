import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListarDefectosComponent } from './components/listar-defectos/listar-defectos.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ContadorComponent } from './components/contador/contador.component';
import { TabsContentComponent } from './components/tabs-content/tabs-content.component';


import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BadgeModule} from 'primeng/badge';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {MessagesModule} from 'primeng/messages';


/*-
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
*/

@NgModule({
  declarations: [
    AppComponent,
    ListarDefectosComponent,
    AutocompleteComponent,
    ContadorComponent,
    TabsContentComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    TabViewModule,
    ButtonModule,
    AutoCompleteModule,
    BadgeModule,
    InputTextModule,
    DividerModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
