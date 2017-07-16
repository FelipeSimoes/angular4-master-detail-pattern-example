import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFound {
    public static paths: string[] = ['not-found', '**'];
}
