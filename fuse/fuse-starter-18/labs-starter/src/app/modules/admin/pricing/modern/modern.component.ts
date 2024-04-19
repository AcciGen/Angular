import { NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector: 'app-modern',
  templateUrl: './modern.component.html',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone     : true,
  imports        : [MatButtonModule, NgClass, FuseCardComponent, NgIf, MatIconModule],
})
export class ModernComponent {
  yearlyBilling: boolean = true;

    /**
     * Constructor
     */
    constructor()
    {
    }
}
