const clearElement = (id) => {
    const element = document.getElementById(id)
    element.innerHTML = ""
}

const fetchMessages = async () => {
    const response = await fetch('Controller?command=FetchNotifications');
    const notifications = await response.json();
    //log all notifications
    console.log("Notifications");
    for (let i = 0; i < notifications.length; i++) {
        console.log(notifications[i]);
    }
    return notifications;
}

fetchMessages().then(r => { });