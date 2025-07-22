const tabsContainer = document.getElementById("tabs");
const postsContainer = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error("fail fetching -_-");
    return response.json();
  })
  .then((users) => {
    users.forEach((user) => {
      const tab = document.createElement("div");
      tab.className = "tab";
      tab.textContent = user.username;
      tab.dataset.userid = user.id;

      tab.addEventListener("click", () => {
        document
          .querySelectorAll(".tab")
          .forEach((tab) => tab.classList.remove("active"));
        tab.classList.add("active");
        loadPosts(user.id);
      });

      tabsContainer.appendChild(tab);
    });
  })
  .catch((error) => {
    tabsContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
  });

async function loadPosts(userId) {
  postsContainer.innerHTML = "Loading...";
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) {
      throw new Error("fail fetching -_-");
    }
    const posts = await res.json();
    if (posts.length === 0) {
      postsContainer.innerHTML = `no posts found`;
    } else {
      console.log(posts);
      postsContainer.innerHTML = posts
        .map(
          (post) => `<div class="post-card">
            <h3 id="${post.id}" class="posts-card">Post #${post.id}</h3>
            <p>${post.title}</p>
            <p class="post-body">${post.body}</p>
          </div>`
        )
        .join("");
    }
  } catch (err) {
    postsContainer.innerHTML = `<p style="color:red;">${err.message}</p>`;
  }
}
