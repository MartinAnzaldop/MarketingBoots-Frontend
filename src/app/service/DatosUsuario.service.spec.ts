/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatosUsuarioService } from './DatosUsuario.service';

describe('Service: DatosUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosUsuarioService]
    });
  });

  it('should ...', inject([DatosUsuarioService], (service: DatosUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
