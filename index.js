"use strict";

const token = "e1fdeca6f0781bceee27d24799ca638b80e4242a"

$("#js-form").submit(event => {
    event.preventDefault();
    $("#results-list").empty()
    $("#js-error-message").empty()
    let user = $("input").val();
    fetch(`https://api.github.com/users/${user}/repos`, {
      headers:{
        'Authorization': `token ${token}`
      }
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => { 
      console.log(responseJson[0].name)
      displayResults(responseJson)
    })
    .catch(err => {
        console.log(err)
        $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
})

function displayResults(responseJson) {
    let results = responseJson;
    for (let i=0; i < results.length; i++) {
        $("#results-list").append(`<li>${results[i].name}<br/><a href="${results[i].html_url}">${results[i].html_url}</li><br/>`)
    }
    $("#results").removeClass("hidden");
}