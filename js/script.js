var url = "https://dog.ceo/api/breeds/list/all";
$.getJSON(url, function (data) {
    $.each(data.message, function (i, item) {
        $('#dog-select').append(
            $('<option value=' + i + '>' + i + '</option>')
        )
    });
});

$('#dog-select').on('change', function () {
    var url = "https://dog.ceo/api/breed/" + this.value + "/images";
    $.getJSON(url, function (data) {
        $('#data').empty();
        $.each(data.message, function (i, item) {
            $('#data').append(
                $('<img src=' + item + '>')
            )
        });
    });
});