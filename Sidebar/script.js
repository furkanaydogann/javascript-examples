const bars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const closeSidebarButton = document.querySelector('.fa-xmark');


//js Toggle varsa kaldırır yoksa eklerrrr !!
bars.addEventListener('click', () => {
    sidebar.classList.toggle('showSidebar');
});


closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar');
});
