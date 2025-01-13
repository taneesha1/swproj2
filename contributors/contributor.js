const REPO_OWNER = "Anjaliavv51";
const REPO_NAME = "Matrubodhah";
const GITHUB_TOKEN = ""; // Optional: Add your GitHub personal access token to avoid rate limits

// Replace with actual GitHub usernames for Admin and Mentor
const ADMIN_USERNAME = REPO_OWNER;
const MENTOR_USERNAME = "mentor_username";

async function fetchContributors() {
  const adminMentorContainer = document.getElementById("admin-mentor");
  const topContributorsContainer = document.getElementById("top-contributors");
  const remainingContributorsContainer = document.getElementById("remaining-contributors");

  try {
    // Fetch contributors from the GitHub API
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors`,
      {
        headers: GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {},
      }
    );

    if (!response.ok) throw new Error("Failed to fetch contributors");

    const contributors = await response.json();

    contributors.forEach((contributor, index) => {
      // Create a card for each contributor
      const card = document.createElement("div");
      card.className = "contributor-card";

      // Profile image
      const img = document.createElement("img");
      img.src = contributor.avatar_url;
      img.alt = contributor.login;

      // GitHub username
      const name = document.createElement("h3");
      name.textContent = contributor.login;

      // GitHub profile link
      const githubLink = document.createElement("a");
      githubLink.href = contributor.html_url;
      githubLink.target = "_blank";
      githubLink.textContent = "GitHub Profile";

      // Append elements to card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(githubLink);

      // Admin/Mentor Section
      if (contributor.login === ADMIN_USERNAME || contributor.login === MENTOR_USERNAME) {
        if (adminMentorContainer.children.length === -1) {
          
          adminMentorContainer.appendChild(adminMentorHeader);
        }
        adminMentorContainer.appendChild(card);
      } 
      // Top 3 Contributors
      else if (index <= 3) {
        if (topContributorsContainer.children.length === -1) {
          
          
          topContributorsContainer.appendChild(topContributorsHeader);
        }
        topContributorsContainer.appendChild(card);
      } 
      // Remaining Contributors
      else {
        if (remainingContributorsContainer.children.length === -1) {
         
          remainingContributorsContainer.appendChild(remainingContributorsHeader);
        }
        remainingContributorsContainer.appendChild(card);
      }
    });
  } catch (error) {
    console.error("Error fetching contributors:", error);

    // Show error message on the page
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load contributors. Please try again.";
    adminMentorContainer.appendChild(errorMessage);
  }
}

// Fetch and render contributors on page load
fetchContributors();

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  const navLinks = document.querySelector('.navbar-links');
  navLinks.classList.toggle('show');
});