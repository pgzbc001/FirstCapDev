import cds from '@sap/cds'
import { executeHttpRequest } from '@sap-cloud-sdk/http-client'

export default cds.service.impl(function(){
    this.after('CREATE', 'Master', async(data, req)=>{
        const payload = req?.req?.body
        await executeHttpRequest(
            {destinationName: 'CPI_DEST'},
            {
                method: 'POST',
                url: '/http/capcallcpi/test',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                data: JSON.stringify(payload)
            }
        )
    })
})