function addComment() {
    let commentInput = document.getElementById("comment-input");
    let commentList = document.getElementById("comments-list");

    if (commentInput.value.trim() !== "") {
        let newComment = document.createElement("li");
        newComment.classList.add("w-50" , "list-unstyled" , "bg-dark" , "text-white" , "p-2" , "text-center");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}
