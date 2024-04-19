import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone     : true,
  imports        : [MatButtonModule, NgClass, FuseCardComponent, NgIf, MatIconModule],
})
export class SimpleComponent {
  yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
