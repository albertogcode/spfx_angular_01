import { async } from '@angular/core/testing';
import mockService from './mock.service';
import { } from 'jasmine';
import { item } from './interface';

describe('MockService >', () => {

  let _service: mockService;

  beforeEach(async(() => {
    _service = new mockService();
  }));

  it('create de service', async(() => {
    expect(_service).toBeTruthy();
  }));

  it('get items', async(() => {
    _service.getItems().then(items => {
      expect(items.length).toBe(10);
    });
  }));

  it('get items count', async(() => {
    let n = _service.getItemsCount();
    expect(n).toBe(10);
  }));

  it('get list name', async(() => {
    _service.getListName().then(name => {
      expect(name).toBe('Mock mi nombre lista');
    });
  }));

  it('add item error 0', async(() => {
    let itemNew: item = new item();
    _service.addItem(itemNew).then(message => {
      expect(message).toBe('Elemento incorrecto');
    });
  }));

  it('add item error 1', async(() => {
    let itemNew: item = new item();    
    itemNew.Title = '';
    itemNew.Cuerpo = '';

    _service.addItem(itemNew).then(message => {
      expect(message).toBe('Elemento incorrecto');
    });
  }));

  it('add item error 2', async(() => {
    let itemNew: item = new item();    
    itemNew.Title = '1';
    itemNew.Cuerpo = '';

    _service.addItem(itemNew).then(message => {
      expect(message).toBe('Elemento incorrecto');
    });
  }));

  it('add item ok', async(() => {
    let itemNew: item = new item();
    itemNew.Id = 1;
    itemNew.Title = '1';
    itemNew.Cuerpo = '1';

    _service.addItem(itemNew).then(message => {
      expect(message).toBe('Insertado correctamente');
    });
  }));

  it('get item', async(() => {
    _service.getItem(0).then(item => {
      expect(item.Id).toBe(1);
      expect(item.Title).toBe('Registro 1');
      expect(item.Cuerpo).toBe('');
    });
  }));

  it('basic test', async(() => {
    expect(1).toBe(1);
  }));


});