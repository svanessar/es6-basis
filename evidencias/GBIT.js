const axios = require('axios')

let config = {
    method:'get',
    url:"https://emojihub.herokuapp.com/api/all"

}

axios(config)
    .then((response)=>{
       return response.data.forEach(element => {
        console.log(`grupos:${element.group}`)
        console.log(`----------`)
       });
    })
    .catch((error)=>{
        console.log(error)
    })