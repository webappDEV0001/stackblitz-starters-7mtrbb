import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Custom
import { HeaderComponent } from './components/header/header.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { WidgetBodyComponent } from './components/widget-body/widget-body.component';
import { WidgetService } from './services/widget.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WidgetContainerComponent,
    WidgetHeaderComponent,
    WidgetBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [WidgetService],
  bootstrap: [AppComponent],
})
export class AppModule {}
