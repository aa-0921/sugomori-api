export async function FetchData(url: string) {
  const headers = {
    'Content-Type': 'application/json',
  };
  const res = await fetch(url, { headers });

  return await res.json();
}
