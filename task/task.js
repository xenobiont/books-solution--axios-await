import axios from 'axios';
// Your code here
const tBody = document.getElementById('book-list');
// const token = localStorage.getItem('token');
const request = axios.create({
	headers: {
		Authorization: `Bearer cbae528dd9a0`, // cbae528dd9a0
	},
});

const formAddBook = document.getElementById('add-book-form');
formAddBook.addEventListener('submit', async function(e) {
	e.preventDefault();

	try {
		const name = this.querySelector("[name='book-name']").value;
		const author = this.querySelector("[name='book-author']").value;
		const isbn = this.querySelector("[name='book-isbn']").value;

		const { data } = await request.post('https://books.danit.com.ua/books', {
			name,
			author,
			isbn,
		});
		console.log(data);

		if (data.id) {
			const newBook = `
        <tr data-id=${data.id}>
        <td>${data.name}</td>
        <td>${data.author}</td>
        <td>${data.isbn}</td>
        <td><a href="#" class="btn btn-info btn-sm"><i class="fas fa-edit"></i></a></td>
        <td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>
        </tr>`;
			tBody.insertAdjacentHTML('beforeend', newBook);
		} else {
			this.insertAdjacentHTML('afterend', `<p>${data.message}</p>`);
		}
	} catch (e) {
		console.log(e);
	}
});

/*
2. Если пользователь нажимает крестик в таблице - база данных удаляется. 
Для этого нужно отправить DELETE запрос на адрес:
"books.danit.com.ua/books/:id" с указанием id удаляемой книги. 
Запрос требует авторизации с помощью заголовка "Authorization", 
со значением "Bearer token". token возьмите из localstorage, сохраненный 
там из предыдущего задания.

Если запрос удался, то вы получаете ответ вида: 
{
    "status": "Success"
}

Если token авторизации неправильный, вы получите ответа вида: 
{
    "status": "Error",
    "message": "You are not authorized"
}
Если все прошло успешно, в качестве ответа вы получите 
*/

// const delBtns = document.querySelector('.btn-danger.delete');
/* tBody.addEventListener('click', handleClick);

function handleClick(e) {
	e.preventDefault();
	if (e.target.classList.contains('btn-delete')) {
		deleterBook(e.target);
	} else if (e.target.classList.contains('fa-edit')) {
		// editBook( e.target);
	}
}

async function deleterBook(elem) {
	const bookRow = elem.closest('tr');
	const { id } = bookRow.dataset;
	// const id = bookRow.dataset.id;
	const response = await fetch(`http://books.danit.com.ua/books/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	const { status } = await response.json();
	if (status === 'Success') {
		bookRow.remove();
	}
} */

/*
3. Обновление. Для обновления пользователь должен нажать на иконку с классом btn-info, и вместо текста в таблице появятся поля ввода. По нажатию Unpdate отпраляется AJAX-запрос методом PUT по адресу: "books.danit.com.ua/books/:id". А теле запроса вы передаете объект вида:
{
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}
Если запрос прошел удачно,в качестве ответа вы получите объект вида:
{
    "id: 12,
    "name": "Book name new",
    "author": "Books author new ",
    "isbn": "Book isbn new"
}
С обновлеными данными

*/
