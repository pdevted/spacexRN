export const ROOT_URL = 'https://api.spacexdata.com/v3';

export const allLaunches = async () => {
  try {
    const response = await fetch(`${ROOT_URL}/launches?id=true`,{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.status && response.status !== 200) {
      throw response.status;
    }
    
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    }

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
