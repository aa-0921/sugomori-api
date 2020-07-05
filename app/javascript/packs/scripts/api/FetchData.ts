export async function FetchData(url: string) {
  const csrf = sessionStorage.getItem('X-CSRF-Token');
  const headers = {
    'X-CSRF-Token': csrf,
    // };
  } as headersType;

  type headersType = {
    'X-CSRF-Token': any;
  };
  // const headers = new Headers();
  // if (csrf) {
  //   headers.append('X-CSRF-Token', csrf);
  // }

  const res = await fetch(url, { headers });

  return await res.json();
}
