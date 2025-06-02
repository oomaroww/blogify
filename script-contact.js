// js/script-contact.js - JavaScript для валидации формы контактов

// Ожидаем полной загрузки DOM перед выполнением скрипта
document.addEventListener('DOMContentLoaded', function() {
    console.log("Скрипт валидации формы контактов загружен!");

    const contactForm = document.getElementById('contactForm');
    const contactNameInput = document.getElementById('contact-name');
    const contactEmailInput = document.getElementById('contact-email');
    const contactMessageTextarea = document.getElementById('contact-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            let isValid = true; // Флаг для отслеживания общей валидности формы

            // Функция для показа/скрытия ошибки
            function showError(element, errorSpan, message) {
                errorSpan.textContent = message;
                errorSpan.style.display = 'block'; // Показать сообщение
                element.classList.add('is-invalid'); // Добавить класс Bootstrap для стиля ошибки
                isValid = false;
            }

            function hideError(element, errorSpan) {
                errorSpan.textContent = '';
                errorSpan.style.display = 'none'; // Скрыть сообщение
                element.classList.remove('is-invalid'); // Удалить класс ошибки
            }

            // Валидация имени
            if (contactNameInput.value.trim() === '') {
                showError(contactNameInput, nameError, 'Имя не может быть пустым.');
            } else if (contactNameInput.value.trim().length < 3) {
                showError(contactNameInput, nameError, 'Имя должно содержать минимум 3 символа.');
            } else if (!contactNameInput.checkValidity()) { // Проверяем на соответствие pattern
                showError(contactNameInput, nameError, 'Имя может содержать только буквы, пробелы и дефисы.');
            }
            else {
                hideError(contactNameInput, nameError);
            }

            // Валидация Email
            if (contactEmailInput.value.trim() === '') {
                showError(contactEmailInput, emailError, 'Email не может быть пустым.');
            } else if (!contactEmailInput.checkValidity()) { // Проверяем встроенную валидацию email
                showError(contactEmailInput, emailError, 'Пожалуйста, введите корректный Email адрес.');
            } else {
                hideError(contactEmailInput, emailError);
            }

            // Валидация сообщения
            if (contactMessageTextarea.value.trim() === '') {
                showError(contactMessageTextarea, messageError, 'Сообщение не может быть пустым.');
            } else if (contactMessageTextarea.value.trim().length < 10) {
                showError(contactMessageTextarea, messageError, 'Сообщение должно быть не менее 10 символов.');
            } else {
                hideError(contactMessageTextarea, messageError);
            }

            // Если форма валидна, можно отправить данные (имитация)
            if (isValid) {
                formFeedback.classList.remove('d-none', 'alert-danger');
                formFeedback.classList.add('alert', 'alert-success');
                formFeedback.textContent = 'Сообщение успешно отправлено! Спасибо.';
                contactForm.reset(); // Очистить форму
                // Здесь будет AJAX-запрос на сервер для реальной отправки данных
                console.log('Форма отправлена:', {
                    name: contactNameInput.value.trim(),
                    email: contactEmailInput.value.trim(),
                    message: contactMessageTextarea.value.trim()
                });
            } else {
                formFeedback.classList.remove('d-none', 'alert-success');
                formFeedback.classList.add('alert', 'alert-danger');
                formFeedback.textContent = 'Пожалуйста, исправьте ошибки в форме.';
            }
        });
    }
});
