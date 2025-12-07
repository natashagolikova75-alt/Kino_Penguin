let tg = window.Telegram.WebApp;
tg.expand();

// Данные фильмов (в реальном проекте это бы приходило с сервера)
const filmsData = [
    {
        id: 1,
        title: "Дюна: Часть вторая",
        title_original: "Dune: Part Two",
        genre: "Фантастика, Боевик, Драма",
        description: "Продолжение эпической саги о Полу Атрейдесе, который объединяется с Фрименами для войны против Империи",
        duration: 166,
        year: 2024,
        rating: 8.7,
        age_rating: "12+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/1318972.jpg",
        sessions: [
            {date: "2025-12-07", time: "18:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 700, seats: 45},
            {date: "2025-12-07", time: "21:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 32},
            {date: "2025-12-08", time: "14:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 650, seats: 28}
        ]
    },
    {
        id: 2,
        title: "Оппенгеймер",
        title_original: "Oppenheimer",
        genre: "Биография, Драма, История",
        description: "История американского учёного, руководившего разработкой первой атомной бомбы",
        duration: 180,
        year: 2023,
        rating: 8.3,
        age_rating: "16+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/1394261.jpg",
        sessions: [
            {date: "2025-12-07", time: "15:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 68},
            {date: "2025-12-08", time: "19:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 42}
        ]
    },
    {
        id: 3,
        title: "Барби",
        title_original: "Barbie",
        genre: "Фэнтези, Комедия, Приключения",
        description: "Кукла Барби отправляется в реальный мир в поисках счастья",
        duration: 114,
        year: 2023,
        rating: 7.0,
        age_rating: "12+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/1394515.jpg",
        sessions: [
            {date: "2025-12-07", time: "12:00", hall: "Зал 4 (2D)", type: "2D", price: 400, seats: 55},
            {date: "2025-12-08", time: "17:30", hall: "Зал 4 (2D)", type: "2D", price: 400, seats: 38}
        ]
    },
    {
        id: 4,
        title: "Бедные-несчастные",
        title_original: "Poor Things",
        genre: "Фэнтези, Комедия, Драма",
        description: "Молодая женщина, воскрешённая гениальным ученым, отправляется в безумное приключение",
        duration: 141,
        year: 2023,
        rating: 8.2,
        age_rating: "18+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/4932087.jpg",
        sessions: [
            {date: "2025-12-07", time: "20:45", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 18},
            {date: "2025-12-08", time: "21:00", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 15}
        ]
    },
    {
        id: 5,
        title: "Годзилла и Конг: Новая империя",
        title_original: "Godzilla x Kong: The New Empire",
        genre: "Боевик, Фантастика",
        description: "Годзилла и Конг объединяются против новой угрозы, скрывающейся в недрах Земли",
        duration: 115,
        year: 2024,
        rating: 6.3,
        age_rating: "12+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/1395093.jpg",
        sessions: [
            {date: "2025-12-08", time: "12:15", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 42},
            {date: "2025-12-08", time: "19:45", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 36}
        ]
    },
    {
        id: 6,
        title: "Наполеон",
        title_original: "Napoleon",
        genre: "Биография, Драма, Военный",
        description: "Эпическое кино, рассказывающее о взлете и падении французского императора Наполеона Бонапарта",
        duration: 158,
        year: 2023,
        rating: 6.4,
        age_rating: "16+",
        poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/1316619.jpg",
        sessions: [
            {date: "2025-12-09", time: "11:45", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 48},
            {date: "2025-12-09", time: "19:30", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 32}
        ]
    }
];

// Информация о кинотеатре
const cinemaInfo = {
    name: "Kino Penguin",
    address: "г. Москва, ул. Тверская, д. 15, ТРЦ 'Плаза'",
    phone: "+7 (495) 123-45-67",
    email: "info@kinopenguin.ru",
    website: "https://kinopenguin.ru",
    booking_url: "https://kinopenguin.ru/booking",
    transport: {
        metro: ["Тверская", "Пушкинская", "Чеховская"],
        buses: ["№ 12", "№ 15", "№ 101"],
        parking: "Подземный паркинг ТРЦ 'Плаза' (2 часа бесплатно)"
    },
    working_hours: {
        weekdays: "10:00-00:00",
        friday_saturday: "10:00-02:00",
        sunday: "10:00-00:00"
    }
};

function searchFilms() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    let filteredFilms = filmsData.filter(film => {
        // Поиск по названию
        const matchesSearch = film.title.toLowerCase().includes(searchTerm) || 
                            (film.title_original && film.title_original.toLowerCase().includes(searchTerm));
        
        // Фильтр по жанру
        const matchesGenre = !genreFilter || film.genre.includes(genreFilter);
        
        // Фильтр по дате
        let matchesDate = true;
        if (dateFilter === 'today') {
            matchesDate = film.sessions.some(session => session.date === getTodayDate());
        } else if (dateFilter === 'tomorrow') {
            matchesDate = film.sessions.some(session => session.date === getTomorrowDate());
        }
        
        // Фильтр по цене
        let matchesPrice = true;
        if (priceFilter === 'budget') {
            matchesPrice = film.sessions.some(session => session.price <= 400);
        } else if (priceFilter === 'medium') {
            matchesPrice = film.sessions.some(session => session.price > 400 && session.price <= 600);
        } else if (priceFilter === 'premium') {
            matchesPrice = film.sessions.some(session => session.price > 600);
        }
        
        return matchesSearch && matchesGenre && matchesDate && matchesPrice;
    });
    
    displayResults(filteredFilms);
}

function applyFilters() {
    searchFilms();
}

function showTodaySessions() {
    document.getElementById('dateFilter').value = 'today';
    searchFilms();
}

function showNewFilms() {
    let newFilms = filmsData.filter(film => film.year >= 2024);
    displayResults(newFilms);
}

function showBestFilms() {
    let bestFilms = filmsData.filter(film => film.rating >= 8.0);
    displayResults(bestFilms);
}

function displayResults(films) {
    const resultsDiv = document.getElementById('results');
    
    if (films.length === 0) {
        resultsDiv.innerHTML = '<div class="no-results">🎬 Фильмы не найдены</div>';
        return;
    }
    
    resultsDiv.innerHTML = films.map(film => `
        <div class="film-card">
            <div class="film-header">
                <div class="film-title">🎬 ${film.title}</div>
                <div class="film-rating">⭐ ${film.rating}/10</div>
            </div>
            
            <div class="film-meta">
                <span class="film-genre">${film.genre}</span>
                <span class="film-duration">⏱️ ${film.duration} мин.</span>
                <span class="film-age">${film.age_rating}</span>
                <span class="film-year">📅 ${film.year}</span>
            </div>
            
            <div class="film-description">${film.description}</div>
            
            <div class="film-sessions">
                <div class="sessions-title">📅 Ближайшие сеансы:</div>
                ${film.sessions.slice(0, 3).map(session => `
                    <div class="session-item">
                        <span class="session-date">${formatDate(session.date)}</span>
                        <span class="session-time">${session.time}</span>
                        <span class="session-hall">${session.hall}</span>
                        <span class="session-price">💰 ${session.price} руб.</span>
                        <span class="session-seats">🎫 ${session.seats} мест</span>
                        <button class="book-btn" onclick="bookTicket(${film.id}, '${session.date}', '${session.time}')">
                            🎟️ Купить
                        </button>
                    </div>
                `).join('')}
            </div>
            
            ${film.title_original ? `<div class="film-original">🇺🇸 ${film.title_original}</div>` : ''}
        </div>
    `).join('');
}

function bookTicket(filmId, date, time) {
    const film = filmsData.find(f => f.id === filmId);
    const session = film.sessions.find(s => s.date === date && s.time === time);
    
    // В реальном проекте здесь был бы переход на страницу бронирования
    alert(`Бронирование билета:\n\n🎬 Фильм: ${film.title}\n📅 Дата: ${formatDate(date)}\n⏰ Время: ${time}\n🎪 Зал: ${session.hall}\n💰 Цена: ${session.price} руб.\n\nДля завершения бронирования перейдите на сайт кинотеатра.`);
    
    // Открываем ссылку на бронирование
    window.open(cinemaInfo.booking_url, '_blank');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}.${month}`;
}

function getTodayDate() {
    const today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
}

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return `${tomorrow.getFullYear()}-${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}-${tomorrow.getDate().toString().padStart(2, '0')}`;
}

// Показываем все фильмы при загрузке
displayResults(filmsData);

// Инициализация Telegram Web App
if (tg.initDataUnsafe.user) {
    console.log("Пользователь Telegram:", tg.initDataUnsafe.user);
}