document.addEventListener("DOMContentLoaded", async () => {
    const userData = await getUserData();

    if (userData) {
        document.getElementById(
            "username"
        ).innerText = `Welcome, ${userData.fullName}`;

        document.getElementById("imageProfileLogo").src =
            userData.imageProfilePath;
    } else {
        localStorage.removeItem("api-token");
        window.location.href = "./account/sign-in.html";
    }
});

function postContent() {
    const textarea = document.querySelector(".post-section textarea");
    const content = textarea.value.trim();

    if (!content) {
        alert("Please write something to post.");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post-header");

    const username = document.createElement("span");
    username.classList.add("username");
    username.innerText = "You";

    const postTime = document.createElement("span");
    postTime.classList.add("post-time");
    postTime.innerText = "Just Now";

    postHeader.appendChild(username);
    postHeader.appendChild(postTime);

    const postContent = document.createElement("p");
    postContent.classList.add("post-content");
    postContent.innerText = content;

    const postActions = document.createElement("div");
    postActions.classList.add("post-actions");

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn");
    likeBtn.innerText = "Like";
    likeBtn.onclick = function () {
        likeBtn.classList.toggle("liked");
        likeBtn.innerText = likeBtn.classList.contains("liked")
            ? "Unlike"
            : "Like";
    };

    postActions.appendChild(likeBtn);

    post.appendChild(postHeader);
    post.appendChild(postContent);
    post.appendChild(postActions);

    document.getElementById("post-list").prepend(post);

    textarea.value = "";
}

function handleLogout() {
    localStorage.removeItem("api-token");
    window.location.href = "./account/sign-in.html";
}
