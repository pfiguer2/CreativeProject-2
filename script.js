function onClick(e) {
  e.preventDefault();
  // get form values
  console.log("yo");

  let url = "https://random.dog/woof.json";

  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      console.log(json.url);
      let images = '<img style="width:50%; border:10px solid white;" src="' + json.url + '"/>';
      document.getElementById("image").innerHTML = images;
    });

}

document.getElementById('RandomFacts').addEventListener('click', onClick);