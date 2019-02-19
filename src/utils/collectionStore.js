const STORAGE_KEY = 'article-collection';
export default  {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (list) {   
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
}
