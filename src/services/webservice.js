

const siteUrl = "http://192.168.43.81:8006"; //staging


export default function graphQLRequest(variables, method, apiMethod, token, id) {
    console.log("variables=====>>>>",variables)
    console.log("method=====>>>>",method)
    console.log("apiMethod=====>>>>",apiMethod)
  

    var init = apiMethod == "GET" ? {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            // 'Content-Type': "text/html",
            // "Authorization": token ? token : '',
            "Accept": "application/json"

        }
    } :
        {
         method: apiMethod,
            headers: {
                'Content-Type': "application/json",
                // 'Content-Type': "text/html",
                // "Authorization": token ? token : '',
                "Accept": "application/json"

            },
            body: JSON.stringify(variables)
        }

    return fetch(siteUrl + method, init)
        .then(res => res.json()
            .then(data => {
                var apiData = {
                    status: res.status,
                    data: data
                }
                console.log("ApiData=====>>>>", init)
                return apiData;
            }))
        .catch(err => {
            console.log("err=========" + err)
            var apiData = {
                status: 900,
                data: "Please check your internet connection."
            }
            return apiData
        });
};
