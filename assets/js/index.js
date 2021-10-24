
function getCandidate(){
    fetch('http://103.116.104.148:4005/candidate?role=CANDIDATE',{
        method : "get", 
        headers : {
            authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTU3MzY0ZmNkM2M3ZTAwMmE0ZmE1ZTEiLCJpYXQiOjE2MzMxNTEzNTcsImV4cCI6MTYzNTc0MzM1N30.rKRIMfn1ucE8vqHGkUS9p0-vRQ0yWq2ehLhq595XYPM",
            "content-type" : "application/json; charset=utf-8"
        }
    })
    .then((response) => {
        response.json().then(value => console.log(value))
    })
}

getCandidate()


