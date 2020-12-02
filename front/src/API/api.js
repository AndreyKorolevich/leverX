class Api {
  constructor(url) {
    this.url = url;
    this.request = new XMLHttpRequest();
  }

  wrapper(callback, param = '', method = 'GET', body = null) {
    this.request.open(method, this.url + param);
    const req = this.request; // save XMLHttpRequest object in variable in order to it`s possible to refer from listener
    req.addEventListener('readystatechange', function handler() {
      if (this.readyState === 4 && this.status === 200) {
        callback(JSON.parse(this.responseText));
        req.removeEventListener('readystatechange', handler); // delete listener
      } else if (this.status > 400) {
        console.error(this.statusText);
      }
    });
    this.request.send(body);
  }
}

const api = new Api('http://localhost:7070/');
export default api;
