document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("repo-list");
  const loading = document.getElementById("loading");

  fetch("./events.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to load repository data.");
      }
      return response.json();
    })
    .then((repositories) => {
      loading.remove();

      if (!repositories.length) {
        list.innerHTML = '<li class="empty">No starred repositories yet.</li>';
        return;
      }

      const items = repositories
        .map(
          (repo) => `
            <li class="repo-card">
              <a href="${repo.url}" target="_blank" rel="noreferrer">
                <h2>${repo.owner}/${repo.name}</h2>
                <p>${repo.description}</p>
                <div class="meta">
                  <span>${repo.language || "Various"}</span>
                  <span>⭐ ${repo.stars}</span>
                </div>
              </a>
            </li>
          `
        )
        .join("");

      list.innerHTML = items;
    })
    .catch((error) => {
      loading.textContent = "Unable to load starred repositories right now.";
      console.error(error);
    });
});

class ExampleThree {
  static get properties() {
    return {
      /**
       * name user
       * @default ''
       */
      userName: { type: String },
    };
  }


  constructor() {
    super();
    this.userName = 'juan';
  }
}