import {Card,Card2} from "./module_card.js";

  const card = new Card({
    columns: ["Name", "Email"],
    data: [
      ["Rofi", "rofi@gmail.com"],
      ["Kron", "kron@gmail.com"]
    ]
  });

  const card2 = new Card2({
    data: [
      ["Rofi","08123xxxxxxx", "rofi@gmail.com"],
      ["Kronx","08123xxxxxxx", "kronx@gmail.com"],
      ["Rofixz","08123xxxxxxx", "rofixz@gmail.com"],
      ["XkronZ","08123xxxxxxx", "xkronz@gmail.com"]
    ]
  });

  const app = document.getElementById("app");
  card.render(app);
  const app2 = document.getElementById("card2");
  card2.render(app2);
