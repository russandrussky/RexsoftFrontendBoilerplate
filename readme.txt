1. Після копіювання на ПК потрібно в директорію закинути папку "node_modules" яка знаходиться в папці node js

├ dev
│ ├ less                     — less-исходники стилей проекта
│ └ js
│   ├ lib                    — библиотеки/плагины
│   ├ jquery-1.11.1.min.js   — jquery
│   └ production.js          — объедененные в один файл ['dev/js/jquery-1.11.1.min.js', 'dev/js/lib/*.js', 'js/common.js']
├ css
│ ├ img                      — стилевые изображения(иконки, графические элементы…)
│ ├ style.css                — собранный из less-файлов основной css-файл проекта
│ └ style.min.css            — сжатый style.css
├ images                     — изображения из контента
└ js
  ├ common.js                — основной js-файл проекта
  ├ libs.js                  — объедененные в один файл ['dev/js/jquery-1.11.1.min.js', 'dev/js/lib/*.js']
  ├ ie-detector.js           — определение версии ІЕ, если запущено на ІЕ
  └ production.min.js        — сжатый 'dev/js/production.js'
