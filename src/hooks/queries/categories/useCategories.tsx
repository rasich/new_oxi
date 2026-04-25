import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

type UseCategoriesParams = {
	locationId?: string
}

export const useCategories = (params?: UseCategoriesParams) => {
	return useQuery({
		queryKey: !!params ? [QueryKeyNamespace.CATEGORIES, params] : [QueryKeyNamespace.CATEGORIES],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.categories.getAll({ signal, params })

				return data?.filter((category) => !!category.amountOfDevices) ?? []
			} catch (error) {
				console.log(error)
			}
		},
		staleTime: getMillisecondsPeriod({ min: 10 }),
		gcTime: getMillisecondsPeriod({ min: 30 }),
	})
}
