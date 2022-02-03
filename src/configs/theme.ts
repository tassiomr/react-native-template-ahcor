type Theme = {
  background: string;
  accent: string;
}

const light: Theme = {
  background: '#fff',
  accent: '#000',
};

const dark: Theme = {
  background: '#000',
  accent: '#fff'
};

const Themes = { light, dark }

export default Themes;
