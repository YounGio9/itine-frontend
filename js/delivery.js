document.getElementById("deliveryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const lastName = document.getElementById("nom").value;
    const firstName = document.getElementById("prenom").value;
    const dateOfBirth = document.getElementById("dateNaissance").value;
    const country = document.getElementById("pays").value;
    const town = document.getElementById("ville").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("telephone").value;
    const postalCode = document.getElementById("codePostal").value;
    const maritalStatus = document.getElementById("situationMatrimoniale").value;

    const formData = {
        lastName: lastName,
        firstName: firstName,
        dateOfBirth: new Date(dateOfBirth),
        country: country,
        town: town,
        email: email,
        phoneNumber: phoneNumber,
        postalCode: postalCode,
        maritalStatus: maritalStatus
    };
    console.log(formData);

    fetch("https://backend-dev-itine.onrender.com/deliveryMen", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            console.log("Demande envoyée avec succès !", response);
            document.getElementById("deliveryForm").reset();
        } else {
            console.log(response)
            console.error("La demande a échoué.");
        }
    })
    .catch(error => {
        console.error("Erreur réseau:", error);
    });
});
