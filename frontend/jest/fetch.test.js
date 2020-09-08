const fetch = require('node-fetch');

function FetchData(url) {
  // const headers = {
  //   'Content-Type': 'application/json',
  // };
  // const res = await fetch(url, { headers });
  // return fetch(url, { headers });
  return fetch(url);
}

test('the response.json() is valid', async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  await FetchData(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      expect(json.id).toBe(1);
      expect(json.userId).toBe(1);
      expect(json.title).toBe(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      );
    });

  // expect.assertions(1);
  // const res = await FetchData(url);
  // const resJson = res.json();

  // await FetchData(url)
  //   .then((res) => {
  //     console.log('res', res);
  //     if (res.status == 200) {
  //       const resJson = res.json();
  //       console.log('resJson', resJson);
  //       expect(resJson.id).toBe(1);
  //     } else {
  //       throw new Error();
  //     }
  //   })
  //   .catch((error) => {});

  // console.log('resJson', resJson);
});
