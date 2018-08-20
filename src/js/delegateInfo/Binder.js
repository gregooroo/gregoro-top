export default class Binder {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
    this.holders = this.wrapper.querySelectorAll("[data-value]");
  }

  followPath(data, path) {
    return path.split(".").reduce((prev, curr) => prev && prev[curr], data);
  }

  bindSingleValue(data, el) {
    const element = el;
    const path = element.getAttribute("data-value");
    element.innerText = this.followPath(data, path);
  }

  bind(data) {
    this.holders.forEach(holder => this.bindSingleValue(data, holder));
  }
}
