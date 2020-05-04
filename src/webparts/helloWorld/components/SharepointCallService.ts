import { sp } from "@pnp/sp-commonjs";
import { SPFetchClient } from "@pnp/nodejs-commonjs";

 export function FetchAPIDemo():void {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("{https://kks811.sharepoint.com/sites/SharepointFrameworkDevelopment/}", "{4a4eccbe-8b11-47f0-ad43-1332b84243c2}", "{+zFWdL7hhTm626FhJNtO16ReVw9uBnmMgpbd2195XXo=}");
            },
        },
    });
    
    // make a call to SharePoint and log it in the console
    sp.web.select("Title", "Description").get().then(w => {
        console.log(JSON.stringify(w, null, 4));
    });
}
