let CONSTANT_HTTP_CONNECTION

function connection(url) {
    return function (link) {
      CONSTANT_HTTP_CONNECTION = `${url}${link}`;
    };
}
const connectionUrl = connection('https://api-maps.yandex.ru/');
connectionUrl('2.1/?apikey=107edbda-a282-45c8-9340-736038bcb720&lang=ru_RU');
export { CONSTANT_HTTP_CONNECTION };
