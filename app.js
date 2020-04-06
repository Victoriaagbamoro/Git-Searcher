// Init Github
const github = new Github;
// Initialise UI
const ui = new UI;

//  Input HTML Search input
const searchUser = document.getElementById('searchUser');

// Add Event listener to the search input
searchUser.addEventListener('keyup', (e) => {
    // Get User Input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger' )

            }else {
                // Show Profile
                ui.displayProfile(data.profile);
                ui.showRepos(data.repos) 

            }
        })
    }else {
        // Clear the Profile
        ui.clearProfile();
    }
});