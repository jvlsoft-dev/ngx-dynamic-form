import { Observable } from "rxjs";
import { IRows } from "./ifield-options";

export interface IFieldService {
    /**
     * Method to get the items from the data base.
     * @param query - Server query
     * @param skip - Items skip number.
     * @param limit - Items limit.
     */
    all: (query?: any, skip?: number, limit?: number) => Observable<IRows>
}
