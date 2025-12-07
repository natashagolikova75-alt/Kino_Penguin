// Kino Penguin - Веб-приложение для кинотеатра
// Автоматически работает на GitHub Pages

// ========== ДАННЫЕ ФИЛЬМОВ ==========
const filmsData = [
    {
        id: 1,
        title: "Дюна: Часть вторая",
        title_original: "Dune: Part Two",
        genre: "Фантастика, Боевик, Драма",
        description: "Продолжение эпической саги о Поле Атрейдесе, который объединяется с Фрименами для войны против Империи. Визуальный шедевр с потрясающими спецэффектами и глубоким философским подтекстом.",
        duration: 166,
        year: 2024,
        rating: 8.7,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-07", time: "18:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 700, seats: 45},
            {date: "2025-12-07", time: "21:30", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 32},
            {date: "2025-12-08", time: "14:00", hall: "Зал 1 (IMAX)", type: "IMAX", price: 650, seats: 28},
            {date: "2025-12-08", time: "19:00", hall: "Зал 2 (3D)", type: "3D", price: 550, seats: 40}
        ]
    },
    {
        id: 2,
        title: "Оппенгеймер",
        title_original: "Oppenheimer",
        genre: "Биография, Драма, История",
        description: "История американского учёного, руководившего разработкой первой атомной бомбы. Оскароносный фильм с блистательной игрой Киллиана Мёрфи и режиссурой Кристофера Нолана.",
        duration: 180,
        year: 2023,
        rating: 8.3,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-07", time: "15:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 68},
            {date: "2025-12-08", time: "19:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 42},
            {date: "2025-12-09", time: "17:00", hall: "Зал 3 (2D)", type: "2D", price: 450, seats: 55}
        ]
    },
    {
        id: 3,
        title: "Барби",
        title_original: "Barbie",
        genre: "Фэнтези, Комедия, Приключения",
        description: "Кукла Барби отправляется в реальный мир в поисках счастья. Яркий, красочный фильм с социальным подтекстом и отличным юмором. Идеальный выбор для вечернего просмотра.",
        duration: 114,
        year: 2023,
        rating: 7.0,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-07", time: "12:00", hall: "Зал 4 (2D)", type: "2D", price: 400, seats: 55},
            {date: "2025-12-08", time: "17:30", hall: "Зал 4 (2D)", type: "2D", price: 400, seats: 38},
            {date: "2025-12-09", time: "14:30", hall: "Зал 4 (2D)", type: "2D", price: 350, seats: 60}
        ]
    },
    {
        id: 4,
        title: "Бедные-несчастные",
        title_original: "Poor Things",
        genre: "Фэнтези, Комедия, Драма",
        description: "Молодая женщина, воскрешённая гениальным ученым, отправляется в безумное приключение. Сюрреалистическая комедия с Эммой Стоун в главной роли. Лауреат многих кинонаград.",
        duration: 141,
        year: 2023,
        rating: 8.2,
        age_rating: "18+",
        sessions: [
            {date: "2025-12-07", time: "20:45", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 18},
            {date: "2025-12-08", time: "21:00", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 15},
            {date: "2025-12-09", time: "19:30", hall: "Зал 5 (VIP)", type: "VIP", price: 850, seats: 20}
        ]
    },
    {
        id: 5,
        title: "Годзилла и Конг: Новая империя",
        title_original: "Godzilla x Kong: The New Empire",
        genre: "Боевик, Фантастика",
        description: "Годзилла и Конг объединяются против новой угрозы, скрывающейся в недрах Земли. Масштабные баталии, потрясающая графика и захватывающий сюжет для любителей экшена.",
        duration: 115,
        year: 2024,
        rating: 6.3,
        age_rating: "12+",
        sessions: [
            {date: "2025-12-08", time: "12:15", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 42},
            {date: "2025-12-08", time: "19:45", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 36},
            {date: "2025-12-09", time: "16:00", hall: "Зал 6 (3D)", type: "3D", price: 550, seats: 48}
        ]
    },
    {
        id: 6,
        title: "Наполеон",
        title_original: "Napoleon",
        genre: "Биография, Драма, Военный",
        description: "Эпическое кино, рассказывающее о взлете и падении французского императора Наполеона Бонапарта. Грандиозные батальные сцены и глубокий психологический портрет исторической личности.",
        duration: 158,
        year: 2023,
        rating: 6.4,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-09", time: "11:45", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 48},
            {date: "2025-12-09", time: "19:30", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 32},
            {date: "2025-12-10", time: "15:00", hall: "Зал 7 (2D)", type: "2D", price: 420, seats: 55}
        ]
    },
    {
        id: 7,
        title: "Майор Гром: Игра",
        title_original: null,
        genre: "Боевик, Криминал",
        description: "Игорь Гром вступает в противостояние с загадочным преступником, известным как Учитель. Российский супергеройский боевик с качественными спецэффектами и динамичным сюжетом.",
        duration: 137,
        year: 2024,
        rating: 6.8,
        age_rating: "16+",
        sessions: [
            {date: "2025-12-07", time: "13:00", hall: "Зал 2 (3D)", type: "3D", price: 500, seats: 65},
            {date: "2025-12-08", time: "20:30", hall: "Зал 2 (3D)", type: "3D", price: 500, seats: 45},
            {date: "2025-12-09", time: "18:15", hall: "Зал 2 (3D)", type: "3D", price: 500, seats: 52}
        ]
    },
    {
        id: 8,
        title: "Человек-паук: Паутина вселенных",
        title_original: "Spider-Man: Across the Spider-Verse",
        genre: "Мультфильм, Боевик, Приключения",
        description: "Майлз Моралес отправляется в путешествие по мультивселенной, где встречает команду Людей-пауков. Визуальный прорыв в анимации, удостоенный множества наград.",
        duration: 140,
        year: 2023,
        rating: 8.7,
        age_rating: "6+",
        sessions: [
            {date: "2025-12-07", time: "11:00", hall: "Зал 4 (2D)", type: "2D", price: 380, seats: 70},
            {date: "2025-12-08", time: "16:00", hall: "Зал 4 (2D)", type: "2D", price: 380, seats: 58},
            {date: "2025-12-09", time: "12:30", hall: "Зал 4 (2D)", type: "2D", price: 350, seats: 65}
        ]
    }
];

// ========== ИНФОРМАЦИЯ О КИНОТЕАТРЕ ==========
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
        parking: "Подземный паркинг ТРЦ 'Плаза' (первые 2 часа бесплатно для зрителей)"
    },
    working_hours: {
        weekdays: "Пн-Чт: 10:00-00:00",
        friday_saturday: "Пт-Сб: 10:00-02:00",
        sunday: "Вс: 10:00-00:00"
    },
    prices: {
        standard: "300-450 руб.",
        "3d": "450-550 руб.",
        imax: "600-800 руб.",
        vip: "800-1000 руб."
    }
};

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
    
    console.log('Поиск фильмов:', { searchTerm, genreFilter, dateFilter, priceFilter });
    
    let filteredFilms = filmsData.filter(film => {
        // Поиск по названию (русскому и английскому)
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
    
    // Показываем количество найденных фильмов
    const resultsCount = document.getElementById('results');
    if (filteredFilms.length > 0) {
        console.log(`Найдено фильмов: ${filteredFilms.length}`);
    }
}

function applyFilters() {
    console.log('Применение фильтров');
    searchFilms();
}

function resetFilters() {
    console.log('Сброс фильтров');
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('dateFilter').value = 'today';
    document.getElementById('priceFilter').value = 'all';
    searchFilms();
}

function showTodaySessions() {
    console.log('Показ сеансов на сегодня');
    document.getElementById('dateFilter').value = 'today';
    document.getElementById('genreFilter').value = '';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('searchInput').value = '';
    searchFilms();
}

function showNewFilms() {
    console.log('Показ новинок');
    document.getElementById('searchInput').value = '';
    document.getElementById('genreFilter').value = '';
    document.getElementById('dateFilter').value = 'all';
    document.getElementById('priceFilter').value = 'all';
    
    const newFilms = filmsData.filter(film => film.year >= 2024);
    displayResults(newFilms);
}

function showBestFilms() {
    console.log('Показ лучших фильмов');
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
                ${film.sessions.slice(0, 3).map(session => `
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
    
    if (!session) {
        alert('Сеанс не найден!');
        return;
    }
    
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
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 15px; max-width: 400px; width: 90%;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #2481cc;">🎟️ Бронирование</h2>
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        style="background: none; border: none; font-size: 24px; cursor: pointer; color: #666;">
                    ×
                </button>
            </div>
            <div style="margin-bottom: 25px; line-height: 1.6;">
                ${bookingDetails.replace(/\n/g, '<br>')}
            </div>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button onclick="this.parentElement.parentElement.parentElement.remove()"
                        style="padding: 12px 24px; background: #f0f0f0; border: none; border-radius: 8px; cursor: pointer;">
                    Отмена
                </button>
                <button onclick="confirmBooking(${filmId}, '${date}', '${time}', ${price})"
                        style="padding: 12px 24px; background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%); 
                               color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
                    Перейти к оплате
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function confirmBooking(filmId, date, time, price) {
    const film = filmsData.find(f => f.id === filmId);
    
    // В реальном проекте здесь была бы интеграция с платежной системой
    // Для демо просто открываем сайт кинотеатра
    window.open(cinemaInfo.booking_url, '_blank');
    
    // Закрываем модальное окно
    document.querySelector('div[style*="position: fixed"]')?.remove();
    
    // Показываем сообщение об успехе
    setTimeout(() => {
        alert(`✅ Бронирование инициировано!\n\nФильм: ${film.title}\nДата: ${formatDate(date)}\nВремя: ${time}\n\nДля завершения бронирования следуйте инструкциям на сайте.`);
    }, 500);
}

// ========== НАСТРОЙКА ОБРАБОТЧИКОВ СОБЫТИЙ ==========

function setupEventListeners() {
    console.log('Настройка обработчиков событий...');
    
    // Кнопка поиска
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        console.log('Кнопка поиска найдена');
        searchButton.addEventListener('click', searchFilms);
    } else {
        console.error('Кнопка поиска не найдена!');
    }
    
    // Кнопка применения фильтров
    const applyFiltersButton = document.getElementById('applyFiltersButton');
    if (applyFiltersButton) {
        console.log('Кнопка применения фильтров найдена');
        applyFiltersButton.addEventListener('click', applyFilters);
    }
    
    // Кнопка "Сегодня в кино"
    const todayBtn = document.getElementById('todayBtn');
    if (todayBtn) {
        console.log('Кнопка "Сегодня в кино" найдена');
        todayBtn.addEventListener('click', showTodaySessions);
    }
    
    // Кнопка "Новинки"
    const newBtn = document.getElementById('newBtn');
    if (newBtn) {
        console.log('Кнопка "Новинки" найдена');
        newBtn.addEventListener('click', showNewFilms);
    }
    
    // Кнопка "Лучшие"
    const bestBtn = document.getElementById('bestBtn');
    if (bestBtn) {
        console.log('Кнопка "Лучшие" найдена');
        bestBtn.addEventListener('click', showBestFilms);
    }
    
    // Кнопка "Сбросить"
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        console.log('Кнопка "Сбросить" найдена');
        resetBtn.addEventListener('click', resetFilters);
    }
    
    // Поиск по Enter
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                console.log('Нажата клавиша Enter');
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
    
    console.log('Все обработчики событий настроены');
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========

// Загружаем фильмы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐧 Kino Penguin Web App загружен!');
    
    // Настраиваем обработчики событий
    setupEventListeners();
    
    // Показываем фильмы
    displayResults(filmsData);
    
    // Устанавливаем сегодняшнюю дату в фильтр по умолчанию
    const dateFilter = document.getElementById('dateFilter');
    if (dateFilter) {
        dateFilter.value = 'today';
    }
});

// Экспортируем функции для глобального доступа
window.searchFilms = searchFilms;
window.applyFilters = applyFilters;
window.resetFilters = resetFilters;
window.showTodaySessions = showTodaySessions;
window.showNewFilms = showNewFilms;
window.showBestFilms = showBestFilms;
window.bookTicket = bookTicket;
window.confirmBooking = confirmBooking;
