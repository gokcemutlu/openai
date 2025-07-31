window.onload = function () {
  const list = document.getElementById("actionList");
  const panel = document.getElementById("detailsPanel");

  mockActions.forEach(action => {
    const li = document.createElement("li");
    li.textContent = `${action.title} (${action.status})`;
    li.onclick = () => showDetails(action);
    list.appendChild(li);
  });

  function showDetails(action) {
    const thread = mockThreads[action.id] || [];
    panel.innerHTML = `
      <h2>${action.title}</h2>
      <p><strong>Status:</strong> ${action.status}</p>
      <ul>${action.events.map(e => `<li>${e}</li>`).join("")}</ul>
      <div>
        ${thread.map(email => `
          <div class="email-block">
            <strong>${email.from}</strong>
            <span>${email.text}</span>
          </div>`).join("")}
      </div>
      <button onclick="window.location.href='/thread'">Open Full Email Thread</button>
    `;
  }
};
