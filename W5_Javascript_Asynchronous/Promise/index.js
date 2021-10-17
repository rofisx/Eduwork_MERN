document.getElementById("cari").addEventListener("keyup", cek)

function cek(){
  let found = document.getElementById("cari").value.toUpperCase();
  if (found.length == 0){
    fetch('https://newsapi.org/v2/top-headlines?'+'country=id&' + 'apiKey=62d33f7c426949b1a5875b91b20b2351')
        .then(res => res.json())
        .then(res => {
              document.getElementById('card').innerHTML = render(res) 
      }).catch(err => {
        document.getElementById('card').innerHTML = `<p style="background-color: #A52A2A; color:white; text-align: center;">Request Data Sudah Terlalu Banyak</p>`;
      });
  }else{
    fetch('https://newsapi.org/v2/top-headlines?'+'q='+found+'&'+'country=id&' + 'apiKey=62d33f7c426949b1a5875b91b20b2351')
        .then(res => res.json())
        .then(res => {
                if(res.articles.length == 0){
                  document.getElementById('card').innerHTML = `<p style="background-color: #FAEBD7; text-align: center;">Pencarian Tidak Ditemukan</p>`;
              }else{
                  document.getElementById('card').innerHTML = render(res) 
              }
      }).catch(err => {
        document.getElementById('card').innerHTML = `<p style="background-color: #A52A2A; color:white; text-align: center;">Request Data Sudah Terlalu Banyak</p>`;
      });
  }
}

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

cek()
