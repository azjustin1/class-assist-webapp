import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FolderService } from './folder.service';


@NgModule({
  imports: [SharedModule],
  declarations: [],
  exports: [],
  providers: [FolderService],
})
export class FolderModule { }
