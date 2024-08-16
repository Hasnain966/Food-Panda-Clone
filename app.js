document.addEventListener('DOMContentLoaded', function() {
    const foodItems = [
        { name: 'Chicken Biryani', category: 'Lunch', price: '200 Rs', img: './pic/biryani.jpg' },
        { name: 'Burger', category: 'Fast Food', price: '150 Rs', img: './pic/burger.jpg' },
        { name: 'Small-Pizza', category: 'Fast Food', price: '250 Rs', img: './pic/pizza1.jpg' },
        { name: 'Medium-Pizza', category: 'Fast Food', price: '400 Rs', img: './pic/Mpizza.jpg' },
        { name: 'Large-Pizza', category: 'Fast Food', price: '750 Rs', img: './pic/Lpizza.jpg' },
        { name: 'Tea', category: 'Drinks', price: '50 Rs', img: './pic/tea.jpg' },
        { name: 'Fries', category: 'Fast Food', price: '100 Rs', img: './pic/fries.jpg' },
        { name: 'Karahi', category: 'Lunch', price: '500 Rs', img: './pic/karahi.jpg' },
        { name: 'Pulao', category: 'Lunch', price: '300 Rs', img: './pic/pulao.jpg' },
        { name: 'Juice', category: 'Drinks', price: '110 Rs', img: './pic/juice.jpg' },
        { name: 'BBQ', category: 'Fast Food', price: '180 Rs', img: './pic/Bar_BQ.jpg' },
        { name: 'Mango Juice', category: 'Drinks', price: '110 Rs', img: './pic/mango.jpg' },
        { name: 'Blueberry Juice', category: 'Drinks', price: '110 Rs', img: './pic/blueberry.jpg' },
        { name: 'Strawberry Juice', category: 'Drinks', price: '110 Rs', img: './pic/strawberry.jpg' },
        { name: 'Banana Juice', category: 'Drinks', price: '110 Rs', img: './pic/banana.jpg' },
        { name: 'Apple Juice', category: 'Drinks', price: '110 Rs', img: './pic/apple.jpg' },
        { name: 'Orange Juice', category: 'Drinks', price: '110 Rs', img: './pic/orange.jpg' },
        { name: 'Zinger Burger', category: 'Fast Food', price: '400 Rs', img: './pic/zinger.jpg' },
        { name: 'Club Sandwich', category: 'Fast Food', price: '430 Rs', img: './pic/club.jpg' },
        { name: 'Chicken Roll', category: 'Fast Food', price: '150 Rs', img: './pic/chicken-roll.jpg' },
        { name: 'Beef Roll', category: 'Fast Food', price: '150 Rs', img: './pic/beef-roll.jpg' },
        { name: 'Zinger Roll', category: 'Fast Food', price: '260 Rs', img: './pic/zingerRoll.jpg' },
        { name: 'White Rice', category: 'Lunch', price: '260 Rs', img: './pic/white-rice.jpg' },
        { name: 'Broast', category: 'Fast Food', price: '480 Rs', img: './pic/brost.jpg' },
        { name: 'Chicken Kabab', category: 'Fast Food', price: '50 Rs', img: './pic/chicken-kabab.jpg' },
        { name: 'Beef Kabab', category: 'Fast Food', price: '70 Rs', img: './pic/beef-kabab.jpg' },
        { name: 'Raita', category: 'Fast Food', price: '30 Rs', img: './pic/raita.jpg' },
        { name: 'Tikka Chest', category: 'Fast Food', price: '470 Rs', img: './pic/tikka-chestt.jpg' },
        { name: 'Tikka Leg', category: 'Fast Food', price: '450 Rs', img: './pic/tikka-leg.jpg' },
        { name: 'Pakola Juice', category: 'Drinks', price: '100 Rs', img: './pic/pakola.jpg' },
        { name: 'Chocolate Juice', category: 'Drinks', price: '110 Rs', img: './pic/chocolate.jpg' },
        { name: 'Paratha', category: 'Lunch', price: '40 Rs', img: './pic/paratha.jpg' },
        { name: 'Mayo Roll', category: 'Fast Food', price: '230 Rs', img: './pic/mayo-roll.jpg' },
        { name: 'Khaowsa', category: 'Lunch', price: '500 Rs', img: './pic/khaowsa.jpg' }
    ];

    function displayItems(category) {
        const foodContainer = document.getElementById('food-container');
        if (!foodContainer) return;
        foodContainer.innerHTML = '';
        const filteredItems = category === 'Home' ? foodItems : foodItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const foodDiv = document.createElement('div');
            foodDiv.classList.add('food-item');
            foodDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h1>${item.name}</h1>
                <h3>${item.price}</h3>
            `;
            foodContainer.appendChild(foodDiv);
        });
    }

    const homeButton = document.getElementById('home');
    if (homeButton) {
        homeButton.addEventListener('click', () => displayItems('Home'));
    }

    const lunchButton = document.getElementById('lunch');
    if (lunchButton) {
        lunchButton.addEventListener('click', () => displayItems('Lunch'));
    }

    const drinksButton = document.getElementById('drinks');
    if (drinksButton) {
        drinksButton.addEventListener('click', () => displayItems('Drinks'));
    }

    const fastFoodButton = document.getElementById('fastfood');
    if (fastFoodButton) {
        fastFoodButton.addEventListener('click', () => displayItems('Fast Food'));
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filteredItems = foodItems.filter(item => item.name.toLowerCase().includes(query));
            const foodContainer = document.getElementById('food-container');
            if (!foodContainer) return;
            foodContainer.innerHTML = '';
            
            filteredItems.forEach(item => {
                const foodDiv = document.createElement('div');
                foodDiv.classList.add('food-item');
                foodDiv.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                `;
                foodContainer.appendChild(foodDiv);
            });
        });
    }

    // Signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;

            if (username && password) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                alert('Signup successful! Now login.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                alert('All fields are required.');
            }
        });
    }

    // Login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');

            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to home page
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }

    // Initialize by displaying all items on Home
    displayItems('Home');
});
