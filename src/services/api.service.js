export default new class {
  get(url) {
    return fetch(url)
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  put(url, payload) {
    return fetch(url, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(payload)
    })
    // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }
}