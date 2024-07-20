const express=require('express');
const mailer=require('nodemailer');
const app_email=express();
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tuyentdph23684@fpt.edu.vn',
        pass: 'gjlx ncrb vezm mqsh'
    }
});

let mailOption={
    from: 'tuyentdph23684@fpt.edu.vn',
    to: 'trantuyen962k3@gmail.com',
    subject: 'tesssssssss gui mail',
    text: 'Day la email gui test'
};
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
app_email.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});