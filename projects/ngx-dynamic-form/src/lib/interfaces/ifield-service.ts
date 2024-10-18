import { Observable } from "rxjs";
import { IRows } from "./ifield-options";

export interface IFieldService {
    /**
     * Method to get the items from the data base.
     * @param query - Server query
     * @param skip - Items skip number.
     * @param limit - Items limit.
     */
    all: (query?: any, skip?: number, limit?: number, order?: string) => Observable<IRows>

    /**
     * Make a GET request to the backend for the given model
     *
     * @param id - The id of the object to retrieve
     * @param search - The query params to search
     * @returns Returns an `Observable` with the requested object
     */
    get: (id: number | string, search?: any) => Observable<any> 

    /**
     * Make a POST or PUT request to the backend to the given model to save the data
     *
     * @param item The object data to save
     * @param toastBool - Define if the method launch or not a status toast using `HotToastService`
     * @param args - The query params
     * @returns Returns an `Observable` with the saved or updated object
     */
    save: (item: any, toastBool?:boolean, args?: any) => Observable<any> 
}
