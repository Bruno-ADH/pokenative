/**
 * Récupère l'id a partir d'un url
 * @param {string} url -l'url contenue dans l'objet
 * @returns {number} -l'id
 */
export function getPokemonId (url) {
return parseInt(url.split('/')?.at(-2), 10)
}