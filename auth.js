const { google } = require('googleapis');
const path = require('path');

async function authenticate() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, 'credentials.json'),
            scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
        });
        console.log("auth.js: ##✅ Google OAuth authentication successful.");
        return auth;
    } catch (error) {
        console.error("auth.js: ##ERROR: Google OAuth authentication failed:", error);
        return null;
    }
}

// Correctly exporting authenticate
module.exports = authenticate;
