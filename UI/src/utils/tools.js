export function getRandomNumberBetweenRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function getRandomProjectCover() {
  const randomNum = getRandomNumberBetweenRange(28, 30).toString().padStart(2, '0')
  return `https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/104${randomNum}?size=xxlarge`;
}

export function getProjectCoverList() {
  const newArray = new Array(26).fill({})
  return newArray.map((item, index) => `https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/104${(25 - index).toString().padStart(2,'0')}?size=xxlarge`)
}
