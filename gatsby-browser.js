import './src/assets/styles/main.less';

export const onClientEntry = () => {
  setTimeout(() => {
    document.getElementById('___loader').style.display = 'none';
    document.getElementById('___gatsby').style.display = 'block';
  }, 1000);
};