const github = new gitHub;
const ui = new UI;

// Search user
document.getElementById('searchUser').addEventListener('keyup' , (e) => {
    // Get input text
    const userText  = e.target.value;

    if(userText !== ''){
       github.getUser(userText)
       .then(data => {
       if(data.profile.message === 'Not Found'){
           // Show Alert
           ui.showAlert('User Not Found' , 'alert alert-danger');
       }
       else{
           ui.showProfile(data.profile);
           ui.showRepose(data.repose);
       }
       })
   
    }else{
        //Clear Profile
        ui.clearProfile();
    }
})