const axios = require('axios');

async function fetchData(url) {
  try {
      const response = await axios(url, {
        headers: {
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        }
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}

function main() {
  const url = 'https://www.crocs.com/p/stomp-clog/209347.html?cgid=women-footwear-clogs&cid=001';
  fetchData(url).then(data => {
    console.log(data);
  });
}

main();