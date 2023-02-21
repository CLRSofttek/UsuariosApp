import { Component, Input } from '@angular/core';
import { User } from '../../model/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent {

  @Input()
  user : User | undefined;

}
