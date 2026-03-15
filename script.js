const projects = [
    {
        title: "Market Presence of Zomato - Power BI",
        description: "Interactive dashboard analyzing orders & trends.",
        tags: ["Power BI", "Excel"],
        demo: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "Responsive portfolio created using HTML & CSS.",
        tags: ["HTML", "CSS"],
        demo: "https://sakurdoll.github.io/portfolio/",
        github: "https://sakuradoll.github.io/portfolio/"
    },
    {
        title: "Detection of Vulnerabilities Using Kali Linux",
        description: "Analysis of vulnerabilities in a simulated environment.",
        tags: ["Kali Linux", "VirtualBox"],
        demo: "#",
        github: "#"
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