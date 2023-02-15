var url = "https://dog.ceo/api/breeds/image/random/3";

$.getJSON(url, function (data) {
    $.each(data.message, function (i, item) {
        $('#data').append(
            $('<img src=' + item + '>')
        )
    });
});