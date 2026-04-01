const lista = document.getElementById("lista-posts");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
        const primerosCinco = posts.slice(0,5);
        primerosCinco.forEach((post) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <strong>${post.title}</strong><br>${post.body}`;
            lista.appendChild(li);
        });
    })
    .catch((error) => {
        lista.innerHTML = `<li style="color:red">Error al cargar los datos.</li>`;
        console.error(error)
    })

    /* 
    paso a paso:
    creamos un archivo html con una lista vacía(<ul></ul>)
    usamos fetch() para traer los datos
    mostramos titel y body de los primeros 5 usuarios
    si hay error, mostramos un mensaje
    */