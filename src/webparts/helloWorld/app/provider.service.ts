import mockService from './mock.service';
import prodService from './prod.service';
import { iService } from './interface';
import { utilities } from '../../utilities';

// let factoryService = () => {
//     if (Environment.type === EnvironmentType.Local) {
//         //return new mockService();
//         return 'prodService';
//     }
//     else {
//         //return new prodService();
//         return 'mockService';
//     }
// };

// export let providerService = {
//     provide: prodService,
//     useFactory: factoryService
// };

export function getService(): iService {
    //  if (Environment.type === EnvironmentType.Local) { >> no funciona en karma
    if (utilities.isEnvironmentProduction()) {
        return new prodService();
    }
    else {
        return new mockService();
    }
} 