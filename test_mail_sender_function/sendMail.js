const functions = require('firebase-functions');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'sender email',
        pass:'sender password'
    }
});
function sendMail() {
    var mailOptions = {
        from: "from email",
        to: "to email",
        subject: "Auto Generated Mail from Node_Mail_sender",
        text: "This is auto generated mail from node mail sender function from firebase functions."
    };
    transporter.sendMail(mailOptions, function(err) {
        if(err){
            console.log(err);
        }else{
            console.log("Node_Mail_sender : Success");
        }
    });
    return true;
}

sendMail();