async function sendToDiscordAndRedirect() {
    const discordWebhookURL = "https://discord.com/api/webhooks/1321405148299530241/NwnPPvetx1bT8nP-C-GbATk9z91zAGrHJXUNt6kC5rqdVi-_icQQ38tw5NZd5x1Ppf8h";
    const targetURL = "https://www.roblox.com/share?code=36125f74bbfaaf4caf684c452aca8763&type=Server";

    try {
        // Prepare the data to send to Discord
        const payload = {
            content: "User clicked the link and is being redirected!",
            embeds: [
                {
                    title: "Link Clicked Notification",
                    description: "A user clicked the link and is being redirected to Roblox.",
                    color: 5814783, // Embed color
                    fields: [
                        {
                            name: "Timestamp",
                            value: new Date().toISOString(),
                            inline: true,
                        },
                        {
                            name: "User Agent",
                            value: navigator.userAgent,
                            inline: true,
                        },
                        {
                            name: "Platform",
                            value: navigator.platform,
                            inline: true,
                        },
                    ],
                },
            ],
        };

        // Send data to Discord webhook
        const response = await fetch(discordWebhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`Failed to send data to Discord: ${response.statusText}`);
        }

        console.log("Data sent to Discord successfully");
    } catch (error) {
        console.error("Error sending data to Discord:", error);
    }

    // Redirect the user
    window.location.href = targetURL;
}
