"use strict";
const token = "e1fdeca6f0781bceee27d24799ca638b80e4242a"

$("#js-form").submit(event => {
    event.preventDefault();
    let user = $("input").val();
    console.log(user);
    const options = {
        headers: new Headers({
          "Authorization": token})
      };
    fetch(`https://api.github.com/users/:${user}/repos`, options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
})