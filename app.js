// Kino Penguin - Веб-приложение для кинотеатра
// 30 фильмов в прокате, все кнопки работают

// ========== ДАННЫЕ 30 ФИЛЬМОВ ==========
const filmsData = [
    {
        id: 1,
        title: "Дюна: Часть вторая",
        title_original: "Dune: Part Two",
        genre: "Фантастика, Боевик, Драма",
        description: "Продолжение эпической саги о Поле Атрейдесе, который объединяется с Фрименами для войны против Империи. Визуальный шедевр с потрясающими спецэффектами.",
        duration: 166,
        year: 2024,
        rating: 8.7,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-07", time: "18:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 700, seats: 45},
            {date: "2025-12-07", time: "21:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 32}
        ]
    },
    {
        id: 2,
        title: "Оппенгеймер",
        title_original: "Oppenheimer",
        genre: "Биография, Драма, История",
        description: "История американского учёного, руководившего разработкой первой атомной бомбы. Оскароносный фильм Кристофера Нолана.",
        duration: 180,
        year: 2023,
        rating: 8.3,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-07", time: "15:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 68}
        ]
    },
    {
        id: 3,
        title: "Барби",
        title_original: "Barbie",
        genre: "Фэнтези, Комедия, Приключения",
        description: "Кукла Барби отправляется в реальный мир в поисках счастья. Яркий, красочный фильм с социальным подтекстом.",
        duration: 114,
        year: 2023,
        rating: 7.0,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-07", time: "12:00", hall: "Зал 4 (2D)", type: "2D", price: 400, seats: 55}
        ]
    },
    {
        id: 4,
        title: "Бедные-несчастные",
        title_original: "Poor Things",
        genre: "Фэнтези, Комедия, Драма",
        description: "Молодая женщина, воскрешённая гениальным ученым, отправляется в безумное приключение. Сюрреалистическая комедия.",
        duration: 141,
        year: 2023,
        rating: 8.2,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-07", time: "20:45", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 18}
        ]
    },
    {
        id: 5,
        title: "Годзилла и Конг: Новая империя",
        title_original: "Godzilla x Kong: The New Empire",
        genre: "Боевик, Фантастика",
        description: "Годзилла и Конг объединяются против новой угрозы. Масштабные баталии и потрясающая графика.",
        duration: 115,
        year: 2024,
        rating: 6.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-08", time: "12:15", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 42}
        ]
    },
    {
        id: 6,
        title: "Наполеон",
        title_original: "Napoleon",
        genre: "Биография, Драма, Военный",
        description: "Эпическое кино о взлете и падении французского императора Наполеона Бонапарта.",
        duration: 158,
        year: 2023,
        rating: 6.4,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-09", time: "11:45", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 48}
        ]
    },
    {
        id: 7,
        title: "Майор Гром: Игра",
        title_original: null,
        genre: "Боевик, Криминал",
        description: "Игорь Гром вступает в противостояние с загадочным преступником, известным как Учитель.",
        duration: 137,
        year: 2024,
        rating: 6.8,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-07", time: "13:00", hall: "Зал 2 (3D)", type: "3D", price: 500, seats: 65}
        ]
    },
    {
        id: 8,
        title: "Человек-паук: Паутина вселенных",
        title_original: "Spider-Man: Across the Spider-Verse",
        genre: "Мультфильм, Боевик, Приключения",
        description: "Майлз Моралес отправляется в путешествие по мультивселенной.",
        duration: 140,
        year: 2023,
        rating: 8.7,
        age_rating: "6+",
        sessions: [
            {date: "2025-12-07", time: "11:00", hall: "Зал 4 (2D)", type: "2D", price: 380, seats: 70}
        ]
    },
    {
        id: 9,
        title: "Вонка",
        title_original: "Wonka",
        genre: "Мюзикл, Фэнтези, Комедия",
        description: "История о том, как молодой Вилли Вонка стал величайшим шоколатье в мире.",
        duration: 116,
        year: 2023,
        rating: 7.2,
        age_rating: "6+",
        sessions: [
            {date: "2025-12-08", time: "14:00", hall: "Зал 3 (2D)", type: "2D", price: 400, seats: 60}
        ]
    },
    {
        id: 10,
        title: "Оставь мир позади",
        title_original: "Leave the World Behind",
        genre: "Триллер, Драма",
        description: "Отдых семьи прерывается кибератакой и появлением незнакомцев.",
        duration: 141,
        year: 2023,
        rating: 6.5,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-08", time: "21:00", hall: "Зал 4 (2D)", type: "2D", price: 450, seats: 40}
        ]
    },
    {
        id: 11,
        title: "Миссия невыполнима: Смертельная расплата",
        title_original: "Mission: Impossible - Dead Reckoning Part One",
        genre: "Боевик, Триллер",
        description: "Итан Хант и его команда должны найти новое опасное оружие.",
        duration: 163,
        year: 2023,
        rating: 7.8,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-09", time: "19:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 650, seats: 55}
        ]
    },
    {
        id: 12,
        title: "Стражи Галактики: Часть 3",
        title_original: "Guardians of the Galaxy Vol. 3",
        genre: "Фантастика, Боевик, Комедия",
        description: "Стражи Галактики защищают вселенную и раскрывают тайны прошлого Ракеты.",
        duration: 150,
        year: 2023,
        rating: 8.0,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-09", time: "17:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 48}
        ]
    },
    {
        id: 13,
        title: "Джон Уик 4",
        title_original: "John Wick: Chapter 4",
        genre: "Боевик, Триллер",
        description: "Джон Уик обнаруживает путь к победе над Правлением Кланов.",
        duration: 169,
        year: 2023,
        rating: 7.8,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-10", time: "20:30", hall: "Зал 3 (2D)", type: "2D", price: 500, seats: 42}
        ]
    },
    {
        id: 14,
        title: "Трансформеры: Восхождение Звероботов",
        title_original: "Transformers: Rise of the Beasts",
        genre: "Фантастика, Боевик",
        description: "Автоботы и Максималы объединяются против новой угрозы из космоса.",
        duration: 127,
        year: 2023,
        rating: 6.1,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-10", time: "15:00", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 65}
        ]
    },
    {
        id: 15,
        title: "Круэлла",
        title_original: "Cruella",
        genre: "Комедия, Криминал",
        description: "История становления легендарной злодейки Круэллы де Виль.",
        duration: 134,
        year: 2021,
        rating: 7.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-10", time: "13:00", hall: "Зал 4 (2D)", type: "2D", price: 350, seats: 70}
        ]
    },
    {
        id: 16,
        title: "Джентльмены",
        title_original: "The Gentlemen",
        genre: "Боевик, Криминал, Комедия",
        description: "Американский наркобарон пытается продать свою лондонскую империю.",
        duration: 113,
        year: 2019,
        rating: 7.8,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-11", time: "19:00", hall: "Зал 3 (2D)", type: "2D", price: 400, seats: 45}
        ]
    },
    {
        id: 17,
        title: "Время",
        title_original: "Tenet",
        genre: "Боевик, Фантастика",
        description: "Секретный агент пытается предотвратить Третью мировую войну.",
        duration: 150,
        year: 2020,
        rating: 7.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-11", time: "21:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 600, seats: 38}
        ]
    },
    {
        id: 18,
        title: "Аватар: Путь воды",
        title_original: "Avatar: The Way of Water",
        genre: "Фантастика, Приключения",
        description: "Джейк Салли и Нейтири защищают свой дом и семью от новой угрозы.",
        duration: 192,
        year: 2022,
        rating: 7.6,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-11", time: "18:00", hall: "Зал 2 (3D)", type: "3D", price: 600, seats: 52}
        ]
    },
    {
        id: 19,
        title: "Топ Ган: Мэверик",
        title_original: "Top Gun: Maverick",
        genre: "Боевик, Драма",
        description: "Питер Мэверик возвращается в школу пилотов, чтобы тренировать новое поколение.",
        duration: 130,
        year: 2022,
        rating: 8.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-12", time: "16:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 650, seats: 60}
        ]
    },
    {
        id: 20,
        title: "Человек-муравей и Оса: Квантомания",
        title_original: "Ant-Man and the Wasp: Quantumania",
        genre: "Фантастика, Боевик, Комедия",
        description: "Скотт Лэнг и его семья отправляются в квантовый мир.",
        duration: 125,
        year: 2023,
        rating: 6.1,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-12", time: "14:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 55}
        ]
    },
    {
        id: 21,
        title: "Чёрная Пантера: Ваканда навеки",
        title_original: "Black Panther: Wakanda Forever",
        genre: "Фантастика, Боевик",
        description: "Народ Ваканды борется за своё будущее после смерти короля ТЧаки.",
        duration: 161,
        year: 2022,
        rating: 6.7,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-12", time: "19:30", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 48}
        ]
    },
    {
        id: 22,
        title: "Доктор Стрэндж: В мультивселенной безумия",
        title_original: "Doctor Strange in the Multiverse of Madness",
        genre: "Фантастика, Боевик",
        description: "Доктор Стрэндж путешествует по мультивселенной с помощью Америки Чавес.",
        duration: 126,
        year: 2022,
        rating: 6.9,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-13", time: "15:00", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 62}
        ]
    },
    {
        id: 23,
        title: "Тор: Любовь и гром",
        title_original: "Thor: Love and Thunder",
        genre: "Фантастика, Боевик, Комедия",
        description: "Тор отправляется в путешествие к самопознанию вместе с Валькирией и Джейн Фостер.",
        duration: 119,
        year: 2022,
        rating: 6.2,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-13", time: "17:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 58}
        ]
    },
    {
        id: 24,
        title: "Вечные",
        title_original: "Eternals",
        genre: "Фантастика, Боевик",
        description: "Бессмертные существа, живущие на Земле тысячи лет, выходят из тени.",
        duration: 156,
        year: 2021,
        rating: 6.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-13", time: "20:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 50}
        ]
    },
    {
        id: 25,
        title: "Бэтмен",
        title_original: "The Batman",
        genre: "Боевик, Криминал, Драма",
        description: "Брюс Уэйн расследует серию убийств в Готэме и сталкивается с Загадочником.",
        duration: 176,
        year: 2022,
        rating: 7.8,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-14", time: "18:30", hall: "Зал 1 (IMAX)", type: "IMAX", price: 700, seats: 45}
        ]
    },
    {
        id: 26,
        title: "Форсаж 10",
        title_original: "Fast X",
        genre: "Боевик, Криминал",
        description: "Доминик Торетто и его семья сталкиваются с самым опасным врагом.",
        duration: 141,
        year: 2023,
        rating: 5.9,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-14", time: "21:00", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 65}
        ]
    },
    {
        id: 27,
        title: "Кот в сапогах: Последнее желание",
        title_original: "Puss in Boots: The Last Wish",
        genre: "Мультфильм, Приключения, Комедия",
        description: "Кот в сапогах отправляется на поиски Последнего Желания.",
        duration: 102,
        year: 2022,
        rating: 7.9,
        age_rating: "6+",
        sessions: [
            {date: "2025-12-14", time: "12:00", hall: "Зал 4 (2D)", type: "2D", price: 350, seats: 80}
        ]
    },
    {
        id: 28,
        title: "Астрал: Красная дверь",
        title_original: "Insidious: The Red Door",
        genre: "Ужасы",
        description: "Джош и его сын Далтон отправляются в путешествие в мир духов.",
        duration: 107,
        year: 2023,
        rating: 6.1,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-14", time: "22:00", hall: "Зал 5 (VIP)", type: "VIP", price: 600, seats: 30}
        ]
    },
    {
        id: 29,
        title: "Слэшер: Кровавая вечеринка",
        title_original: "Scream VI",
        genre: "Ужасы, Триллер",
        description: "Выжившие сестры переезжают в Нью-Йорк, где их преследует новый Призрачное лицо.",
        duration: 123,
        year: 2023,
        rating: 6.5,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-15", time: "20:30", hall: "Зал 5 (VIP)", type: "VIP", price: 650, seats: 25}
        ]
    },
    {
        id: 30,
        title: "Ночь страха",
        title_original: "Fear the Night",
        genre: "Ужасы, Триллер",
        description: "Группа женщин сталкивается с опасностью во время девичника в отдалённом доме.",
        duration: 90,
        year: 2023,
        rating: 5.8,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-15", time: "22:15", hall: "Зал 5 (VIP)", type: "VIP", price: 600, seats: 28}
        ]
    }
];

// ========== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ==========

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const weekdays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const weekday = weekdays[date.getDay()];
    return `${day}.${month} (${weekday})`;
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = (tomorrow.getMonth() + 1).toString().padStart(2, '0');
    const day = tomorrow.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isWeekend(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return day === 0 || day === 6;
}

// ========== ФУНКЦИИ ПОИСКА И ФИЛЬТРАЦИИ ==========

function searchFilms() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const genreFilter = document.getElementById('genreFilter').value;
    const dateFilter = document.getElementById('dateFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    let filteredFilms = filmsData.filter(film => {
        // Поиск по названию
        const titleMatch = film.title.toLowerCase().includes(searchTerm);
        const originalMatch = film.title_original && film.title_original.toLowerCase().includes(searchTerm);
        const matchesSearch = searchTerm === '' || titleMatch || originalMatch;
        
        // Фильтр по жанру
        const matchesGenre = !genreFilter || film.genre.includes(genreFilter);
        
        // Фильтр по дате
        let matchesDate = true;
        if (dateFilter !== 'all') {
            matchesDate = film.sessions.some(session => {
                if (dateFilter === 'today') {
                    return session.date === getTodayDate();
                } else if (dateFilter === 'tomorrow') {
                    return session.date === getTomorrowDate();
                } else if (dateFilter === 'weekend') {
                    return isWeekend(session.date);
                }
                return true;
            });
        }
        
        // Фильтр по цене
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            matchesPrice = film.sessions.some(session => {
                if (priceFilter === 'budget') {
                    return session.price <= 400;
                } else if (priceFilter === 'medium') {
                    return session.price > 400 && session.price <= 600;
                } else if (priceFilter === 'premium') {
                    return session.price > 600;
                }
                return true;
            });
        }
        
        return matchesSearch && matchesGenre && matchesDate && matchesPrice;
    });
    
    displayResults(filteredFilms);
}

function applyFilters() {
    searchFilms();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('dateFilter').value = 'today';
    document.getElementById('priceFilter').value = 'all';
    searchFilms();
}

function showTodaySessions() {
    document.getElementById('dateFilter').value = 'today';
    document.getElementById('genreFilter').value = '';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    searchFilms();
}

function showNewFilms() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('dateFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    
    const newFilms = filmsData.filter(film => film.year >= 2024);
    displayResults(newFilms);
}

function showBestFilms() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('dateFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    
    const bestFilms = filmsData.filter(film => film.rating >= 7.5);
    displayResults(bestFilms);
}

// ========== ОТОБРАЖЕНИЕ РЕЗУЛЬТАТОВ ==========

function displayResults(films) {
    const resultsDiv = document.getElementById('results');
    
    if (!resultsDiv) {
        console.error('Элемент results не найден!');
        return;
    }
    
    if (films.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <div style="font-size: 48px; margin-bottom: 15px;">🎬</div>
                <h3>Фильмы не найдены</h3>
                <p>Попробуйте изменить критерии поиска или выберите другую дату.</p>
                <button onclick="resetFilters()" style="margin-top: 15px; padding: 10px 20px; background: #2481cc; color: white; border: none; border-radius: 8px; cursor: pointer;">
                    Сбросить фильтры
                </button>
            </div>
        `;
        return;
    }
    
    resultsDiv.innerHTML = films.map(film => `
        <div class="film-card" data-id="${film.id}">
            <div class="film-header">
                <div class="film-title">🎬 ${film.title}</div>
                <div class="film-rating">⭐ ${film.rating}/10</div>
            </div>
            
            ${film.title_original ? `<div class="film-original">🇺🇸 ${film.title_original}</div>` : ''}
            
            <div class="film-meta">
                <span class="film-genre">${film.genre}</span>
                <span class="film-duration">⏱️ ${film.duration} мин.</span>
                <span class="film-age">${film.age_rating}</span>
                <span class="film-year">📅 ${film.year}</span>
            </div>
            
            <div class="film-description">
                ${film.description}
            </div>
            
            <div class="film-sessions">
                <div class="sessions-title">
                    📅 Ближайшие сеансы в Kino Penguin:
                </div>
                ${film.sessions.map(session => `
                    <div class="session-item">
                        <span class="session-date">${formatDate(session.date)}</span>
                        <span class="session-time">${session.time}</span>
                        <span class="session-hall">${session.hall}</span>
                        <span class="session-price">💰 ${session.price} руб.</span>
                        <span class="session-seats">🎫 ${session.seats} мест</span>
                        <button class="book-btn" onclick="bookTicket(${film.id}, '${session.date}', '${session.time}', ${session.price})">
                            🎟️ Купить билет
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// ========== ФУНКЦИИ БРОНИРОВАНИЯ ==========

function bookTicket(filmId, date, time, price) {
    const film = filmsData.find(f => f.id === filmId);
    const session = film.sessions.find(s => s.date === date && s.time === time);
    
    const bookingDetails = `
        🎬 <b>Бронирование билета</b>
        
        📝 <b>Фильм:</b> ${film.title}
        ${film.title_original ? `🌎 <b>Оригинальное название:</b> ${film.title_original}\n` : ''}
        📅 <b>Дата:</b> ${formatDate(date)}
        ⏰ <b>Время:</b> ${time}
        🎪 <b>Зал:</b> ${session.hall}
        💰 <b>Цена:</b> ${price} руб.
        🎫 <b>Свободных мест:</b> ${session.seats}
        
        Для завершения бронирования вы будете перенаправлены на официальный сайт кинотеатра.
    `;
    
    if (confirm(bookingDetails.replace(/<b>/g, '').replace(/<\/b>/g, ''))) {
        window.open('https://kinopenguin.ru/booking', '_blank');
        alert(`✅ Бронирование инициировано!\n\nФильм: ${film.title}\nДата: ${formatDate(date)}\nВремя: ${time}\n\nДля завершения бронирования следуйте инструкциям на сайте.`);
    }
}

// ========== НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ ==========

function setupEventListeners() {
    // Кнопка поиска
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', searchFilms);
    }
    
    // Кнопка применения фильтров
    const applyFiltersButton = document.getElementById('applyFiltersButton');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', applyFilters);
    }
    
    // Быстрые действия
    const todayBtn = document.getElementById('todayBtn');
    const newBtn = document.getElementById('newBtn');
    const bestBtn = document.getElementById('bestBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (todayBtn) todayBtn.addEventListener('click', showTodaySessions);
    if (newBtn) newBtn.addEventListener('click', showNewFilms);
    if (bestBtn) bestBtn.addEventListener('click', showBestFilms);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    
    // Поиск по Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchFilms();
            }
        });
    }
    
    // Автоматический поиск при изменении фильтров
    const genreFilter = document.getElementById('genreFilter');
    const dateFilter = document.getElementById('dateFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (genreFilter) genreFilter.addEventListener('change', searchFilms);
    if (dateFilter) dateFilter.addEventListener('change', searchFilms);
    if (priceFilter) priceFilter.addEventListener('change', searchFilms);
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

// Загружаем фильмы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐧 Kino Penguin Web App загружен!');
    
    // Настраиваем обработчики событий
    setupEventListeners();
    
    // Показываем фильмы
    displayResults(filmsData);
});

// Экспортируем функции для глобального доступа
window.searchFilms = searchFilms;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.showTodaySessions = showTodaySessions;
window.showNewFilms = showNewFilms;
window.showBestFilms = showBestFilms;
window.bookTicket = bookTicket;
