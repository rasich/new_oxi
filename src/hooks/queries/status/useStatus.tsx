import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

export const useStatus = () => {
	return useQuery({
		queryKey: [QueryKeyNamespace.STATUS],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.status.get({
					signal,
				})

				return data
			} catch (error) {
				console.log(error)
			}
		},
		staleTime: getMillisecondsPeriod({ min: 10 }),
		gcTime: getMillisecondsPeriod({ min: 30 }),
	})
}
