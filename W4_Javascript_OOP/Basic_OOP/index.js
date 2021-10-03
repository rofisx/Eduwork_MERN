class Tables {
    constructor(init) {
    this.init = init;
    }

    createHeaderTables(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
        open += `<th>${d}</th>`;
    });

    return open + close;
    }

    createBodyTables(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
        open += `
        <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
        </tr>
        `;
    });

    return open + close;
    }

    render(element) {
    let table =
        "<table class='table table-hover'>" +
        this.createHeaderTables(this.init.columns) +
        this.createBodyTables(this.init.data) +
        "</table>";
    element.innerHTML = table;
    }
}

    const tables = new Tables({
        columns: ["Name", "Email"],
        data: [
        ["Syukron", "rofi.kron@gmail.com"],
        ["Isrofi", "kron.rofi@gmail.com"]
        ]
    });
    const app = document.getElementById("app");
    tables.render(app);
  