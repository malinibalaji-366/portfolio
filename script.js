const projects = [
    {
        title: "Market Presence of Zomato - Power BI",
        description: "Interactive dashboard analyzing orders & trends.",
        tags: ["Power BI", "Excel"],
        demo: "https://github.com/malinibalaji-366/marketing-presence-of-zomato",
        github: "https://github.com/malinibalaji-366/marketing-presence-of-zomato"
    },
    {
        title: "Portfolio Website",
        description: "Responsive portfolio created using HTML & CSS.",
        tags: ["HTML", "CSS"],
        demo: "https://malinibalaji-366.github.io/portfolio/",
        github: "https://malinibalaji-366.github.io/portfolio/"
    },
    {
        title: "Detection of Vulnerabilities Using Kali Linux",
        description: "Analysis of vulnerabilities in a simulated environment.",
        tags: ["Kali Linux", "VirtualBox"],
        demo: "https://github.com/malinibalaji-366/vulnerability-detection-kali-linux.git",
        github: "https://github.com/malinibalaji-366/vulnerability-detection-kali-linux.git"
    }
];
function loadProjects() {
    const container = document.getElementById("project-list");
    if (!container) return;

    projects.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("project");

        div.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="skills-list">
                ${p.tags.map(t => `<span>${t}</span>`).join("")}
            </div>
            <a class="btn" href="${p.github}" target="_blank">View</a>
        `;

        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);