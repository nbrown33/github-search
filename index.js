"use strict";

const token = "e1fdeca6f0781bceee27d24799ca638b80e4242a"

$("#js-form").submit(event => {
    event.preventDefault();
    let user = $("input").val();
    console.log(user);
    fetch(`https://api.github.com/users/:${user}/repos?access_token=${token}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => console.log(responseJson));
    .catch(err => {
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
    // .then(responseJson => displayResults(responseJson))
})

function displayResults(responseJson) {
    $("#results").empty();
    for (let i=0; i < responseJson.message.length; i++) {
        $("#results-list").append(`<li></li>`)
    }
    $("#results").removeClass("hidden")
}