import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

type UseReportsByIdParams = {
	referenceId?: string
	type?: 'Category'
	search?: string
}

export const useReports = (params?: UseReportsByIdParams) => {
	return useQuery({
		queryKey: [QueryKeyNamespace.REPORTS, params],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.reports.getAll({
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
