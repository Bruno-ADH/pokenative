import { useQuery } from "@tanstack/react-query"
import { API_URL } from "@env"

const endpoint = API_URL
/**
 * @param {string} path -le chemin 
 * @returns 
 */
export function useFetchQuery(path) {
    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            await wait(1)
            return fetch(endpoint + path).then((r) => r.json())
        }
    })
}

/**
 * @param {number} duration -la durée d'attente
 */
function wait (duration) {
    return new Promise (resolve => setTimeout(resolve, duration*1000))
}