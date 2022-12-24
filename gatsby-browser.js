export const onInitialClientRender = () => {
  window.addEventListener('load', () => {
    setTimeout(() => { document.getElementById('___loader').style.display = 'none'; }, 100);
  });
};