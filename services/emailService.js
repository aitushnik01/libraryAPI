const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'isac17@ethereal.email', //replace me please
        pass: 'aHVqWNF7HqmCKfDGnc', //replace me please
    },
});

const sendEmailNotification = (book) => {
    const mailOptions = {
        from: 'isac17@ethereal.email', //replace me please
        to: 'isac17@ethereal.email', //replace me please
        subject: 'New Book Added',
        text: `A new book has been added:\n\nName: ${book.name}\nAuthor: ${book.author}\nPublish Year: ${book.publish_year}\nPages Count: ${book.pages_count}\nPrice: ${book.price}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendEmailNotification };
