import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { GlobalVarsService } from './providers/global-vars.service';
import { NgxUiLoaderConfig, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ColorPickerModule } from 'ngx-color-picker';
import { EventEmitterService } from './providers/event-emitter.service';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';
import { DialogLegendComponent } from './dialog-legend/dialog-legend.component';
import { DialogLayerPreviewComponent } from './dialog-layer-preview/dialog-layer-preview.component';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';
import { KategorijaService } from './providers/kategorija.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'green',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin',
  blur: 5,
  delay: 0.2,
  fgsColor: '#17a11e',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'folding-cube',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  // "logoUrl": "assets/imgs/logo.png",
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'green',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: 'Molimo sačekajte...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: 8000,
  minTime: 0
};


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    DialogDetailsComponent,
    DialogLegendComponent,
    DialogLayerPreviewComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AppRoutingModule,
    ColorPickerModule,
    AngularMaterialModule,
    LeafletModule
  ],
  providers: [
    GlobalVarsService,
    EventEmitterService,
    KategorijaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
