// HaliSoft Project Database
const projects = [
    {
        name: "CameraScan Pro",
        tagline: "Best PDF Scanner App 2026",
        description: "CameraScan Pro is a high-performance document scanning application. Quickly scan, edit, and convert documents into high-quality PDF files with AI edge detection.",
        features: ["Fast document scanning", "AI auto edge detection", "Image enhancement (HD)", "Secure offline storage"],
        link: "#", // Replace with your Play Store Link
        screenshots: [
            "screenshots/camerascan_main.png.jpeg",
            "screenshots/camerascan_main.png (2).jpeg",
            "screenshots/camerascan_main.png (3).jpeg",
            "screenshots/camerascan_main.png (4).jpeg",
            "screenshots/camerascan_main.png (5).jpeg"
        ]
    }
];

function loadHaliSoftProjects() {
    const list = document.getElementById('project-list');
    if(!list) return;

    projects.forEach((app, appIdx) => {
        const featuresHTML = app.features.map(f => `<li>✔ ${f}</li>`).join('');
        const thumbsHTML = app.screenshots.map(s => `
            <img src="${s}" class="thumb" onclick="swap(this, 'view-${appIdx}')">
        `).join('');

        list.innerHTML += `
            <div class="project-card">
                <div class="project-info">
                    <h3>${app.name}</h3>
                    <p class="tagline"><strong>${app.tagline}</strong></p>
                    <p>${app.description}</p>
                    <ul style="list-style:none; margin:20px 0;">${featuresHTML}</ul>
                    <a href="${app.link}" class="btn">Download on Play Store</a>
                </div>
                <div class="gallery-container">
                    <img src="${app.screenshots[0]}" id="view-${appIdx}" class="main-img">
                    <div class="thumb-bar">${thumbsHTML}</div>
                </div>
            </div>
        `;
    });
}

function swap(el, targetId) {
    document.getElementById(targetId).src = el.src;
}

document.addEventListener('DOMContentLoaded', loadHaliSoftProjects);