import { Component, Input } from '@angular/core';

import { EntityTypeComponent } from '../../meta/entitytype.component';

@Component({
    selector: 'mg-bold-text',
    template: '<b>{{entitytype.name}}</b><br>',
})
export class BoldTextComponent extends EntityTypeComponent {}
