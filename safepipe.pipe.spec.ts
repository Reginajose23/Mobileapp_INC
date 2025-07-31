import { Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafepipePipe } from './safepipe.pipe';

describe('SafepipePipe', () => {
  it('create an instance', () => {
    const pipe = new SafepipePipe();
    expect(pipe).toBeTruthy();
  });
});
