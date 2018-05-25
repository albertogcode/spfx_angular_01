//import '@types/jasmine';
import { async } from '@angular/core/testing';
import { utilities } from './utilities';

describe('General test >', () => {
   
    it('basic test', async(() => {
        expect(1).toBe(1);
      }));

    it('Environment prod', async(() => {
        expect(utilities.isEnvironmentProduction()).toBe(true);
        
    }));
});