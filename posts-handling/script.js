var posts = JSON.parse(localStorage.getItem('posts')) || [
    { id: 101, title: 'Daily Js News.' },
    { id: 102, title: 'Daily Java News.' },
    { id: 103, title: 'Daily Python News.' },
    { id: 104, title: 'Daily Js News.' }
];

function renderTable() {
    const tableBody = document.querySelector("#posts-table tbody");
    tableBody.innerHTML = "";
    posts.forEach(post => {
        let row = `<tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

if (document.querySelector("#posts-table")) {
    renderTable();
}

var submitBtn = document.querySelector("#submit")

submitBtn.addEventListener("click", function (events) {
    events.preventDefault();
    var id = document.querySelector("#id").value;
    var title = document.querySelector("#title").value;
    posts.push({ id: parseInt(id), title: title });
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html"; 
});