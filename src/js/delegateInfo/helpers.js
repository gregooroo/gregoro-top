export function createEndpoint(apiAddress, publicKey) {
  return `${apiAddress}/api/delegates/get?publicKey=${publicKey}`;
}

export async function generateData(endpoints) {
  const delegateData = {};

  for (const net of Object.keys(endpoints)) {
    const endpoint = endpoints[net];
    const result = await fetch(endpoint);
    const jsonResult = await result.json();
    delegateData[net] = jsonResult.delegate;
  }
  return delegateData;
}
