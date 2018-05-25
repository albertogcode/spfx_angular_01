import { TestBed, async } from '@angular/core/testing';
import { controller } from './controller';
import { } from 'jasmine';
import { mockService } from './service';



describe('test01 > controller >', () => {
  let app: controller;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        controller
      ]
    }).compileComponents();
    const fixture = TestBed.createComponent(controller);
    app = fixture.debugElement.componentInstance;
  }));

  it('basic test', async(() => {
    expect(1).toBe(1);
  }));

  it('should create the app', async(() => {
   
    expect(app).toBeTruthy();
  }));

  it('carga inicial mock', async(() => {    
    app.service=new mockService();
    app.ngOnInit();
    expect(app.message).toBe('Cargando Valor desde mock');
  }));

  it('descargar', async(() => {
    app.descargar();
    expect(app.message).toBe('Descargado');
  }));

});