import { Injectable } from '@angular/core';
import {
  ContentPageMetaResolver,
  CmsService,
  PageDescriptionResolver,
  RoutingPageMetaResolver,
  TranslationService,
  BasePageMetaResolver,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export default class CustomContentPageMetaResolver
  extends ContentPageMetaResolver
  implements PageDescriptionResolver
{
  constructor(
    protected cmsService: CmsService,
    protected translation: TranslationService,
    protected routingPageMetaResolver: RoutingPageMetaResolver,
    protected basePageMetaResolver: BasePageMetaResolver
  ) {
    super(basePageMetaResolver);
  }

  resolveDescription(): Observable<string | undefined> {
    return this.resolveTitle().pipe(
      map((title) => `${title} for Spartacus.rocks`)
    );
  }
}
