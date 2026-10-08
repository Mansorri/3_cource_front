// 5 лр
const form = document.getElementById('data-form');

if (form) {

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const pib = document.getElementById('pib').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const faculty = document.getElementById('faculty').value.trim();
        const birthday = document.getElementById('birthday').value.trim();
        const address = document.getElementById('address').value.trim();

        const patterns = {

            pib:
                /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/,
            phone:
                /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
            faculty:
                /^[А-ЯІЇЄҐ]{4}$/,
            birthday:
                /^\d{2}\.\d{2}\.\d{4}$/,
            address:
                /^м\.\s\d{6}$/
        };


        let isValid = true;

        function validateField(fieldId, pattern) {
            const field = document.getElementById(fieldId);
            if (!pattern.test(field.value.trim())) {

                isValid = false;

                field.style.borderColor = 'red';
                field.style.borderWidth = '2px';

            } else {

                field.style.borderColor = '';
                field.style.borderWidth = '';
            }
        }

        validateField('pib', patterns.pib);
        validateField('phone', patterns.phone);
        validateField('faculty', patterns.faculty);
        validateField('birthday', patterns.birthday);
        validateField('address', patterns.address);

        if (isValid) {

            alert(
                'Введені дані:\n\n' +
                'ПІБ: ' + pib + '\n' +
                'Телефон: ' + phone + '\n' +
                'Факультет: ' + faculty + '\n' +
                'Дата народження: ' + birthday + '\n' +
                'Адреса: ' + address
            );
        }
    });
}

// Завдання 2

const taskTable = document.getElementById('task-table');
const colorPicker = document.getElementById('colorPicker');

if (taskTable && colorPicker) {
    let number = 1;
    for (let i = 0; i < 6; i++) {
        const row = taskTable.insertRow();

        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = number;

            if (number === 1) {
                cell.addEventListener('mouseover', function () {
                    const randomColor =
                        '#' + Math.floor(Math.random() * 16777215)
                            .toString(16)
                            .padStart(6, '0');

                    cell.style.backgroundColor = randomColor;
                });
            }

            cell.addEventListener('click', function () {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', function () {
                const selectedRow = cell.parentElement;
                for (const rowCell of selectedRow.cells) {

                    rowCell.style.backgroundColor = colorPicker.value;
                }
            });
            
            number++;
        }
    }
}