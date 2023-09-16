async function fetchApi(){
    let url = "https://codehelp-apis.vercel.app/api/get-blogs?page=1";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
}

fetchApi();