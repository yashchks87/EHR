const nodeMailer = require('nodeMailer');
var transporter = nodeMailer.createTransport({
  service : 'Godaddy',
  host : 'smtpout.secureserver.net',
  secureConnection : true,
  port : 465,
  auth : {
    user : 'developer@choksiyash.com',
    pass : 'Meganfox16'
  }
});

module.exports = {
  sender : function(mailObject){
    console.log(mailObject);
    const mailOptions = {
      from : 'developer@choksiyash.com',
      to : mailObject.toEmail,
      subject : mailObject.Subject,
      html : `To activate your account please press this<a href=${mailObject.url}/${mailObject.randomString}>Link</a>.`
    }
    transporter
      .sendMail(mailOptions)
      .then(()=>console.log("Mail Sent"))
      .catch(err=>console.log(err));
  }
}
