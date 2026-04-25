import { useQuery } from '@tanstack/react-query'

import { getMillisecondsPeriod } from '@/utils/system/getMillisecondsPeriod'

import { QueryKeyNamespace } from '@/config/providers/query/query.types'

import { apiClientService } from '@/services/apiClientService'

type UseDevicesParams = {
	categoryId?: string
	search?: string
}

export const useDevices = (params?: UseDevicesParams) => {
	return useQuery({
		queryKey: !!params ? [QueryKeyNamespace.DEVICES, params] : [QueryKeyNamespace.DEVICES],
		queryFn: async ({ signal }) => {
			try {
				const { data } = await apiClientService.devices.getAll({
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
