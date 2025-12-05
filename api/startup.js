//starts up bot by running https://continental-kristan-dbhsdronescape1-9aacaa33.koyeb.app/
// using vercel

import { verifyKeyMiddleware } from "discord-interactions";

// Export default handler for Vercel
export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(200).send("OK");
    }

    // Verify Discord signature with your app's Public Key
    const middleware = verifyKeyMiddleware(process.env.PUBLIC_KEY);
    await new Promise((resolve, reject) => {
        middleware(req, res, (err) => (err ? reject(err) : resolve()));
    });

    const interaction = req.body;

    // Respond to Discord's validation PING
    if (interaction.type === 1) {
        return res.json({ type: 1 });
    }

    // Handle the /activate slash command
    if (interaction.type === 2 && interaction.data?.name === "activate") {
        // Immediate response to the user
        res.json({
            type: 4,
            data: { content: "Waking the bot…" }
        });

        // Wake your Koyeb app asynchronously
        fetch("https://continental-kristan-dbhsdronescape1-9aacaa33.koyeb.app/")
            .then(() => console.log("Pinged Koyeb wake URL"))
            .catch((err) => console.error("Ping failed:", err));
        return;
    }

    // Anything else
    return res.status(400).send("Unhandled interaction");
}
