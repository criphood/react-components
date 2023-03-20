function setState(value: string) {
  localStorage.setItem('cripInput', JSON.stringify(value));
}

function getState() {
  const item = localStorage.getItem('cripInput');
  if (typeof item === 'string') {
    return JSON.parse(item);
  }
  return '';
}

export { setState, getState };
