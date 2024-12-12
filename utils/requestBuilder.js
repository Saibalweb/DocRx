const get = async (url, token) => {
  const method = "GET";
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${token}`,
  };
  requestOption = {
    headers,
    method,
  };
  try {
    const response = await fetch(url, requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const post = async (url, body, token, type) => {
  const method = 'POST';
  let headers;
  if (type == 'file') {
    headers = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  }
  if (!type || type == 'json') {
    headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  }
  requestOption = {
    headers,
    method,
    body,
  };
  try {
    const response = await fetch(url, requestOption);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export{get,post};