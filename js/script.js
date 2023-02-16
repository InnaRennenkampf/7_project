let url = "https://dog.ceo/api/breeds/list/all";
$.getJSON(url, function (data) {
    $('#breed-select').append(
        $('<option>Select Breed</option>')
    )
    $.each(data.message, function (breed, subbreeds) {
        $('#breed-select').append(
            $('<option value=' + breed + '>' + breed + '</option>')
        )
    });
});

$('#breed-select').on('change', function () {
    $('#dog-images').empty();
    $('#subBreed-select').remove();
    requestSubBreedsListByBreed(this.value);
});

function requestSubBreedsListByBreed(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/list";
    $.getJSON(url, function (data) {
        if (data.message.length > 0) {
            requestImagesByBreed(breed, data.message);
        } else {
            getDogByBreed(breed);
        }
    });
}

function requestImagesByBreed(breed, subBreeds) {
    $('#selectors').append(
        $('<select id="subBreed-select">')
    )
    $('#subBreed-select').append(
        $('<option>Select Sub-Breed</option>')
    )
    $.each(subBreeds, function (index, subBreed) {
        $('#subBreed-select').append(
            $('<option value=' + subBreed + '>' + subBreed + '</option>')
        )
    });
    $('#selectors').append(
        $('</select">')
    )
    $('#subBreed-select').on('change', function () {
        $('#dog-images').empty();
        getImagesByBreed(breed, this.value);
    });
}

function getImg(url) {
    return '<img class="col-6 col-md-4" src=' + url + '>';
}

function getDogByBreed(breed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/images";
    $.getJSON(url, function (data) {
        $.each(data.message, function (i, item) {
            $('#dog-images').append(
                $(getImg(item))
            )
        });
    });
}

function getImagesByBreed(breed, subBreed) {
    let url = "https://dog.ceo/api/breed/" + breed + "/" + subBreed + "/images";
    $.getJSON(url, function (data) {
        $.each(data.message, function (i, item) {
            $('#dog-images').append(
                $(getImg(item))
            )
        });
    });
}