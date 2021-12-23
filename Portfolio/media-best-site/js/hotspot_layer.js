ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [56.721252, 60.233719],
            zoom: 8,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                
                [
                    [56.791605, 60.498347],
                    [56.802602, 60.519676],
                    [56.781783, 60.562334],
                    [56.767975, 60.534868],
                    [56.781924, 60.510063]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContentHeader: '<a href = "#">Какая-то-Ссылка</a><br>' +
            '<span class="description">Академический</span>',
            balloonContentBody: '<img src="img/57258267_2683468415028798_2579363216865886208_o.png" height="50" width="50"> <br/> ' +
            '<a href="tel:+7-922-025-67-67">Звонить</a><br/>' +
            '<b>Народу дохуя</b> <br/> палюбому.', 
            balloonContentFooter: 'Заказывайте свою рекламу:<br/>OOO "Славик и Ко"',
            hintContent: 'Рога и копыта'
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.2,
        // Ширина обводки.
        strokeWidth: 1,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                [
                    [56.758396, 60.581861],
                    [56.780359, 60.589414],
                    [56.786389, 60.607267],
                    [56.767635, 60.615850],
                    [56.755189, 60.609842]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContentHeader: '<a href = "#">Какая-то-Ссылка2</a><br>' +
            '<span class="description">Академический</span>',
            balloonContentBody: '<img src="img/57258267_2683468415028798_2579363216865886208_o.png" height="50" width="50"> <br/> ' +
            '<a href="tel:+7-922-025-67-67">Звонить</a><br/>' +
            '<b>МеньшеЧемВАкадеме</b> <br/> но тоже дохуя.', 
            balloonContentFooter: 'Заказывайте свою рекламу:<br/>OOO "Славик и Ко"',
            hintContent: 'Рога и копыта'
            
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#550055',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.2,
        // Ширина обводки.
        strokeWidth: 2,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);

    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
                // Координаты вершин внешнего контура.
                
                [
                    [56.883075, 60.559374],
                    [56.914402, 60.595680],
                    [56.916656, 60.611816],
                    [56.886693, 60.615078]
                ]
            ],
            // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
            fillRule: "nonZero"
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            balloonContentHeader: '<a href = "#">Какая-то-Ссылка</a><br>' +
            '<span class="description">Уралмаш</span>',
            balloonContentBody: '<img src="img/57258267_2683468415028798_2579363216865886208_o.png" height="50" width="50"> <br/> ' +
            '<a href="tel:+7-922-025-67-67">Звонить</a><br/>' +
            '<b>Народу дохуя</b> <br/> палюбому.', 
            balloonContentFooter: 'Заказывайте свою рекламу:<br/>OOO "Славик и Ко"',
            hintContent: 'Рога и копыта'
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.2,
        // Ширина обводки.
        strokeWidth: 1,
        // Стиль обводки.
        strokeStyle: 'shortdash'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);


      // Создадим собственный макет выпадающего списка.
        ListBoxLayout = ymaps.templateLayoutFactory.createClass(
            "<button id='my-listbox-header' class='btn btn-success dropdown-toggle' data-toggle='dropdown'>" +
                "{{data.title}} <span class='caret'></span>" +
            "</button>" +
            // Этот элемент будет служить контейнером для элементов списка.
            // В зависимости от того, свернут или развернут список, этот контейнер будет
            // скрываться или показываться вместе с дочерними элементами.
            "<ul id='my-listbox'" +
                " class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu'" +
                " style='display: {% if state.expanded %}block{% else %}none{% endif %};'></ul>", {

            build: function() {
                // Вызываем метод build родительского класса перед выполнением
                // дополнительных действий.
                ListBoxLayout.superclass.build.call(this);

                this.childContainerElement = $('#my-listbox').get(0);
                // Генерируем специальное событие, оповещающее элемент управления
                // о смене контейнера дочерних элементов.
                this.events.fire('childcontainerchange', {
                    newChildContainerElement: this.childContainerElement,
                    oldChildContainerElement: null
                });
            },

            // Переопределяем интерфейсный метод, возвращающий ссылку на
            // контейнер дочерних элементов.
            getChildContainerElement: function () {
                return this.childContainerElement;
            },

            clear: function () {
                // Заставим элемент управления перед очисткой макета
                // откреплять дочерние элементы от родительского.
                // Это защитит нас от неожиданных ошибок,
                // связанных с уничтожением dom-элементов в ранних версиях ie.
                this.events.fire('childcontainerchange', {
                    newChildContainerElement: null,
                    oldChildContainerElement: this.childContainerElement
                });
                this.childContainerElement = null;
                // Вызываем метод clear родительского класса после выполнения
                // дополнительных действий.
                ListBoxLayout.superclass.clear.call(this);
            }
        }),

        // Также создадим макет для отдельного элемента списка.
        ListBoxItemLayout = ymaps.templateLayoutFactory.createClass(
            "<li><a>{{data.content}}</a></li>"
        ),

        // Создадим 2 пункта выпадающего списка
        listBoxItems = [
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Екатеринбург',
                    center: [56.837541, 60.611031],
                    zoom: 9
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Первоуральск',
                    center: [56.907666, 59.952538],
                    zoom: 11
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Ревда',
                    center: [56.801204, 59.926445],
                    zoom: 11
                }
            }),
            new ymaps.control.ListBoxItem({
                data: {
                    content: 'Полевской',
                    center: [56.495754, 60.243675],
                    zoom: 9
                }
            })
        ],

        // Теперь создадим список, содержащий 2 пункта.
        listBox = new ymaps.control.ListBox({
                items: listBoxItems,
                data: {
                    title: 'Выберите пункт'
                },
                options: {
                    // С помощью опций можно задать как макет непосредственно для списка,
                    layout: ListBoxLayout,
                    // так и макет для дочерних элементов списка. Для задания опций дочерних
                    // элементов через родительский элемент необходимо добавлять префикс
                    // 'item' к названиям опций.
                    itemLayout: ListBoxItemLayout
                }
            });

        listBox.events.add('click', function (e) {
            // Получаем ссылку на объект, по которому кликнули.
            // События элементов списка пропагируются
            // и их можно слушать на родительском элементе.
            var item = e.get('target');
            // Клик на заголовке выпадающего списка обрабатывать не надо.
            if (item != listBox) {
                myMap.setCenter(
                    item.data.get('center'),
                    item.data.get('zoom')
                );
            }
        });

    myMap.controls.add(listBox, {float: 'left'});

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    // var myPolygon = new ymaps.Polygon([
    //     // Указываем координаты вершин многоугольника.
    //     // Координаты вершин внешнего контура.
    //     [
    //         [55.75, 37.50],
    //         [55.80, 37.60],
    //         [55.75, 37.70],
    //         [55.70, 37.70],
    //         [55.70, 37.50]
    //     ],
    //     // Координаты вершин внутреннего контура.
    //     [
    //         [55.75, 37.52],
    //         [55.75, 37.68],
    //         [55.65, 37.60]
    //     ]
    // ], {
    //     // Описываем свойства геообъекта.
    //     // Содержимое балуна.
    //     hintContent: "Многоугольник"
    // }, {
    //     // Задаем опции геообъекта.
    //     // Цвет заливки.
    //     fillColor: '#00FF0088',
    //     // Ширина обводки.
    //     strokeWidth: 1
    // });

    // // Добавляем многоугольник на карту.
    // myMap.geoObjects.add(myPolygon);
}
