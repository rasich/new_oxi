import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

type UseAlertsParams = {
	categoryId?: string
}

export const useAlerts = (params?: UseAlertsParams) => {
	return useQuery({
		queryKey: [QueryKeyNamespace.ALERTS, params],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.alerts.getAll({
					signal,
					params,
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
