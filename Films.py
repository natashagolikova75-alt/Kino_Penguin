import sqlite3
import telebot
from telebot import types
import random
from brain import brain  # Импортируем нейросеть

bot = telebot.TeleBot('8548268369:AAGDQCLfAWU3oF0xSSiB0nQgrRQIiRs-PfU')
conn = sqlite3.connect("C:/Users/natas/Desktop/Films.db", check_same_thread=False)
cursor = conn.cursor()

# Функции для работы с БД
def show_all_films(message):
    try:
        cursor.execute("SELECT id, title, genre FROM films WHERE is_active = 1")
        films = cursor.fetchall()
        
        if not films:
            bot.send_message(message.chat.id, "На данный момент фильмов в прокате нет")
            return
        
        keyboard = types.InlineKeyboardMarkup()
        for film in films:
            btn = types.InlineKeyboardButton(text=f"{film[1]} ({film[2]})", callback_data=f"film_{film[0]}")
            keyboard.add(btn)
        
        bot.send_message(message.chat.id, "🎬 Фильмы в прокате Kino Penguin:\n\nВыберите фильм для подробной информации:", reply_markup=keyboard)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке фильмов: {str(e)}")

def show_genre_categories(message):
    try:
        cursor.execute("SELECT DISTINCT genre FROM films WHERE is_active = 1")
        genres = cursor.fetchall()
        
        keyboard = types.InlineKeyboardMarkup(row_width=2)
        added_genres = set()
        for genre_row in genres:
            genres_list = genre_row[0].split(',')
            for genre in genres_list:
                genre = genre.strip()
                if genre and genre not in added_genres:
                    added_genres.add(genre)
                    btn = types.InlineKeyboardButton(text=genre, callback_data=f"genre_{genre}")
                    keyboard.add(btn)
        
        bot.send_message(message.chat.id, "🎭 Выберите жанр для подбора фильмов:", reply_markup=keyboard)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке жанров: {str(e)}")

def show_available_sessions(message):
    try:
        cursor.execute('''
            SELECT f.title, s.date, s.time, s.hall_name, s.hall_type, s.price_standard, s.available_seats
            FROM sessions s
            JOIN films f ON s.film_id = f.id
            WHERE s.date >= DATE('now')
            ORDER BY s.date, s.time
            LIMIT 10
        ''')
        sessions = cursor.fetchall()
        
        if not sessions:
            bot.send_message(message.chat.id, "На ближайшие дни сеансов нет")
            return
        
        response = "📅 Ближайшие сеансы в Kino Penguin:\n\n"
        for session in sessions:
            response += f"🎬 Фильм: {session[0]}\n"
            response += f"📆 Дата: {session[1]}\n"
            response += f"⏰ Время: {session[2]}\n"
            response += f"🎪 Зал: {session[3]} ({session[4]})\n"
            response += f"💰 Цена: {session[5]} руб.\n"
            response += f"🎫 Свободных мест: {session[6]}\n"
            response += "─" * 30 + "\n"
        
        bot.send_message(message.chat.id, response)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке сеансов: {str(e)}")

def show_cinema_info(message):
    try:
        cursor.execute("SELECT * FROM cinema_info WHERE id = 1")
        cinema = cursor.fetchone()
        
        if not cinema:
            # Если нет записи в базе, показываем стандартную информацию
            response = "🏢 Kino Penguin\n\n"
            response += "📍 Адрес: г. Москва, ул. Тверская, д. 15, ТРЦ 'Плаза'\n"
            response += "📞 Телефон: +7 (495) 123-45-67\n"
            response += "📧 Email: info@kinopenguin.ru\n"
            response += "🌐 Сайт: https://kinopenguin.ru\n"
            response += "🎟️ Бронирование: https://kinopenguin.ru/booking\n\n"
            response += "🚌 Как добраться:\n"
            response += "• Метро: 'Тверская', 'Пушкинская', 'Чеховская'\n"
            response += "• Автобусы: № 12, 15, 101 до ост. 'Тверская площадь'\n"
            response += "• Парковка: подземный паркинг ТРЦ 'Плаза'\n\n"
            response += "⏰ Часы работы:\n"
            response += "Пн-Чт: 10:00-00:00\nПт-Сб: 10:00-02:00\nВс: 10:00-00:00"
        else:
            response = f"🏢 {cinema[1]}\n\n"
            response += f"📍 Адрес: {cinema[2]}\n"
            if cinema[3]:
                response += f"📞 Телефон: {cinema[3]}\n"
            if cinema[4]:
                response += f"📧 Email: {cinema[4]}\n"
            response += f"🌐 Сайт: {cinema[5]}\n"
            response += f"🎟️ Бронирование: {cinema[6]}\n\n"
            response += f"🚌 Как добраться:\n{cinema[8]}\n\n"
            response += f"⏰ Часы работы:\n{cinema[9]}\n"
        
        bot.send_message(message.chat.id, response)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке информации о кинотеатре: {str(e)}")

def show_film_details(message, film_id):
    try:
        cursor.execute("SELECT * FROM films WHERE id = ?", (film_id,))
        film = cursor.fetchone()
        
        if not film:
            bot.send_message(message.chat.id, "Фильм не найден")
            return
        
        cursor.execute("PRAGMA table_info(films)")
        columns_info = cursor.fetchall()
        columns = [col[1] for col in columns_info]
        
        film_dict = {}
        for i, col_name in enumerate(columns):
            if i < len(film):
                film_dict[col_name] = film[i]
        
        response = f"🎬 {film_dict.get('title', 'Нет названия')}\n"
        
        if film_dict.get('title_original'):
            response += f"📝 Оригинальное название: {film_dict['title_original']}\n\n"
        
        if film_dict.get('description'):
            response += f"📋 Описание: {film_dict['description']}\n\n"
        
        if film_dict.get('genre'):
            response += f"🎭 Жанр: {film_dict['genre']}\n"
        
        if film_dict.get('duration_minutes'):
            response += f"⏱️ Продолжительность: {film_dict['duration_minutes']} мин.\n"
        
        if film_dict.get('release_year'):
            response += f"📅 Год выпуска: {film_dict['release_year']}\n"
        
        if film_dict.get('age_rating'):
            response += f"🔞 Возрастной рейтинг: {film_dict['age_rating']}\n"
        
        if film_dict.get('director'):
            response += f"🎬 Режиссер: {film_dict['director']}\n"
        
        if film_dict.get('cast'):
            response += f"⭐ В ролях: {film_dict['cast']}\n"
        
        if film_dict.get('rating'):
            response += f"🌟 Рейтинг: {film_dict['rating']}/10\n\n"
        
        cursor.execute('''
            SELECT date, time, hall_name, hall_type, price_standard, available_seats
            FROM sessions 
            WHERE film_id = ? AND date >= DATE('now')
            ORDER BY date, time
            LIMIT 3
        ''', (film_id,))
        sessions = cursor.fetchall()
        
        if sessions:
            response += "📅 Ближайшие сеансы в Kino Penguin:\n"
            for session in sessions:
                response += f"• {session[0]} {session[1]} - {session[2]} ({session[3]}) - {session[4]} руб. (мест: {session[5]})\n"
        else:
            response += "Ближайших сеансов нет\n"
        
        bot.send_message(message.chat.id, response)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке информации о фильме: {str(e)}")

def show_random_film_by_genre(message, genre):
    try:
        cursor.execute('''
            SELECT id, title, description, duration_minutes, rating
            FROM films 
            WHERE genre LIKE ? AND is_active = 1
        ''', (f'%{genre}%',))
        films = cursor.fetchall()
        
        if not films:
            bot.send_message(message.chat.id, f"Фильмы жанра '{genre}' не найдены")
            return
        
        film = random.choice(films)
        
        response = f"🎬 Фильм жанра '{genre}':\n\n"
        response += f"{film[1]}\n\n"
        if film[2]:
            description = film[2]
            if len(description) > 200:
                description = description[:200] + "..."
            response += f"📋 Описание: {description}\n\n"
        response += f"⏱️ Продолжительность: {film[3]} мин.\n"
        response += f"🌟 Рейтинг: {film[4]}/10\n\n"
        
        keyboard = types.InlineKeyboardMarkup()
        btn_more = types.InlineKeyboardButton(text="Подробнее", callback_data=f"film_{film[0]}")
        keyboard.add(btn_more)
        
        bot.send_message(message.chat.id, response, reply_markup=keyboard)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при поиске фильма: {str(e)}")

def show_help(message):
    help_text = """
🐧 Помощь по боту Kino Penguin:

Основные команды:
• /start - начать работу с ботом
• /help - показать эту справку

Меню:
• Все фильмы - посмотреть все фильмы в прокате
• По жанрам - подбор фильмов по жанрам
• Ближайшие сеансы - расписание сеансов
• Кинотеатр - информация о кинотеатре
• Помощь - эта справка

Вы также можете писать запросы текстом:
🎬 О фильмах:
  - "Какие фильмы идут?"
  - "Что показывают в кино?"
  - "Новинки кино"
  - "Боевики/Комедии/Драмы"

📅 О сеансах:
  - "Расписание на сегодня"
  - "Сеансы на завтра"
  - "Во сколько показывают фильм?"

💰 О билетах:
  - "Сколько стоят билеты?"
  - "Цены на билеты"
  - "Есть ли скидки?"

🏢 О кинотеатре:
  - "Адрес кинотеатра"
  - "Как добраться до Kino Penguin?"
  - "Телефон кинотеатра"
  - "Часы работы"

Напишите "Привет" для начала общения! 🎬
    """
    bot.send_message(message.chat.id, help_text)

def show_new_films(message):
    try:
        cursor.execute("SELECT id, title, description FROM films WHERE release_year >= 2024 AND is_active = 1 LIMIT 3")
        new_films = cursor.fetchall()
        
        if not new_films:
            bot.send_message(message.chat.id, "Новинки не найдены")
            return
        
        response = "🎉 Новинки проката в Kino Penguin:\n\n"
        for film in new_films:
            response += f"🎬 {film[1]}\n"
            if film[2]:
                description = film[2]
                if len(description) > 100:
                    description = description[:100] + "..."
                response += f"📋 {description}\n\n"
        
        bot.send_message(message.chat.id, response)
    except Exception as e:
        bot.send_message(message.chat.id, f"Ошибка при загрузке новинок: {str(e)}")

def show_prices_info(message):
    response = "💰 Информация о ценах в Kino Penguin:\n\n"
    response += "• Стандартный билет: 300-450 руб.\n"
    response += "• 3D сеансы: +100 руб. к стандартной цене\n"
    response += "• IMAX/VIP залы: 600-800 руб.\n\n"
    response += "🎫 Льготы и скидки:\n"
    response += "• Студенты: -10% (при предъявлении студенческого)\n"
    response += "• Пенсионеры: -15% (при предъявлении пенсионного)\n"
    response += "• Дети до 12 лет: -20%\n"
    response += "• Утренние сеансы (до 14:00): -15%\n\n"
    response += "🎁 Акции:\n"
    response += "• Вторник - день скидок (-20% на все сеансы)\n"
    response += "• Семейный билет (2 взрослых + 1 ребенок): -25%\n"
    response += "• Именинникам в день рождения: бесплатный попкорн\n"
    
    bot.send_message(message.chat.id, response)

def show_halls_info(message):
    response = "🎪 Залы Kino Penguin:\n\n"
    response += "🎬 Зал 1 (2D):\n"
    response += "• 150 мест, цифровая проекция\n"
    response += "• Dolby Digital звук\n\n"
    response += "🎬 Зал 2 (3D):\n"
    response += "• 120 мест, 3D проекция\n"
    response += "• RealD 3D, Dolby Atmos звук\n\n"
    response += "🎬 Зал 3 (IMAX):\n"
    response += "• 100 мест, IMAX с лазерной проекцией\n"
    response += "• 12-канальный звук, экран 20x12 м\n\n"
    response += "🎬 VIP Зал:\n"
    response += "• 30 мест, кожаные кресла с подогревом\n"
    response += "• Персональный сервис, меню ресторана\n\n"
    response += "🎬 Зал 4 (Комфорт):\n"
    response += "• 80 мест, увеличенное расстояние между рядами\n"
    response += "• Откидные столики для напитков"
    
    bot.send_message(message.chat.id, response)

def handle_menu_buttons(message):
    if message.text == 'Все фильмы':
        show_all_films(message)
    elif message.text == 'По жанрам':
        show_genre_categories(message)
    elif message.text == 'Ближайшие сеансы':
        show_available_sessions(message)
    elif message.text == 'Кинотеатр':
        show_cinema_info(message)
    elif message.text == 'Помощь':
        show_help(message)

# ОБРАБОТЧИК ТЕКСТОВЫХ СООБЩЕНИЙ С НЕЙРОСЕТЬЮ
@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    if message.text == "Привет" or message.text == "/start":
        bot.send_message(message.from_user.id, 
            f"🐧 Привет, {message.from_user.first_name}! Добро пожаловать в Kino Penguin!\n\n"
            "Я ваш помощник по выбору фильмов и покупке билетов. Чем могу помочь?")
        
        # Кнопки для быстрого доступа
        keyboard = types.InlineKeyboardMarkup(row_width=2)
        key_new = types.InlineKeyboardButton(text="🎬 Новинки", callback_data='new')     
        keyboard.add(key_new)
        key_action = types.InlineKeyboardButton(text="💥 Боевики", callback_data='Боевик')     
        keyboard.add(key_action)  
        key_comedy = types.InlineKeyboardButton(text="😂 Комедии", callback_data='Комедия')     
        keyboard.add(key_comedy) 
        key_drama = types.InlineKeyboardButton(text="🎭 Драмы", callback_data='Драма')     
        keyboard.add(key_drama) 
        key_fantasy = types.InlineKeyboardButton(text="🚀 Фантастика", callback_data='Фантастика')     
        keyboard.add(key_fantasy) 
        key_family = types.InlineKeyboardButton(text="👨‍👩‍👧‍👦 Семейные", callback_data='Семейный')     
        keyboard.add(key_family) 
        
        bot.send_message(message.from_user.id, text="🎯 Быстрый подбор фильмов по категориям:", reply_markup=keyboard)
        
        # Основное меню
        menu_keyboard = types.ReplyKeyboardMarkup(resize_keyboard=True)
        btn_films = types.KeyboardButton('🎬 Все фильмы')
        btn_genres = types.KeyboardButton('🎭 По жанрам')
        btn_sessions = types.KeyboardButton('📅 Ближайшие сеансы')
        btn_cinema = types.KeyboardButton('🏢 Кинотеатр')
        btn_help = types.KeyboardButton('❓ Помощь')
        menu_keyboard.add(btn_films, btn_genres)
        menu_keyboard.add(btn_sessions, btn_cinema)
        menu_keyboard.add(btn_help)
        
        bot.send_message(message.from_user.id, "👇 Или используйте меню внизу:", reply_markup=menu_keyboard)
        
    elif message.text == "/help":
        show_help(message)
    elif message.text in ['🎬 Все фильмы', '🎭 По жанрам', '📅 Ближайшие сеансы', '🏢 Кинотеатр', '❓ Помощь']:
        # Убираем эмодзи для обработки
        clean_text = message.text.replace('🎬 ', '').replace('🎭 ', '').replace('📅 ', '').replace('🏢 ', '').replace('❓ ', '')
        handle_menu_buttons(type('obj', (object,), {'chat': message.chat, 'text': clean_text})())
    else:
        # Используем нейросеть для распознавания намерения
        process_ai_message(message)

def process_ai_message(message):
    """Обработка текстовых сообщений через нейросеть"""
    intent, confidence = brain.predict(message.text.lower())
    
    print(f"[Kino Penguin] Пользователь: '{message.text}' | Намерение: {intent} | Уверенность: {confidence:.2f}")
    
    # Порог уверенности
    if confidence < 0.3:
        bot.send_message(message.chat.id, 
            "🐧 Извините, я не совсем понял ваш вопрос.\n"
            "Попробуйте переформулировать или воспользуйтесь кнопками меню ниже.")
        return
    
    # Обработка намерений
    if intent == "films":
        bot.send_message(message.chat.id, "🎬 Сейчас покажу все фильмы в прокате Kino Penguin...")
        show_all_films(message)
    
    elif intent == "genres":
        bot.send_message(message.chat.id, "🎭 Выберите интересующий жанр из списка:")
        show_genre_categories(message)
    
    elif intent == "tickets":
        show_prices_info(message)
    
    elif intent == "cinema_info":
        bot.send_message(message.chat.id, "🏢 Информация о кинотеатре Kino Penguin:")
        show_cinema_info(message)
    
    elif intent == "sessions":
        bot.send_message(message.chat.id, "📅 Сейчас покажу ближайшие сеансы...")
        show_available_sessions(message)
    
    elif intent == "help":
        show_help(message)
    
    elif intent == "prices":
        show_prices_info(message)
    
    elif intent == "halls":
        show_halls_info(message)
    
    elif intent == "small_talk":
        responses = [
            "🐧 Привет! Готов помочь с выбором фильма в Kino Penguin!",
            "🐧 Здравствуйте! Какие фильмы вас интересуют сегодня?",
            "🐧 Добрый день! Выбирайте лучшие фильмы у нас!",
            "🐧 Приветствую! Kino Penguin к вашим услугам!"
        ]
        bot.send_message(message.chat.id, random.choice(responses))
    
    else:
        bot.send_message(message.chat.id, 
            "🐧 Я еще учусь понимать такие запросы.\n"
            "Попробуйте использовать кнопки меню или напишите:\n"
            "- 'Фильмы', 'Расписание', 'Цены' или 'Адрес кинотеатра'")

# Обработчик инлайн кнопок
@bot.callback_query_handler(func=lambda call: True)
def callback_worker(call):
    if call.data == "new":
        show_new_films(call.message)
            
    elif call.data == "Боевик":
        show_random_film_by_genre(call.message, "Боевик")
    elif call.data == "Комедия":
        show_random_film_by_genre(call.message, "Комедия")
    elif call.data == "Драма":
        show_random_film_by_genre(call.message, "Драма")
    elif call.data == "Фантастика":
        show_random_film_by_genre(call.message, "Фантастика")
    elif call.data == "Семейный":
        cursor.execute('''
            SELECT id, title, description, duration_minutes, rating
            FROM films 
            WHERE (genre LIKE '%Семейный%' OR 
                   genre LIKE '%Приключения%' OR 
                   genre LIKE '%Мультфильм%' OR
                   genre LIKE '%Фэнтези%') 
                  AND is_active = 1
        ''')
        films = cursor.fetchall()
        
        if not films:
            bot.send_message(call.message.chat.id, "Семейные фильмы не найдены")
            return
        
        film = random.choice(films)
        
        response = f"👨‍👩‍👧‍👦 Семейный фильм в Kino Penguin:\n\n"
        response += f"🎬 {film[1]}\n\n"
        if film[2]:
            description = film[2]
            if len(description) > 200:
                description = description[:200] + "..."
            response += f"📋 Описание: {description}\n\n"
        response += f"⏱️ Продолжительность: {film[3]} мин.\n"
        response += f"🌟 Рейтинг: {film[4]}/10\n\n"
        
        keyboard = types.InlineKeyboardMarkup()
        btn_more = types.InlineKeyboardButton(text="🎬 Подробнее", callback_data=f"film_{film[0]}")
        keyboard.add(btn_more)
        
        bot.send_message(call.message.chat.id, response, reply_markup=keyboard)
    
    elif call.data.startswith('film_'):
        film_id = call.data.split('_')[1]
        show_film_details(call.message, film_id)
    elif call.data.startswith('genre_'):
        genre = call.data.split('_')[1]
        show_random_film_by_genre(call.message, genre)

bot.polling(none_stop=True, interval=0)