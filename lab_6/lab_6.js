const fetchButton = document.getElementById('fetch-button');
const userContainer = document.getElementById('user-container');

fetchButton.addEventListener('click', function() {
    userContainer.textContent = 'Loading...';

    fetch("https://randomuser.me/api/")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const user = data.results[0];

            const userInfo = ` 
                 <img src="${user.picture.large}" alt="Фото користувача">
                <p>Місто: ${user.location.city}</p>
                <p>Країна: ${user.location.country}</p>
                <p>Ім'я: ${user.name.first} ${user.name.last}</p>
                <p>Поштовий індекс: ${user.location.postcode}</p>
            `;
            userContainer.innerHTML = userInfo;
        })
        .catch(error => {
            userContainer.textContent = "Помилка: " + error.message;
        });
});