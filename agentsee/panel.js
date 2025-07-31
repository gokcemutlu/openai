let currentAction = null;

function loadActions() {
  const container = document.getElementById("action-list");
  mockActions.forEach(action => {
    const div = document.createElement("div");
    div.className = "action-item";
    div.innerText = action.title + " (" + action.status + ")";
    div.onclick = () => showDetails(action);
    container.appendChild(div);
  });
}

function showDetails(action) {
  currentAction = action;
  document.getElementById("status-box").innerText = "Status: " + action.status;
  document.getElementById("events-box").innerHTML = "<ul>" + action.events.map(e => `<li>${e}</li>`).join("") + "</ul>";

  const thread = mockThreads[action.id] || [];
  const threadDiv = document.getElementById("thread-box");
  threadDiv.innerHTML = thread.map(email =>
    `<div><strong>${email.from}:</strong> ${email.text}</div>`
  ).join("<hr>");

  document.getElementById("thread-button").style.display = "inline-block";
}

function openThreadView() {
  if (currentAction) {
    window.location.href = "views/thread.html?action=" + currentAction.id;
  }
}

window.onload = loadActions;