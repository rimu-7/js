const insert = document.querySelector(".okay");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
                <div class="okay">
                    <table>
                        <tr>
                            <th>Key</th>
                            <th>Code</th>
                        </tr>
                        <tr>
                            <td>${e.key === " "? "Space" : e.key}</td>
                            <td>${e.code}</td>
                        </tr>
                    </table>
                </div>
            `;
});
