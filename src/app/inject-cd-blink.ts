import { ElementRef, NgZone, inject } from '@angular/core';

export function injectCdBlink(): () => null {
  const element = inject(ElementRef);
  const zone = inject(NgZone);
  let active = false;

  const blink = () => {
    const selectedColor = element.nativeElement.firstChild.style.borderColor;
    const selectedWidth = element.nativeElement.firstChild.style.borderWidth;
    const visualizerColor = 'crimson';
    const visualizerWidth = '5px';

    !active &&
      zone.runOutsideAngular(() => {
        active = true;
        setTimeout(() => {
          element.nativeElement.firstChild.style.borderColor = visualizerColor;
          element.nativeElement.firstChild.style.borderWidth = visualizerWidth;
        });
        setTimeout(() => {
          element.nativeElement.firstChild.style.borderColor = selectedColor;
          element.nativeElement.firstChild.style.borderWidth = selectedWidth;
          active = false;
        }, 500);
      });

    return null;
  };

  return blink;
}