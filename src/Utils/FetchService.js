import axios from "axios";

export default class FetchService {

    static getPosts = async (limit = 5, page = 1) => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts', { 
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }

    static async getPost (id = 1) {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response
    }

    static async getNotes (id=1){
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response
    }

}