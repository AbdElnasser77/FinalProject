import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private _loaderService: LoaderService){ }
  isLoading: Subject<boolean> = this._loaderService.isLoading;
}
