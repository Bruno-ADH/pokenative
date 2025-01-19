import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import { API_URL } from "@env";

const endpoint = API_URL
/**
 * @param {string} path -le chemin 
 * @returns {Object} 
 */
export function useFetchQuery(path, params) {
    const localUrl = endpoint + Object.entries(params ?? {})
        .reduce((acc, [key, value]) => 
            acc.replaceAll(`[${key}]`, value)
        , path)

    return useQuery({
        queryKey: [localUrl],
        queryFn: async () => {
            await wait(1)
            return fetch(localUrl, {
                headers: {
                    Accept: 'application/json'
                }
            }).then((r) => r.json())
        }
    })
}

/**
 * @param {string} path -le chemin 
 * @returns {Object}
 */
export function useInfiniteFetchQuery(path) {
    return useInfiniteQuery({
        queryKey: [path],
        initialPageParam: endpoint + path,
        queryFn: async ({pageParam}) => {
            await wait (1)
            return fetch(pageParam, {
                headers: {
                    Accept: 'application/json'
                }
            }).then((r) => r.json())
        },
        getNextPageParam: (lastPage) => {
            if("next" in lastPage) {
                return lastPage.next
            }
            return null
        }
    })
}

/**
 * @param {number} duration -la durée d'attente
 */
function wait (duration) {
    return new Promise (resolve => setTimeout(resolve, duration*1000))
}