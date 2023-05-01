# Создать приложение удовлетворяющее следующим требованиям:

## Основная часть задания:

✅  1. Приложение должно быть реализовано на стеке React, Redux, Typescript 

✅ 2. Бекэнд должен быть реализован с помощью Strapi Admin Panel https://strapi.io/, документации для быстрого старта: https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html

✅ 3. В React проекте создать страницы логина и регистрации с полями: 1. username, 2. email, 3. password, также страницу каталога товаров и страницу корзины пользователя

✅ 4. В Strapi Admin Panel посмотреть документацию по авторизации пользователей https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html,

✅ 5. В Strapi Admin Panel создать Collection Type “Product” с полями ID (UID), Title (Text), Image (Media), Price (Digit). В Collection Type “User” добавить поле Cart с компонентом Products и relation на Collection “Product”.

✅ 6. В React проекте создать необходимые компоненты для страницы каталога продуктов (карточку продукта, окно просмотра инфо о продукте, кнопки добавления и удаления продукта из корзины).

✅ 7. В React проекте прописать взаимодействие со Strapi Admin Panel со следующим функционалом: register, login, get cart, add to cart, remove from cart, get products, get product by ID

## Необязательные пункты:

✅ . В Strapi Admin Panel поставить плагин вебсокета https://market.strapi.io/plugins/strapi-plugin-io, и прописать необходимый функционал для работы вебсокета (отправку данных клиенту при изменении коллекции в админке)

✅ 9. В React проекте прописать логику подключения к сокету и обработки евентов приходящих от него.

✅ ❌ 10. Cоздать манифест и ServiceWorker для приложения и проверить их работу в Chrome DevTools. В ServiceWorker реализовать логику: кешируем только GET запросы, при этом каждый запрос сверяем с кешем, если изменения есть то кеш обновляем

<br>

## Данные для входа

1. Email - `test@test.test`
2. Password - `testTEST1`


## Запуск клиентской части

1. `cd ./frontend`
2. `npm install`
3. `npm run start`

## Запуск серверной части

1. `cd ./backend`
2. `npm install`
3. `npm run start`

