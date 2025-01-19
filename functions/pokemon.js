/**
 * Récupère l'id a partir d'un url
 * @param {string} url -l'url contenue dans l'objet
 * @returns {number} -l'id
 */
export function getPokemonId (url) {
return parseInt(url.split('/')?.at(-2), 10)
}

/**
 * 
 * @param {number | string} id 
 * @returns {string}
 */
export function getPokemonArtwork(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

/**
 * 
 * @param {number} weight 
 * @returns {string}
 */
export function formatWeight(weight) {
    if (!weight) {
        return "--";
    }
    return (weight / 10).toString().replace('.',',') + " Kg"
}

/**
 * 
 * @param {number} size 
 * @returns {string}
 */
export function formatSize(size) {
    if (!size) {
        return "--";
    }
    return (size / 10).toString().replace('.',',') + " m"
}

export const basePokemonStats = [
    {
        "base_stat": 1,
        "stat": {
            "name": "hp",
        }
    },
    {
        "base_stat": 1,
        "stat": {
            "name": "attack",
        }
    },
    {
        "base_stat": 1,
        "stat": {
            "name": "defense",
        }
    },
    {
        "base_stat": 1,
        "stat": {
            "name": "special-attack",
        }
    },
    {
        "base_stat": 1,
        "stat": {
            "name": "special-defense",
        }
    },
    {
        "base_stat": 1,
        "stat": {
            "name": "speed",
        }
    }
]