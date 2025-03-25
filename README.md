# Test Users

## Используемые библиотеки:
- **react-window** — используется для виртуализации рендера списка, что позволяет отображать только видимые элементы, не загружая весь миллион пользователей в DOM.

## Особенности проекта:
- Рендерится около 600 тысяч пользователей, так как браузер и библиотека начинают упираться в ограничения памяти и высоты контейнера.
- Redux отсутствует, так как нет необходимости в глобальном хранилище для такой простой задачи.
- Можно отрендерить весь миллион разбив данные на чанки, но это не сделано поскольку это уже не является частью задания.

## Деплой:
Проект деплоится на GitHub Pages.
