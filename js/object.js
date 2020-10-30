var person= {
    firstName = "Excellency",
    lastName = "Tosin",
    language = "Swahili",
    };
    Object.defineProperty(person, "language", {value:"light"})
    document.getElementById("demo").innerHTML = person.language;

    
