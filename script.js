const projects = [
    {
        title: "Detection of Vulnerabilities Using Kali Linux",
        description: "Analysis of vulnerabilities in a simulated environment.",
        tags: ["Kali Linux", "VirtualBox"],
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
        title: "Market Presence of Zomato - Power BI",
        description: "Interactive dashboard analyzing orders & trends.",
        tags: ["Power BI", "Excel"],
        demo: "#",
        github: "#"
    },
    {
        title: "Netflix Clone (React Movie App)",
        description: "Built a Netflix clone using React with real-time movie data, search functionality, and trailer playback, deployed on Netlify.",
        tags: ["React.js", "Vite","Axios" , "TMDB API", "Netlify","CSS","JavaScript (ES6+)"],
        demo: "https://mali-movies-app.netlify.app/",
        github: "https://mali-movies-app.netlify.app/"
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
