import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

export const useUser = () => {
	return useQuery({
		queryKey: [QueryKeyNamespace.USER],
		queryFn: async () => {
			try {
				const { data } = await apiClientService.users.getMe()

				return data
			} catch (error) {
				console.log(error)
			}
		},
		staleTime: getMillisecondsPeriod({ min: 10 }),
		gcTime: getMillisecondsPeriod({ min: 30 }),
	})
}
