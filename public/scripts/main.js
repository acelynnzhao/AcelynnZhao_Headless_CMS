
// Populate overview info cards
async function loadOverview() {
    const response = await fetch('../data/overview.json');
    const overviewData = await response.json();
    overviewData.items.forEach(item => {
        document.getElementById(item.id).innerHTML = item.value;
    });
}

loadOverview();

// Populate support tickets
async function loadTickets() {
    const response = await fetch('../data/tickets.json');
    const ticketsData = await response.json();
    const container = document.getElementById('tickets');
    ticketsData.items.forEach(item => {
        const div = document.createElement('div');
        div.className = "custom-card-info-item w-100 py-3 d-flex flex-row justify-content-between";
        div.innerHTML = `<div>${item.name}</div>
                        <div class="muted-text">${item.value}</div>`;
        container.appendChild(div);
    });
}

loadTickets();

// Populate tasks list
async function loadTasks() {
    const response = await fetch('../data/tasks.json');
    const ticketsData = await response.json();
    const container = document.getElementById('tasks');
    const badgeColors = {
        NEW: "bg-success",
        URGENT: "bg-warning",
        DEFAULT: "bg-secondary"
    };

    ticketsData.items.forEach(item => {
        const div = document.createElement('div');
        div.className = "custom-card-info-item w-100 py-3 d-flex flex-row justify-content-between";
        div.innerHTML = `<div class="form-check mb-0">
                            <input
                                class="form-check-input" type="checkbox"
                                value="" id="finished_checkbox"
                                ${item.checked ? "checked" : ""}
                            >
                            <label class="form-check-label" for="finished_checkbox">
                                ${item.name}
                            </label>
                        </div>
                        <span class="badge ${badgeColors[item.label]}">${item.label}</span>`;
        container.appendChild(div);
    });
}

loadTasks();
