export const onInitialClientRender = () => {
  window.addEventListener('load', () => {
    setTimeout(() => { document.getElementById('___loader').style.display = 'none'; }, 100);
  });
  const resourcePromises = [],

    images = document.querySelectorAll('img');

  images.forEach(img => {
    const promise = new Promise((resolve, reject) => {
      img.addEventListener('load', () => {
        resolve();
      });
      img.addEventListener('error', () => {
        reject();
      });
    });
    resourcePromises.push(promise);
  });

  const scripts = document.querySelectorAll('script');

  scripts.forEach(script => {
    const promise = new Promise((resolve, reject) => {
      script.addEventListener('load', () => {
        resolve();
      });
      script.addEventListener('error', () => {
        reject();
      });
    });
    resourcePromises.push(promise);
  });

  Promise.all(resourcePromises).then(() => {
  // All resources have finished loading
    console.log('All resources have finished loading');

    // Hide the loading spinner
    document.getElementById('___loader').style.display = 'none';
  });
};