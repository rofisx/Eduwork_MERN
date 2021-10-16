
fetch('https://newsapi.org/v2/top-headlines?'+'country=id&' + 'apiKey=c313cc9772c14da19f0a8a18c1a32063')
  .then(res => res.json())
  .then(res => {
        document.getElementById('card').innerHTML = render(res) 
});

function render(result) {
    let card = '';
    result.articles.map(data => {
      card += `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card">
                <img class="card-img-top" src="${data.urlToImage}" alt="Image Title" style="height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text"><small class="text-muted">${data.publishedAt}</small></p>
                    <p class="card-text">${data.description}</p>
                    <a href="${data.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>`;
    })
    return card;
  }

 