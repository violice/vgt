const API_URL = 'https://api.rawg.io/api';

const API_KEY = '1b64e09a486141139b2076b97fd40de4';

const HEADERS = {
  'content-type': 'application/json; charset=UTF-8',
};

const makeSearchParams = (obj: Record<string, any>) => {
  const searchParams = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    searchParams.append(key, value);
  });
  return searchParams.toString();
};

const makeRequest = async <T>({
  method,
  url,
  params,
  body,
  headers,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  params?: Record<string, any>;
  body?: Record<string, any>;
  headers?: Record<string, any>;
}): Promise<T> => {
  const requestParams = {
    key: API_KEY,
    ...params,
  };

  const requestUrl = `${API_URL}/${url}?${makeSearchParams(requestParams)}`;

  const requestHeaders = {
    ...HEADERS,
    ...headers,
  };

  const requestBody = body ? JSON.stringify(body) : undefined;

  try {
    const res = await fetch(requestUrl, {
      method,
      body: requestBody,
      headers: requestHeaders,
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default makeRequest;
