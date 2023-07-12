'use server'
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require('nodemailer')
console.log("here");
const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
    );
    
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });
    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if (err) {
            reject("Failed to create access token :(");
            }
            resolve(token);
        });
        });
    const transporter = nodemailer.createTransport({
        service: "gmail",
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL,
            accessToken,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });
    return transporter;
};

export async function sendEmail(emailOptions) {
    return new Promise(async (resolve) => {
        let emailTransporter = await createTransporter();
        emailTransporter.sendMail(emailOptions, function(error, info) {
            if(error) {
                resolve(400);
            } else {
                console.log("Success");
                resolve(200);
            }
        });
    })
    
}