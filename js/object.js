var person= {
    firstName = "Lydia",
    lastName = "Tosin",
    language = "Swahili",
    };
    Object.defineProperty(person, "language", {value:"No"})
    document.getElementById("demo").innerHTML = person.language;

    
