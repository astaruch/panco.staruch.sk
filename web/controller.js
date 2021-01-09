function toggleDarkMode(event, editUrl = true) {
    document.querySelector('body').classList.toggle('darkmode');
    
    if (editUrl) {
        if (!window.location.href.includes('#darkmode')){
            window.location.href = window.location.href + '#darkmode';
        } else {
            window.location.href = window.location.href.slice(0, -('#darkmode'.length));
        }
    }

    if (event) {
        event.preventDefault();
    }
}

if (window.location.href.includes('#darkmode')){
    toggleDarkMode(/* event= */ undefined, /* editUrl= */ false);
}