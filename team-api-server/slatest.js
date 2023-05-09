
import { run } from "apipecker";

function myUrlBuilder(userId){
    return "http://localhost:8080/api/v1/teams";
}

function myRequestBuilder(userId){

    var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGFuIjoiYmFzZSIsImlhdCI6MjUxNjIzOTAyMn0.XJkos82JC4NI4l9d6NehKYbt-TWi5Gu7S1M8NIzHKCc";

    var requestConfig = {
        options : {
            method: "GET",
            headers: {
                'Authorization': 'Bearer '+jwt
            }
        }
    }

    return requestConfig;
}

function myResultsHandler(results){
    console.log("Test result:");
    console.log(JSON.stringify(results.lotStats,null,2));
    console.log(JSON.stringify(results.summary,null,2));
}

console.log("Executing test...");

run({
    concurrentUsers : 1,
    iterations : 10,
    delay : 10,
    verbose : true,
    urlBuilder: myUrlBuilder,
    requestBuilder : myRequestBuilder,
    resultsHandler : myResultsHandler
});