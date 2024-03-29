class gitHub{
    constructor(){
        this.client_id = '847f0f17083ff14d2ead';
        this.client_secret = 'd548445fe329aba08c936263bc5703d2a792ba50';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }
    async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposeResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repose = await reposeResponse.json();
    return {
        profile,
        repose 
    }
    }
}