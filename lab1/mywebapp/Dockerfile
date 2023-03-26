# використовуємо офіційний образ nginx
FROM nginx

# копіюємо нашу статичну HTML-сторінку в папку /usr/share/nginx/html всередині контейнера
COPY public /usr/share/nginx/html

# вказуємо, який порт має бути доступний нашому контейнеру
EXPOSE 80
