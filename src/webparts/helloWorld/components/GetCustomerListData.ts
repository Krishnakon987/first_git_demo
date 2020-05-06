import {sp} from "@pnp/sp";
import { Items } from "@pnp/sp/items/types";

export function _fetchListData() {
    

      sp.web.lists.getByTitle('CDNDemo').items.select('CustomerID','Modified').get().then((response:any[])=>{
          return response;
      });

   
}