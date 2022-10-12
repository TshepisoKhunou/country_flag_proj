
var data = []

async function search(){
    const countryName = document.getElementById('input').value

    try {
        const severData = await fetch('https://restcountries.com/v3.1/name/' + countryName)
        data = await severData.json()
        

    } catch (error) {
        console.log(error);
    }
   
}




// fetch("https://restcountries.com/v3.1/name/ + countryName")
// .then(res => res.json())