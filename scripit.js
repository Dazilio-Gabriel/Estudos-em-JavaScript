const URL = 'https://dummyjson.com/products'; 

async function chamarAPI(params) {
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json;
        console.log(obj);
    }    
}

chamarAPI();