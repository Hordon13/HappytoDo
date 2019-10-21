export default new class {
  async get(url) {
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  async post(url, payload) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  async put(url, payload) {
    try {
      return await fetch(url, {
        method: "PUT",
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }, body: JSON.stringify(payload)
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  async delete(url) {
    try {
      return await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
}