class Card {
    constructor(init) {
      this.init = init;
    }

  createHeaderName(data) {
      let open = "<div class='card-header'>";
      let close = "</div>";
      data.forEach(() => {
      open += data.shift();
      
      });
  
      return open + close;
  }

  createHeaderEmail(data) {
    let open = "<div class='card-header'>";
    let close = "</div>";
    data.forEach(() => {
      open += data.pop();
      
    });
   
    return open + close;
  }

  createBody(data) {
      let open = "<div ='card-body'>";
      let close = "</div>";

      for(let i=0; i < data.length; i++) {
      open += `
          <div class = 'card-text px-3'>
          ${data[i].shift()}
          </div>
      `;
      };

      return open + close;
  }
  createBodyEmail(data) {
    let open = "<div ='card-body'>";
    let close = "</div>";

    for(let i=0; i < data.length; i++) {
      open += `
        <div class = 'card-text px-3'>
          ${data[i].pop()}
        </div>
      `;
    };

    return open + close;
  }
  
    render(element) {
      let card =
      "<div class='card'>" +
        this.createHeaderName(this.init.columns) +
        this.createBody(this.init.data) +
        "</div>"+
        "<div class='card'>"+
        this.createHeaderEmail(this.init.columns)+
        this.createBodyEmail(this.init.data) +
        "</div>";
      element.innerHTML = card;
    }
  }

  class Card2 {
    constructor(init) {
      this.init = init;
    }
    createBody(data) { 
        let open = 
        "<div class='row'>";
        let close = "</div>";
        data.map((d) => {
            open+= "<div class='col-6'>"+
                    "<div class='card mt-3 border border-warning'>"+
                    "<div class='row g-0'>"+
                    "<div class='col-md-4'>"+
                        "<img src='github.png' class='img-fluid rounded-start' alt='profile'>"+
                    "</div>"+
                    "<div class='col-md-8'>"+"<div class='card-body'>"+
                    "<h5 class='card-title'>"+d[0]+"</h5>"+
                    "<p class='card-text'>"+d[1]+"</p>"+
                    "<p class='card-text'>"+d[2]+"</p>"+     
                    "</div>"+
                    "</div>"+
                    "</div>"+
                    "</div>"+"</div>";                                  
                });
        return open + close;
      }
  
    render(element) {       
        let card2 = this.createBody(this.init.data)
      element.innerHTML = card2;
    }
  }

  export {Card, Card2}