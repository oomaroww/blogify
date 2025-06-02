// script.js - Vanilla JavaScript

// Ожидаем полной загрузки DOM перед выполнением скрипта.
// ВЕСЬ ваш JavaScript-код должен находиться внутри этого слушателя.
document.addEventListener('DOMContentLoaded', function() {

    // 1. JavaScript Alerts: Вызываем alert по клику на кнопку
    const alertButton = document.getElementById('alertButton');
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            alert("Привет от Vanilla JavaScript!");
        });
    }

    // 2. Variables and Data Types & 3. Basic Operations
    let siteName = "Blogife"; // Строка (string)
    let currentYear = 2025; // Число (number)
    let isUserLoggedIn = false; // Булево значение (boolean)

    // Конкатенация строк
    let welcomeMessage = "Вы находитесь на сайте " + siteName + " в " + currentYear + " году.";
    console.log(welcomeMessage);

    // Базовые арифметические операции
    let postsPerDay = 5;
    let daysInWeek = 7;
    let postsPerWeek = postsPerDay * daysInWeek;
    console.log("Постов в неделю (примерно): " + postsPerWeek);

    let totalUsers = 103;
    let usersOnline = 10;
    let usersOffline = totalUsers - usersOnline;
    console.log("Пользователей оффлайн: " + usersOffline);

    let articles = 27;
    let categories = 5;
    let articlesModulo = articles % categories;
    console.log("Остаток статей после распределения по категориям: " + articlesModulo);


    // 4. Increment and Decrement
    let likeCounter = 10;
    likeCounter++; // Инкремент
    console.log("Счетчик лайков (после инкремента): " + likeCounter);
    likeCounter--; // Декремент
    console.log("Счетчик лайков (после декремента): " + likeCounter);

    // 5. Functions
    // Функция 1: Без параметров
    function displaySiteMotto() {
        const mottoElement = document.getElementById('site-motto');
        if (mottoElement) {
            mottoElement.textContent = "Blogife: Делитесь моментами, вдохновляйте историями!";
        } else {
            console.log("Элемент с ID 'site-motto' не найден для девиза.");
        }
    }
    displaySiteMotto(); // Вызов функции

    // Функция 2: С параметрами
    function calculatePostScore(upvotes, downvotes) {
        return upvotes - downvotes;
    }
    let postScore = calculatePostScore(150, 25);
    console.log("Рейтинг поста: " + postScore);
    const postScoreDisplay = document.getElementById('post-score-display');
    if (postScoreDisplay) {
        postScoreDisplay.textContent = `Пример рейтинга поста: ${postScore}`;
    }


    // 6. If-Else Conditionals & 7. Random Number Generation
    const randomNumberSection = document.getElementById('random-number-section');
    if (randomNumberSection) {
        let randomNumber = Math.floor(Math.random() * 100) + 1; // Случайное число от 1 до 100
        let message = `Случайное число дня: ${randomNumber}. `;
        if (randomNumber > 75) {
            message += "Это большое число! Отличный день для новых начинаний!";
        } else if (randomNumber > 25) {
            message += "Среднее число. Стабильность - это хорошо!";
        } else {
            message += "Маленькое число. Самое время для уютных историй.";
        }
        randomNumberSection.textContent = message;
    } else {
        console.log("Секция для случайного числа не найдена.");
    }

    // 8. Loops: Используем цикл for для динамического создания HTML элементов
    const dynamicList = document.getElementById('dynamic-feature-list');
    if (dynamicList) {
        const featuresToAdd = ["Улучшенный поиск", "Темная тема", "Уведомления в реальном времени"];
        featuresToAdd.forEach(feature => { // Используем forEach, современный цикл для массивов
            let listItem = document.createElement('li');
            listItem.textContent = feature;
            dynamicList.appendChild(listItem);
        });
    } else {
        console.log("Элемент 'dynamic-feature-list' для добавления фич не найден.");
    }


    // Работа с Массивами (Work with Arrays)
    let blogCategories = ["Путешествия", "Кулинария", "Технологии", "Лайфстайл"];
    const arrayDisplay = document.getElementById('array-display');
    const addCategoryButton = document.getElementById('add-category-btn');

    function displayCategories() {
        if (arrayDisplay) {
            arrayDisplay.innerHTML = ''; // Очищаем предыдущее содержимое
            const ul = document.createElement('ul');
            blogCategories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category;
                ul.appendChild(li);
            });
            arrayDisplay.appendChild(ul);
        } else {
            console.log("Элемент 'array-display' не найден.");
        }
    }
    displayCategories(); // Первоначальное отображение

    if (addCategoryButton) {
        addCategoryButton.addEventListener('click', function() {
            const newCategory = prompt("Введите название новой категории:", "Искусство");
            if (newCategory && newCategory.trim() !== "") {
                blogCategories.push(newCategory.trim()); // Добавляем новый элемент в массив
                displayCategories(); // Повторно отображаем массив
            }
        });
    }


    // Манипуляции с DOM (Document Object Model) и Слушатели Событий (Event Listeners)

    // Выбор HTML-элементов
    const welcomeHeader = document.getElementById('welcome-section-header');
    const introTextParagraph = document.querySelector('#welcome-section .intro-text');
    const galleryImage = document.querySelector('#gallery-section .image-gallery img');
    const changeTextButton = document.getElementById('change-text-btn');
    const changeLinkButton = document.getElementById('change-link-btn');
    const mainNav = document.getElementById('main-nav');

    // Слушатель события 1: Click
    if (changeTextButton && welcomeHeader) {
        changeTextButton.addEventListener('click', function() {
            welcomeHeader.textContent = "Blogife приветствует Вас!"; // Изменяем текстовое содержимое
            welcomeHeader.style.color = 'purple'; // Изменяем стиль
        });
    }

    // Слушатель события 2: Mouseover/Mouseout
    if (introTextParagraph) {
        introTextParagraph.addEventListener('mouseover', function() {
            introTextParagraph.style.backgroundColor = '#e0e0e0'; // Изменяем стиль
            introTextParagraph.style.fontWeight = 'bold';
        });
        introTextParagraph.addEventListener('mouseout', function() {
            introTextParagraph.style.backgroundColor = 'transparent'; // Возвращаем стиль
            introTextParagraph.style.fontWeight = 'normal';
        });
    }

    // Манипулирование атрибутами элементов
    if (changeLinkButton && mainNav) {
        const firstNavLink = mainNav.querySelector('ul li a');
        if (firstNavLink) {
            changeLinkButton.addEventListener('click', function() {
                firstNavLink.setAttribute('href', '#new-welcome-section'); // Изменяем атрибут href
                firstNavLink.textContent = "Новое Приветствие";
                alert("Ссылка 'Приветствие' в навигации изменена!");
            });
        }
    }

    // Пример изменения источника изображения (если есть кнопка для этого)
    const changeImageButton = document.getElementById('change-image-btn');
    if (changeImageButton && galleryImage) {
        changeImageButton.addEventListener('click', function() {
            let currentSrc = galleryImage.getAttribute('src');
            if (currentSrc.includes('путешествии')) {
                galleryImage.setAttribute('src', 'https://via.placeholder.com/300x200.png?text=Новое+Изображение');
                galleryImage.setAttribute('alt', 'Новое изображение');
            } else {
                galleryImage.setAttribute('src', 'https://via.placeholder.com/300x200.png?text=Пост+о+путешествии');
                galleryImage.setAttribute('alt', 'Изображение поста о путешествии');
            }
        });
    }

    // Feature 1: Random Number Generation and Conditionals (из вашего кода)
    const generateRandomBtn = document.getElementById('generate-random-btn');
    const randomNumberResultDiv = document.getElementById('random-number-result');

    if (generateRandomBtn && randomNumberResultDiv) {
        generateRandomBtn.addEventListener('click', function() {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            let resultHTML = `<p><strong>Сгенерированное число: ${randomNumber}</strong></p>`;

            if (randomNumber % 2 === 0) {
                resultHTML += `<p>Число ${randomNumber} - <strong>четное</strong>.</p>`;
            } else {
                resultHTML += `<p>Число ${randomNumber} - <strong>нечетное</strong>.</p>`;
            }

            if (randomNumber > 50) {
                resultHTML += `<p>Оно <strong>больше</strong> 50.</p>`;
            } else if (randomNumber < 50) {
                resultHTML += `<p>Оно <strong>меньше</strong> 50.</p>`;
            } else {
                resultHTML += `<p>Оно <strong>равно</strong> 50.</p>`;
            }
            randomNumberResultDiv.innerHTML = resultHTML;
        });
    }

    // Feature 2: Comparators and Logic Operators (из вашего кода)
    const postALikesInput = document.getElementById('postA-likes');
    const postBLikesInput = document.getElementById('postB-likes');
    const comparePostsBtn = document.getElementById('compare-posts-btn');
    const comparisonResultDiv = document.getElementById('comparison-result');

    if (postALikesInput && postBLikesInput && comparePostsBtn && comparisonResultDiv) {
        comparePostsBtn.addEventListener('click', function() {
            const likesA = parseInt(postALikesInput.value);
            const likesB = parseInt(postBLikesInput.value);
            let message = "";

            if (isNaN(likesA) || isNaN(likesB) || likesA < 0 || likesB < 0) {
                message = "<p class='text-danger'>Пожалуйста, введите корректные неотрицательные числа для лайков.</p>";
            } else {
                if (likesA > likesB) {
                    message = `<p>Пост А (${likesA} лайков) <strong>популярнее</strong> Поста Б (${likesB} лайков).</p>`;
                } else if (likesB > likesA) {
                    message = `<p>Пост Б (${likesB} лайков) <strong>популярнее</strong> Поста А (${likesA} лайков).</p>`;
                } else {
                    message = `<p>Оба поста имеют одинаковое количество лайков (${likesA}).</p>`;
                }

                if (likesA > 100 && likesB > 100) {
                    message += "<p>Оба поста очень популярны (более 100 лайков)!</p>";
                }
                if (likesA === 0 || likesB === 0) {
                    message += "<p>Как минимум один из постов пока не имеет лайков.</p>";
                }
            }
            comparisonResultDiv.innerHTML = message;
        });
    }

    // Feature 3: Working with Arrays (Blog Tags) (из вашего кода)
    let blogTags = ["Технологии", "Путешествия", "Кулинария", "Лайфстайл", "Обзоры"];
    const blogTagsListDiv = document.getElementById('blog-tags-list');
    const newTagInput = document.getElementById('new-tag-input');
    const addTagBtn = document.getElementById('add-tag-btn');

    function displayBlogTags() {
        if (blogTagsListDiv) {
            blogTagsListDiv.innerHTML = '';
            if (blogTags.length === 0) {
                blogTagsListDiv.innerHTML = '<p class="text-muted">Тегов пока нет. Добавьте первый!</p>';
                return;
            }
            blogTags.forEach(function(tag, index) {
                const tagElement = document.createElement('span');
                tagElement.classList.add('badge', 'bg-info', 'p-2', 'm-1');
                tagElement.textContent = tag;
                const removeBtn = document.createElement('button');
                removeBtn.classList.add('btn-close', 'btn-close-white', 'ms-2', 'btn-sm');
                removeBtn.setAttribute('aria-label', 'Удалить тег');
                removeBtn.style.fontSize = '0.6em';
                removeBtn.onclick = function() {
                    removeTag(index);
                };
                tagElement.appendChild(removeBtn);
                blogTagsListDiv.appendChild(tagElement);
            });
        }
    }

    function removeTag(indexToRemove) {
        blogTags.splice(indexToRemove, 1);
        displayBlogTags();
    }

    if (addTagBtn && newTagInput) {
        addTagBtn.addEventListener('click', function() {
            const newTag = newTagInput.value.trim();
            if (newTag && !blogTags.includes(newTag)) {
                blogTags.push(newTag);
                displayBlogTags();
                newTagInput.value = '';
            } else if (blogTags.includes(newTag)) {
                alert("Такой тег уже существует!");
            }
        });

        newTagInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTagBtn.click();
            }
        });
    }
    displayBlogTags();

    // --- Task 6: Higher-Order Functions --- (из вашего кода)
    const hofButton = document.getElementById('hof-button');

    function handleClickWithCallback(element, callback) {
        if (element) {
            element.addEventListener('click', callback);
        }
    }

    function showHofMessage() {
        alert('Кнопка "Тест Высшего Порядка" нажата! Эта функция была передана как колбэк.');
        console.log('Сообщение от колбэк-функции showHofMessage.');
    }

    if (hofButton) {
        handleClickWithCallback(hofButton, showHofMessage);
    }

    // --- Task 7: Play a Sound on Interaction --- (из вашего кода)
    const soundButton = document.getElementById('sound-button');

    if (soundButton) {
        soundButton.addEventListener('click', function() {
            const soundEffect = new Audio('click-sound.mp3');
            
            soundEffect.play()
                .then(() => {
                    console.log('Звук успешно воспроизведен.');
                })
                .catch(error => {
                    console.error('Ошибка воспроизведения звука:', error);
                    alert('Не удалось воспроизвести звук. Убедитесь, что файл "click-sound.mp3" существует или проверьте консоль.');
                });
        });
    }

    // Логика для интеграции с API (пункт 4 Задания)
    const fetchPostsButton = document.getElementById('fetchPostsButton');
    const apiPostsContainer = document.getElementById('apiPostsContainer');
    const apiErrorDisplay = document.getElementById('apiErrorDisplay');

    if (fetchPostsButton && apiPostsContainer && apiErrorDisplay) {
        fetchPostsButton.addEventListener('click', async () => {
            apiPostsContainer.innerHTML = '<p class="text-center text-muted">Загрузка постов...</p>';
            apiErrorDisplay.classList.add('d-none');

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }

                const posts = await response.json();

                apiPostsContainer.innerHTML = '';

                if (posts.length > 0) {
                    posts.forEach(post => {
                        const postElement = document.createElement('div');
                        postElement.classList.add('col');
                        postElement.innerHTML = `
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title text-primary">${post.title}</h5>
                                    <p class="card-text text-muted">${post.body}</p>
                                </div>
                            </div>
                        `;
                        apiPostsContainer.appendChild(postElement);
                    });
                } else {
                    apiPostsContainer.innerHTML = '<p class="text-center text-muted">Посты не найдены.</p>';
                }

            } catch (error) {
                console.error('Ошибка при получении постов:', error);
                apiPostsContainer.innerHTML = '';
                apiErrorDisplay.textContent = `Не удалось загрузить посты: ${error.message}. Пожалуйста, попробуйте позже.`;
                apiErrorDisplay.classList.remove('d-none');
            }
        });
    }

}); // End of DOMContentLoaded
