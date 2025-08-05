const projectsSection = document.getElementById('projects-section');

const projects = [
  {
    name: 'Code Kenya',
    jobDescription: {
      company: 'Code Kenya',
      role: 'Web Dev',
      year: '2025',
    },
    description: {
      featured:
        "Interning at Code Kenya, as a web developer. I'm learning and building projects with HTML, CSS, JavaScript, and React.",
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'Ruby on rails', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: {
      featured: 'codekenya.png',
      detailed: 'codekenya.png',
    },
    liveUrl: 'https://www.codekenya.org/about-us',
    sourceCode: '',
  },
  {
    name: 'Usa Prospects Agent',
    jobDescription: {
      company: 'USAPP',
      role: 'Full Stack Dev',
      year: '2025',
    },
    description: {
      featured:
        'Integarating AI Workflows to automate tasks like college essay review, answer questions on the entire US college application process, and more.',
      detailed:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    languages: {
      featured: ['html', 'Ruby on rails', 'css', 'javascript'],
      detailed: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstrap'],
    },
    thumbnail: {
      featured: 'usapp.png',
      detailed: 'usapp.png',
    },
    liveUrl: 'https://www.usaprospectsagent.com/',
    sourceCode: '',
  },
];

// Dynamically create project cards
for (let i = 0; i < projects.length; i += 1) {
    const projectContainer = document.createElement('div');
    projectContainer.innerHTML = `
        <div class="project-snapshot ${i % 2 !== 0 ? 'odd' : ''}">
            <a href="#">
                <img src="assets/img/projects/${projects[i].thumbnail.featured}" alt=${projects[i].name} />
            </a>
        </div>
        <div class="project-content">
            <h2>${projects[i].name}</h2>
            <ul class="project-details">
                <li class="client-name">${projects[i].jobDescription.company}</li>
                <li class="role">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                    </svg>
                    ${projects[i].jobDescription.role}
                </li>
                <li class="yearlb">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                    </svg>
                    ${projects[i].jobDescription.year}
                </li>
            </ul>
            <p>${projects[i].description.featured}</p>
            <ul class="technologies-used">
                ${projects[i].languages.featured.map((language) => `<li>${language}</li>`).join('')}
            </ul>
            <button type="button" class="btn show-popup">
                see project
            </button>
        </div> `;
    projectContainer.classList.add('project-container', 'container');
    projectsSection.appendChild(projectContainer);
}

// Function to create and show the popup
function createPopup(position) {
    const popup = document.createElement('section');
    popup.id = 'project-popup';
    // Changed .popup-wrapper to .popup-container to match the CSS
    popup.innerHTML = `
        <div class="popup-container">
            <div class="popup-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#d7c6bc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke="#d7c6bc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="popup-snapshot">
                <img src="assets/img/projects/${projects[position].thumbnail.detailed}" alt="${projects[position].name}" />
            </div>
            <h2>${projects[position].name}</h2>
            <ul class="project-details">
                <li class="client-name">${projects[position].jobDescription.company}</li>
                <li class="role">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                    </svg>
                    ${projects[position].jobDescription.role}
                </li>
                <li class="yearlb">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#C1C7D0" />
                    </svg>
                    ${projects[position].jobDescription.year}
                </li>
            </ul>
            <p>${projects[position].description.detailed}</p>
            <ul class="popup-technologies">
                ${projects[position].languages.detailed.map((language) => `<li>${language}</li>`).join('')}
            </ul>
            <div class="popup-buttons">
                <a href="${projects[position].liveUrl}" target="_blank">
                    <button type="button" class="btn">
                        See Live
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#d7c6bc"/>
                        </svg>
                    </button>
                </a>
                <a href="${projects[position].sourceCode}" target="_blank">
                    <button type="button" class="btn">
                        See Source
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#d7c6bc"/>
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
    document.body.classList.add('no-scroll');
    popup.classList.add('active'); // This is the crucial line to make it visible

    // Add close event listener
    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
        body.classList.remove('no-scroll');
        // Optional: Remove the popup from the DOM after a short delay
        setTimeout(() => {
            if (document.body.contains(popup)) {
                document.body.removeChild(popup);
            }
        }, 500);
    });
}

// Get the "See Project" buttons after they have been created
const projectButtons = document.querySelectorAll('.project-content .btn.show-popup');
projectButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        createPopup(index);
    });
});
