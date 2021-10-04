class Table {
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
      let table =
      "<div class='card'>" +
        this.createHeaderName(this.init.columns) +
        this.createBody(this.init.data) +
        "</div>"+
        "<div class='card'>"+
        this.createHeaderEmail(this.init.columns)+
        this.createBodyEmail(this.init.data) +
        "</div>";
      element.innerHTML = table;
    }
  }
  
  const table = new Table({
    columns: ["Name", "Email"],
    data: [
      ["Rofi", "rofi@gmail.com"],
      ["Kron", "kron@gmail.com"]
    ]
  });
  const app = document.getElementById("app");
  table.render(app);
  