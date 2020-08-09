const name = "Hasan";
const age  = 18;
const job  = "Student"
const phone = 01746330554;
const city = "Chapai Nawabgonj";
const favoriteColor = "white";
const favoriteFootbolTeam = "Argentina";
const favoriteCricketTeam = "Australia";
function hello(){
    return "Hello"
}
let html;


html = `
     <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>Phone: ${phone}</li>
        <li>City: ${city}</li>
        <li>Favorite Color: ${favoriteColor}</li>
        <li>Favorite Footbol Team: ${favoriteFootbolTeam}</li>
        <li>Favorite Cricket Team: ${favoriteCricketTeam}</li>
        <li>Function: ${hello}</li>
     </ul>
`
document.body.innerHTML = html;
