(function () {
  const DEMO_HOST_DEV = 'http://localhost:10086';
  const DEMO_HOST_PROD = 'https://h5.艺蔚.wang';

  const { hostname, search } = window.location;
  const [, query, queryQuery] = search.split('?');
  const queryObj = query.split('&').reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    acc[key] = value;
    return acc;
  }, {});

  let redirectPath = queryObj.redirect;

  if (!redirectPath) {
    return;
  }
  console.log(redirectPath);

  if (queryQuery) {
    redirectPath += `?${queryQuery}`;
  }

  if (hostname === 'localhost') {
    window.location.href = `${DEMO_HOST_DEV}${redirectPath}`;
  } else {
    window.location.href = `${DEMO_HOST_PROD}${redirectPath}`;
  }
})();
