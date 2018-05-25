//import { Observable } from 'rxjs/Rx'

export class item {
    public Id: number;
    public Title: string;
    public Cuerpo: string;
}

export interface iService {
    getListName(): Promise<string>;
    getItems(): Promise<item[]>;
    addItem(item: item): Promise<string>;
    getItemsCount(): number;
    getItem(id: number): Promise<item>;
}