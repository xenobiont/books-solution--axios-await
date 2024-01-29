Напишите код, который работает так:

1. Пользователь заполняет форму и нажав Submit - добавляет книгу в базу данных, отправив AJAX-запрос методом POST по адресу:
   "http://books.danit.com.ua/books" объект вида:
   {
   "name": "Book name",
   "author": "Books author",
   "isbn": "Book isbn"
   }
   Запрос требует авторизации на 'http://books.danit.com.ua' с помощью заголовка "Authorization", со значением
   "Bearer token". token возьмите из localstorage, сохраненный там из предыдущего задания.
   Если добавление прошло успешно, вы получите в качестве ответа объект вида:
   {
   "id": 12,
   "name": "Book name",
   "author": "Books author",
   "isbn": "Book isbn"
   }
   Где id - уникальный номер книги в базе данных, который можно использовать
   для ее редактирования и удаления.

Если token авторизации неправильный, вы получите ответ вида:
{
"status": "Error",
"message": "You are not authorized"
}
\*/
