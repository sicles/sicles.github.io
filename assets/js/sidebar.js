function openSidebar() {
    let sidebar = document.getElementById("sidebar");
    let openButton = document.getElementById("openSidebarBtn");

    if (openButton) openButton.style.display = "none";
    
    // Check if sidebar already loaded
    if (!sidebar) {
        fetch("left-sidebar.html")
            .then(response => response.text())
            .then(data => {
                let sidebarContainer = document.createElement("div");
                sidebarContainer.innerHTML = data;
                document.body.appendChild(sidebarContainer);

                // now open it
                
                setTimeout(() =>
                {
                    document.getElementById("sidebar").style.width = "250px";
                }, 10);
            });
    }
    else
    {
        sidebar.style.width = "250px";
    }
    
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar()
{
    let sidebar = document.getElementById("sidebar");
    let openButton = document.getElementById("openSidebarBtn");
    
    if (sidebar)
    {
        sidebar.style.width = "0";
        
        // reactivate button
        setTimeout(() => {
            if (openButton) openButton.style.display = "block";
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    let openButton = document.getElementById("openSidebarBtn");
    if (openButton)
    {
        openButton.addEventListener("click", openSidebar);
    }
});