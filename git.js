class Github {
    constructor(){
        this.client_id = 'ab19760595b47a9dd7eb';
        this.client_secret = 'd4aab08e8d606bb6bfa67832fcaa5e06c5556270';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json(); 
        const repos = await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}