import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './shared/components/header/header.component';
import { PokeCardComponent } from './shared/components/poke-card/poke-card.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeListCardComponent } from './shared/components/poke-list-card/poke-list-card.component';
import { PokeCompleteComponent } from './shared/components/poke-complete/poke-complete.component';
import { ReactiveFormsModule } from '@angular/forms';


const matModules = [
  MatAutocompleteModule,
  MatCardModule,
  MatDialogModule,
  MatCommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeCardComponent,
    PokeListComponent,
    PokeListCardComponent,
    PokeCompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...matModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
