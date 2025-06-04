// js/script-contact.js - JavaScript для валидации формы контактов

// Ожидаем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    console.log("Скрипт валидации формы контактов загружен!");

    // Получаем ссылки на элементы формы и сообщения об ошибках
    const contactForm = document.getElementById('contactForm');
    const contactNameInput = document.getElementById('contact-name');
    const contactEmailInput = document.getElementById('contact-email');
    const contactMessageTextarea = document.getElementById('contact-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formFeedback = document.getElementById('form-feedback');

    // Проверяем, существует ли форма, прежде чем добавлять слушатель событий
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы, чтобы выполнить валидацию JS

            let isValid = true; // Флаг для отслеживания общей валидности формы

            // Вспомогательная функция для отображения сообщений об ошибках
            function showError(element, errorSpan, message) {
                errorSpan.textContent = message; // Устанавливаем текст ошибки
                errorSpan.style.display = 'block'; // Делаем сообщение видимым
                element.classList.add('is-invalid'); // Добавляем класс Bootstrap для стилизации поля как невалидного
                isValid = false; // Устанавливаем флаг валидности в false
            }

            // Вспомогательная функция для скрытия сообщений об ошибках
            function hideError(element, errorSpan) {
                errorSpan.textContent = ''; // Очищаем текст ошибки
                errorSpan.style.display = 'none'; // Скрываем сообщение
                element.classList.remove('is-invalid'); // Удаляем класс невалидного поля
            }

            // --- Валидация полей формы ---
            // Сначала скрываем все предыдущие ошибки и фидбек, чтобы начать с чистого листа
            hideError(contactNameInput, nameError);
            hideError(contactEmailInput, emailError);
            hideError(contactMessageTextarea, messageError);
            formFeedback.classList.add('d-none'); // Скрываем общий фидбек

            // Валидация имени:
            // 1. Проверка на пустоту
            // 2. Проверка на минимальную длину (3 символа)
            // 3. Проверка на соответствие паттерну (только буквы, пробелы, дефисы)
            if (contactNameInput.value.trim() === '') {
                showError(contactNameInput, nameError, 'Имя не может быть пустым.');
            } else if (contactNameInput.value.trim().length < 3) {
                showError(contactNameInput, nameError, 'Имя должно содержать минимум 3 символа.');
            } else if (!contactNameInput.checkValidity()) { // checkValidity() проверяет атрибут pattern
                showError(contactNameInput, nameError, 'Имя может содержать только буквы, пробелы и дефисы.');
            } else {
                // Если валидно, ничего не делаем, hideError уже вызван
            }

            // Валидация Email:
            // 1. Проверка на пустоту
            // 2. Проверка на корректность формата Email с помощью встроенной валидации браузера
            if (contactEmailInput.value.trim() === '') {
                showError(contactEmailInput, emailError, 'Email не может быть пустым.');
            } else if (!contactEmailInput.checkValidity()) { // checkValidity() использует тип input="email" для проверки
                showError(contactEmailInput, emailError, 'Пожалуйста, введите корректный Email адрес.');
            } else {
                // Если валидно, ничего не делаем
            }

            // Валидация сообщения:
            // 1. Проверка на пустоту
            // 2. Проверка на минимальную длину (10 символов)
            if (contactMessageTextarea.value.trim() === '') {
                showError(contactMessageTextarea, messageError, 'Сообщение не может быть пустым.');
            } else if (contactMessageTextarea.value.trim().length < 10) {
                showError(contactMessageTextarea, messageError, 'Сообщение должно быть не менее 10 символов.');
            } else {
                // Если валидно, ничего не делаем
            }

            // --- Обратная связь с пользователем после валидации формы ---

            // Если все поля валидны
            if (isValid) {
                // Показываем сообщение об успешной отправке
                formFeedback.classList.remove('d-none', 'alert-danger'); // Скрываем d-none и удаляем класс alert-danger
                formFeedback.classList.add('alert', 'alert-success'); // Добавляем классы Bootstrap для зеленого сообщения
                formFeedback.textContent = 'Сообщение успешно отправлено! Спасибо.';
                contactForm.reset(); // Очищаем все поля формы
                
                // В реальном приложении здесь был бы AJAX-запрос на сервер
                // console.log('Форма отправлена:', {
                //     name: contactNameInput.value.trim(),
                //     email: contactEmailInput.value.trim(),
                //     message: contactMessageTextarea.value.trim()
                // });
            } else {
                // Показываем сообщение об ошибках
                formFeedback.classList.remove('d-none', 'alert-success'); // Скрываем d-none и удаляем класс alert-success
                formFeedback.classList.add('alert', 'alert-danger'); // Добавляем классы Bootstrap для красного сообщения
                formFeedback.textContent = 'Пожалуйста, исправьте ошибки в форме.';
            }
        });
    }
});
