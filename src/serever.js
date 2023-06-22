const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.listen(3002, () => console.log("Server Running...in 2sc"));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: "naseerushaik26@gmail.com",
    pass: "password",
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Done!!! Now You Can Send Your Form By Nodemailer");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.tel;
  const message = req.body.message;

  const mail = {
    from: name,
    to: "naseerushaik26@gmail.com",
    subject: "ContactUs Form Submission",
    html: `
      <p style="color: blue;">Name: ${name}</p>
      <p style="color: green;">Email: ${email}</p>
      <p style="color: red;">Contact Number: ${tel}</p>
      <p style="color: black;">Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.json({ status: "Error occurred while sending feedback" });
    } else {
      res.json({ status: "Thanks for contacting us. We appreciate your feedback." });
    }
  });
});
