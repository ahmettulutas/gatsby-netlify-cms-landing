export const onInitialClientRender = () => {
  window.addEventListener('load', () => {
    window.alert('content loaded');
    document.getElementById('___loader').style.display = 'none';
  });
  document.addEventListener('DOMContentLoaded', () => {
    window.alert('dom loaded');
    document.getElementById('___loader').style.display = 'none';
  });
};