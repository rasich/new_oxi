import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

type UseLocationsParams = {
	withStatuses?: boolean
}

export const useLocations = (params?: UseLocationsParams) => {
	return useQuery({
		queryKey: [QueryKeyNamespace.LOCATIONS, params],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.locations.get({
					signal,
					params,
				})

				return data
			} catch (error) {
				console.log(error)
			}
		},
		select: (data) => data?.data,
		staleTime: getMillisecondsPeriod({ min: 10 }),
		gcTime: getMillisecondsPeriod({ min: 30 }),
	})
}
