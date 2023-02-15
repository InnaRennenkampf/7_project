var url = "https://dog.ceo/api/breeds/image/random";
$.getJSON(url, function (data) { // возвращает JSON
    console.log(data);
    $('#data').append(
        $('<img src=' + data.message + '>')
    )
});