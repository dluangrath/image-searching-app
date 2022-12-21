import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID em-dNB8xWXZYlVMWSCJtpumiZsxKOlEcHXyUyJo8kyA',            
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;