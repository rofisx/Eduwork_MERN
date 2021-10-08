  function getData(url, cb) {
      let xml = new XMLHttpRequest();
      xml.onload = function () {
          if (xml.status === 200) {
                return cb(JSON.parse(xml.responseText));
            }
        };
        xml.open("GET", url);
        xml.send();
    }
    
    let data = getData("https://jsonplaceholder.typicode.com/users", function (data) {
        let open = "<tbody>";
        let close = "</tbody>"; 
        document.getElementById("table-users").innerHTML =
        "<tbody>" + "<tr class='table-secondary'>"+"<td colspan ='6' class= 'text-center'>"+"Loading..."+"</td>"+"</tr>"+"</tbody>";   
        setTimeout(()=>{                     
            data.map(element => {    
                open +=`
                <tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.address.street},${element.address.suite},${element.address.city}</td>
                    <td>${element.company.name}</td>
                </tr>`;
                });
                document.getElementById("table-users").innerHTML = open + close;      
            },500);          

       
        });
        
       
    

  


   
    
