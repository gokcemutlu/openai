// ✅ public/panel.js
window.addEventListener("DOMContentLoaded", () => {
  const actionList = document.getElementById("actionList");
  const detailsPanel = document.getElementById("detailsPanel");

  mockActions.forEach(action => {
    const li = document.createElement("li");
    li.textContent = `${action.title} (${action.status})`;
    li.style.cursor = "pointer";
    li.onclick = () => {
      detailsPanel.innerHTML = `
        <h2>Action Details</h2>
        <p>Status: ${action.status}</p>
        <ul>${action.events.map(e => `<li>${e}</li>`).join("")}</ul>
        ${mockThreads[action.id]
          .map(msg => `<p><strong>${msg.from}:</strong> ${msg.text}</p>`)
          .join("")}
        <button onclick="window.location='/thread.html'">Open Full Email Thread</button>
      `;
    };
    actionList.appendChild(li);
  });
});
