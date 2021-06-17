import { Component } from '@angular/core';

@Component({
  selector: 'fb-clone-root',
  template: `<p class="text-center text-9xl">{{ title }}</p>`,
})
export class AppComponent {
  title = 'Facebook clone';
}
