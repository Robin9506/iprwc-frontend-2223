import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header.component";
import { UnderHeaderComponent } from "./under-header/under-header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        UnderHeaderComponent,
        BannerComponent,
        FooterComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        HeaderComponent,
        UnderHeaderComponent,
        BannerComponent,
        FooterComponent

    ]
  })
  export class RunningModule { }