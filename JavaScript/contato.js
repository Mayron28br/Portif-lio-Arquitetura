const form = document.querySelector("form");
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const mess = document.getElementById("message")


function sendEmail() {
    const bodyMessage = `Nome Completo: ${fullName.value}<br> Email: ${email.value}<br> Telefone: ${phone.value}<br> Menssagem: ${mess.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mayronwilke28@gmail.com",
        Password : "C6EFD3BFBD77F7005A329AFEDCADC67A53BD",
        To : 'mayronwilke28@gmail.com',
        From : "mayronwilke28@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});