const ids = document.querySelector('.id');

const users = fetch('https://jsonplaceholder.typicode.com/users/1/albums')
    .then(res => res.json())
    .then(val => {
        val.forEach(element => {
            ids.innerHTML += `id: ${element.id}, title: ${element.title}<br>`;
        });
    });