import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: {
        'X-Auth-Token': '5b6ad828e6dc46ad87f25202164ad5bf'
    }
});

async function getLeagues(filterA){
    try {
        const response = await instance.get('matches');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function getTeams(id){
    try {
        const response = await instance.get(`teams/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export {
    getLeagues,
    getTeams,
}