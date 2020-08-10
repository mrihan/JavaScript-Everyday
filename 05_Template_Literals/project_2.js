const name = "Rihan";
const age = 28;
const job = "Developer";
const city = "Rajshahi";
let html;

// with template string (es6)

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>city: ${city}</li>
    </ul>
`;

document.body.innerHTML = html;
