import { TestBed, async } from '@angular/core/testing';
import { controller } from './controller';
import { } from 'jasmine';
import mockService from './mock.service';
import { By } from '@angular/platform-browser';


describe('HelloWorld > controller >', () => {
  let fixture;
  let app: controller;

  beforeEach(async(() => {
    //beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        controller
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(controller);
    app = fixture.debugElement.componentInstance;
    app.service = new mockService();
    app.ngOnInit();
    fixture.detectChanges();
  }));

  it('basic test', async(() => {
    expect(1).toBe(1);
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('get list name', async(() => {
    fixture.detectChanges();
    let elements = fixture.debugElement;
    const value = elements.query(By.css('h3')).nativeElement.innerText;
    expect(value).toEqual('Lista Mock mi nombre lista 10');
  }));

  it('get items', async(() => {    
    app.getItems();        
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let elements = fixture.debugElement;      
      const value = elements.query(By.css('#dvMessage')).nativeElement.innerText;
      expect(value).toEqual('Elementos cargados');
      expect(1).toBe(1);
    });
  }));

  /* it('get list name', async(() => {
    _service.getListName().then(name => {
      expect(name).toBe('Mock mi nombre lista');
    });
  })); */

  /* private getItems(): void {
        this.message = 'Cargando elementos...';
        this.showDetail = false;
        utilities.logger('controller > getItems');
        this.service.getItems().then(itemsSP => {
            this.items = itemsSP;
            this.itemsCount = this.service.getItemsCount();
            this.message = 'Elementos cargados';
        });
    } */

});