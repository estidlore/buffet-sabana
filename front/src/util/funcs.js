export const click = (e, fn, ...args) => {
  e.stopPropagation();
  fn(...args);
}

export const clss = (base, ...classCond) => {
  let res = base;
  for (const [className, condition] of classCond) {
    if (condition) {
      res += ` ${className}`;
    }
  }
  return res.trimEnd();
}

export const createQuery = (api, defaultInit) => ({
  get: (route, init) => ({
    url: `${api}${route}`,
    init: {
      cache: true,
      mode: "cors",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      ...defaultInit,
      ...init,
    }
  })
});
