// 🦁 Import cette function
// import { prompt } from "./helper.js";

console.log("NODE-MAILER ™️");

// 🦁 Récupère le mail, l'objet et le message
let mail = await prompt("Entrez le mail du destinataire : ");
let objet = await prompt("Entrez l'objet de votre mail : ");
let message = await prompt("Entrez le message : ");

if (mail.length === 0 || objet.length === 0 || message.length === 0) {
  console.log("Erreur remplir tout les champs !");
} else {
  console.log(`The mail is sending... 
    To : < ${mail}, >
    Object : < ${objet}, >
    < ${message}, >`);
}

// 🦁 Affiche un log
// - Indiquant que le mail est en train d'être envoyé
// - Le mail du destinataire
// - L'objet du mail
// - Le message du mail
/*
console.log("The mail is sending... ");
console.log("To : <" + mail, ">");
console.log("Object : <" + objet, ">");
console.log("<" + message, ">");
*/
/*
console.log(`The mail is sending... 
To : < ${mail}, >
Object : < ${objet}, >
< ${message}, >`);
*/
