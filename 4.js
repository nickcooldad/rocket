function loadAll(urls, load, limit, cb) {
  const result = new Array(urls.length)
  const cache = new Map()
  let started = 0
  let finished = 0
  let active = 0

  if (urls.length === 0) {
    return cb(result)
  }

  function helper() {
    if (active === limit) {
      return;
    }

    if (finished === urls.length) {
      return cb(result);
    }

    if (started === urls.length) {
      return;
    }

    const i = started
    started++

    if (cache.has(urls[i])) {
      helper()
    } else {
      active++
      cache.set(
        urls[i],
        load(urls[i]).finally(() => active--),
      );
    }

    cache.get(urls[i]).then(value => {
      result[i] = value
      finished++
      helper()
    })
  }

  for (let i = 0; i < limit; i++) {
    helper()
  }
}


const url2duration = {
  A: 2000,
  B: 1000,
  C: 1400,
  D: 600,
  E: 1200,
  F: 1800,
  G: 800,
};

const load = (url) => {
  console.log(url, "started");
  return new Promise(resolve => setTimeout(resolve, url2duration[url], url))
    .then((x) => (console.log(url, "finished"), x))
}
const urls = ["A", "B", "B", "C", "D"];

// a -------------------- d -----
// b --------- c --------------


console.time("run");
loadAll(urls, load, 2, (result) => {
  console.log(result);
  console.timeEnd("run");
});

