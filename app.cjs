const axios = require('axios');

async function getMovieList(year) {

    var url = "https://jsonmock.hackerrank.com/api/movies/";

    var result = await axios.get(url, {
        params: {
            Year: year
        }
    });

    return result.data.data.length > 0 ? result.data.data.map((d) => { return d.Title }) : 'No results found';
}


async function main() {
    var year = 2018;
   return await getMovieList(year);

}

main();

module.exports = {
    main: main,
    getMovieList: getMovieList
};