import { ApiRoutes } from '@/config/constants'
import { ApiType } from '@/types/api'
import type { Token } from '@/types/generated/apiGenerated'

import { instanceAxios } from './axiosInstance'

type OptionsType = {
	signal?: AbortSignal
	params?: Record<string, string | number | boolean | undefined>
}

export const apiClientService = {
	auth: {
		postLogin: (data: { email: string; password: string }) =>
			instanceAxios.post<Token>(ApiRoutes.auth.login, data),
		postRefresh: (data: { refreshToken: string }) =>
			instanceAxios.post<Token>(ApiRoutes.auth.refresh, data),
	},
	users: {
		getMe: (options?: OptionsType) =>
			instanceAxios.get<ApiType.UserDto>(ApiRoutes.users.me, options),
		// getAll: (options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.UserPaginationEntity>(ApiRoutes.users.default, options),
		// getById: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.UserDto>(ApiRoutes.users.byId(id), options),
		// getRolesStats: (options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.RoleStatsDto[]>(ApiRoutes.users.rolesStats, options),
		// validateEmailChange: (options?: OptionsType) =>
		// 	instanceAxios.get<boolean>(ApiRoutes.users.validateEmailChange, options),
		// validateConfirmationToken: (options?: OptionsType) =>
		// 	instanceAxios.get<boolean>(ApiRoutes.users.validateConfirmationToken, options),
		// create: (data: ApiType.CreateUserDto) =>
		// 	instanceAxios.post<ApiType.UserDto>(ApiRoutes.users.default, data),
		// update: (id: string, data: ApiType.UpdateUserBodyDto) =>
		// 	instanceAxios.patch<ApiType.UserDto>(ApiRoutes.users.byId(id), data),
		// updateMe: (data: ApiType.UpdateCurrentUserBodyDto) =>
		// 	instanceAxios.patch<ApiType.UserDto>(ApiRoutes.users.me, data),
		// delete: (id: string) =>
		// 	instanceAxios.delete<ApiType.UserDto>(ApiRoutes.users.byId(id)),
		// resetPassword: (data: ApiType.ResetPasswordDto) =>
		// 	instanceAxios.patch<void>(ApiRoutes.users.resetPassword, data),
		// setPassword: (data: ApiType.EmailConfirmationDto) =>
		// 	instanceAxios.patch<void>(ApiRoutes.users.setPassword, data),
	},
	devices: {
		getAll: (options?: OptionsType) =>
			instanceAxios.get<ApiType.DevicePaginationDto>(ApiRoutes.devices.default, options),
		// getById: (id: string, options?: OptionsType) =>
		// instanceAxios.get<ApiType.GetDeviceResponseDto>(ApiRoutes.devices.byId(id), options),
		// 	getLabels: (options?: OptionsType) =>
		// 		instanceAxios.get<string[]>(ApiRoutes.devices.labels, options),
		// 	getLogs: (id: string, options?: OptionsType) =>
		// 		instanceAxios.get<ApiType.LogsDto>(ApiRoutes.devices.logs(id), options),
		// 	getPerformance: (id: string, options?: OptionsType) =>
		// 		instanceAxios.get<ApiType.DevicePerformanceDto>(ApiRoutes.devices.performance(id), options),
		// 	create: (data: ApiType.CreateDeviceDto) =>
		// 		instanceAxios.post<ApiType.DeviceEntity>(ApiRoutes.devices.default, data),
		// 	createBatch: (data: ApiType.CreateDevicesDto) =>
		// 		instanceAxios.post<void>(ApiRoutes.devices.batch, data),
		// 	update: (id: string, data: ApiType.UpdateDeviceBodyDto) =>
		// 		instanceAxios.patch<ApiType.DeviceEntity>(ApiRoutes.devices.byId(id), data),
		// 	delete: (id: string) =>
		// 		instanceAxios.delete<ApiType.DeviceEntity>(ApiRoutes.devices.byId(id)),
	},
	// deviceGroups: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UnitGroupPaginationEntity>(ApiRoutes.deviceGroups.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UnitGroupEntity>(ApiRoutes.deviceGroups.byId(id), options),
	// 	create: (data: ApiType.CreateUnitGroupDto) =>
	// 		instanceAxios.post<ApiType.UnitGroupEntity>(ApiRoutes.deviceGroups.default, data),
	// 	update: (id: string, data: ApiType.UpdateUnitGroupBodyDto) =>
	// 		instanceAxios.patch<ApiType.UnitGroupEntity>(ApiRoutes.deviceGroups.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<ApiType.UnitGroupEntity>(ApiRoutes.deviceGroups.byId(id)),
	// },
	locations: {
		get: (options?: OptionsType) =>
			instanceAxios.get<ApiType.LocationPaginationEntity>(ApiRoutes.locations.default, options),
		// getById: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.LocationWithConnectionsEntity>(ApiRoutes.locations.byId(id), options),
		// getMap: (options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.MapLocationEntity[]>(ApiRoutes.locations.map, options),
		// search: (options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.LocationEntity[]>(ApiRoutes.locations.search, options),
		// getDevices: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<unknown>(ApiRoutes.locations.devices(id), options),
		// getAnalyticsSummary: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<unknown>(ApiRoutes.locations.analyticsSummary(id), options),
		// getDashboardCard: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.DashboardAnalyticsResponseDto>(ApiRoutes.locations.analyticsDashboardCard(id), options),
		// getAnalyticsReport: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<Blob>(ApiRoutes.locations.analyticsReport(id), { ...options, responseType: 'blob' } as OptionsType),
		// create: (data: ApiType.CreateLocationDto) =>
		// 	instanceAxios.post<ApiType.LocationEntity>(ApiRoutes.locations.default, data),
		// update: (id: string, data: ApiType.UpdateLocationBodyDto) =>
		// 	instanceAxios.patch<ApiType.LocationEntity>(ApiRoutes.locations.byId(id), data),
		// delete: (id: string) =>
		// 	instanceAxios.delete<ApiType.LocationEntity>(ApiRoutes.locations.byId(id)),
	},
	// groups: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ExtendedGroupDto[]>(ApiRoutes.groups.default, options),
	// 	create: (data: ApiType.CreateGroupDto) =>
	// 		instanceAxios.post<ApiType.BaseGroupDto>(ApiRoutes.groups.default, data),
	// 	update: (id: string, data: ApiType.UpdateGroupDto) =>
	// 		instanceAxios.patch<ApiType.BaseGroupDto>(ApiRoutes.groups.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<void>(ApiRoutes.groups.byId(id)),
	// },
	// health: {
	// 	get: (options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.health.default, options),
	// },
	reports: {
		getAll: (options?: OptionsType) =>
			instanceAxios.get<ApiType.ReportPaginationEntity>(ApiRoutes.reports.default, options),
		// getById: (id: string, options?: OptionsType) =>
		// instanceAxios.get<ApiType.ReportWithUnitsEntity>(ApiRoutes.reports.byId(id), options),
		// 	create: (data: ApiType.CreateReportDto) =>
		// 		instanceAxios.post<ApiType.ReportEntity>(ApiRoutes.reports.default, data),
		// 	update: (id: string, data: ApiType.UpdateReportBodyDto) =>
		// 		instanceAxios.patch<ApiType.ReportEntity>(ApiRoutes.reports.byId(id), data),
		// 	delete: (id: string) =>
		// 		instanceAxios.delete<ApiType.ReportEntity>(ApiRoutes.reports.byId(id)),
		// 	addGadget: (id: string, data: ApiType.CreateGadgetDto) =>
		// 		instanceAxios.post<ApiType.GadgetDto>(ApiRoutes.reports.gadgets(id), data),
		// 	updateGadget: (id: string, gadgetId: string, data: ApiType.UpdateGadgetDto) =>
		// 		instanceAxios.patch<void>(ApiRoutes.reports.gadgetById(id, gadgetId), data),
		// 	deleteGadget: (id: string, gadgetId: string) =>
		// 		instanceAxios.delete<void>(ApiRoutes.reports.gadgetById(id, gadgetId)),
	},
	// connections: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ConnectionPaginationEntity>(ApiRoutes.connections.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ConnectionWithDevicesEntity>(ApiRoutes.connections.byId(id), options),
	// 	create: (data: ApiType.CreateConnectionDto) =>
	// 		instanceAxios.post<ApiType.ConnectionEntity>(ApiRoutes.connections.default, data),
	// 	createBatch: (data: ApiType.CreateConnectionsDto) =>
	// 		instanceAxios.post<ApiType.BatchDto>(ApiRoutes.connections.batch, data),
	// 	update: (id: string, data: ApiType.UpdateConnectionBodyDto) =>
	// 		instanceAxios.patch<ApiType.ConnectionEntity>(ApiRoutes.connections.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<ApiType.ConnectionEntity>(ApiRoutes.connections.byId(id)),
	// },
	// dashboards: {
	// 	getReports: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ExtendedDashboardToReports[]>(ApiRoutes.dashboards.reports, options),
	// 	addReports: (data: ApiType.PostReportsDto) =>
	// 		instanceAxios.post<ApiType.ExtendedDashboardToReports>(ApiRoutes.dashboards.reports, data),
	// 	updateReport: (id: string, data: ApiType.PatchReportsDto) =>
	// 		instanceAxios.patch<ApiType.ExtendedDashboardToReports>(ApiRoutes.dashboards.reportById(id), data),
	// 	deleteReport: (id: string, options?: OptionsType) =>
	// 		instanceAxios.delete<void>(ApiRoutes.dashboards.reportById(id), options),
	// },
	status: {
		get: (options?: OptionsType) =>
			instanceAxios.get<ApiType.OrganizationInfoDto>(ApiRoutes.status.default, options),
		// getLocation: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.LocationInfoDto>(ApiRoutes.status.location(id), options),
		// getDevice: (id: string, options?: OptionsType) =>
		// 	instanceAxios.get<ApiType.DeviceInfoDto>(ApiRoutes.status.device(id), options),
	},
	// integrations: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.IntegrationEntity[]>(ApiRoutes.integrations.default, options),
	// 	getRecipients: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.RecipientEntity[]>(ApiRoutes.integrations.recipients, options),
	// 	create: (data: ApiType.RegisterIntegrationQueryDto) =>
	// 		instanceAxios.post<ApiType.IntegrationEntity>(ApiRoutes.integrations.default, data),
	// 	update: (data: ApiType.UpdateIntegrationBodyDto) =>
	// 		instanceAxios.put<ApiType.IntegrationEntity>(ApiRoutes.integrations.default, data),
	// 	delete: (options?: OptionsType) =>
	// 		instanceAxios.delete<ApiType.IntegrationEntity>(ApiRoutes.integrations.default, options),
	// },
	// organizations: {
	// 	get: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.OrganizationDto>(ApiRoutes.organizations.default, options),
	// 	update: (data: ApiType.UpdateOrganizationDto) =>
	// 		instanceAxios.put<ApiType.OrganizationDto>(ApiRoutes.organizations.default, data),
	// },
	// notifications: {
	// 	get: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.NotificationObjectEntity>(ApiRoutes.notifications.default, options),
	// 	create: (data: ApiType.SendBodyDTO) =>
	// 		instanceAxios.post<void>(ApiRoutes.notifications.default, data),
	// },
	alerts: {
		getAll: (options?: OptionsType) =>
			instanceAxios.get<ApiType.AlertsDto>(ApiRoutes.alerts.default, options),
		// getById: (id: string, options?: OptionsType) =>
		// instanceAxios.get<ApiType.AlertDto>(ApiRoutes.alerts.byId(id), options),
		// 	getAnomalyMarks: (options?: OptionsType) =>
		// 		instanceAxios.get<unknown>(ApiRoutes.alerts.anomalyMarks, options),
		// 	getReportCsv: (options?: OptionsType) =>
		// 		instanceAxios.get<Blob>(ApiRoutes.alerts.reportsCsv, { ...options, responseType: 'blob' } as OptionsType),
		// 	create: (data: ApiType.CreateAlertDto) =>
		// 		instanceAxios.post<ApiType.AlertDto>(ApiRoutes.alerts.default, data),
		// 	update: (id: string, data: ApiType.UpdateAlertDto) =>
		// 		instanceAxios.patch<ApiType.AlertDto>(ApiRoutes.alerts.byId(id), data),
	},
	categories: {
		getAll: (options?: OptionsType) =>
			instanceAxios.get<ApiType.CategoriesDto['data']>(ApiRoutes.categories.default, options),
		// 	create: (data: ApiType.CreateCategoryDto) =>
		// 		instanceAxios.post<ApiType.CategoryDto>(ApiRoutes.categories.default, data),
		// 	update: (id: string, data: ApiType.CreateCategoryDto) =>
		// 		instanceAxios.patch<ApiType.CategoryDto>(ApiRoutes.categories.byId(id), data),
	},
	// units: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UnitPaginationDto>(ApiRoutes.units.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ExtendedUnitDto>(ApiRoutes.units.byId(id), options),
	// 	getData: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UnitsDataAggregationDto[]>(ApiRoutes.units.data, options),
	// 	getDataById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UnitDataPaginationEntity>(ApiRoutes.units.dataById(id), options),
	// 	getProfile: (options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.units.profile, options),
	// 	create: (data: ApiType.CreateUnitDto) =>
	// 		instanceAxios.post<ApiType.UnitDto>(ApiRoutes.units.default, data),
	// 	createBatch: (data: ApiType.CreateUnitsDto) =>
	// 		instanceAxios.post<ApiType.UnitDto[]>(ApiRoutes.units.batch, data),
	// 	validateFormula: (data: ApiType.ValidateFormulaDto) =>
	// 		instanceAxios.post<ApiType.ValidateFormulaResponseDto>(ApiRoutes.units.validateFormula, data),
	// 	update: (id: string, data: ApiType.UpdateUnitBodyDto) =>
	// 		instanceAxios.patch<ApiType.UnitDto>(ApiRoutes.units.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<ApiType.UnitDto>(ApiRoutes.units.byId(id)),
	// },
	// communication: {
	// 	getStatus: (options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.communication.status, options),
	// 	write: (data: unknown, options?: OptionsType) =>
	// 		instanceAxios.post<void>(ApiRoutes.communication.write, data, options),
	// 	testConnection: (data: ApiType.TestConnectionBodyDto) =>
	// 		instanceAxios.post<void>(ApiRoutes.communication.testConnection, data),
	// },
	// strategies: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.StrategiesPaginationDto>(ApiRoutes.strategies.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ExtendedStrategyDto>(ApiRoutes.strategies.byId(id), options),
	// 	getExecutionLog: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.StrategyExecutionLogsPaginationDto>(ApiRoutes.strategies.executionLog, options),
	// 	create: (data: ApiType.CreateStrategyDto) =>
	// 		instanceAxios.post<ApiType.StrategyDto>(ApiRoutes.strategies.default, data),
	// 	duplicate: (id: string) =>
	// 		instanceAxios.post<ApiType.BigInt>(ApiRoutes.strategies.duplicate(id), {}),
	// 	update: (id: string, data: ApiType.UpdateStrategyDto) =>
	// 		instanceAxios.patch<ApiType.ExtendedStrategyDto>(ApiRoutes.strategies.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<void>(ApiRoutes.strategies.byId(id)),
	// },
	// processes: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ProcessPaginationDto>(ApiRoutes.processes.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ProcessResponseDto>(ApiRoutes.processes.byId(id), options),
	// 	create: (data: ApiType.CreateProcessDto) =>
	// 		instanceAxios.post<ApiType.ProcessResponseDto>(ApiRoutes.processes.default, data),
	// 	update: (id: string, data: ApiType.UpdateProcessBodyDto) =>
	// 		instanceAxios.patch<ApiType.ProcessResponseDto>(ApiRoutes.processes.byId(id), data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<void>(ApiRoutes.processes.byId(id)),
	// 	duplicate: (id: string, data: ApiType.DuplicateProcessBodyDto) =>
	// 		instanceAxios.post<ApiType.ProcessResponseDto>(ApiRoutes.processes.duplicate(id), data),
	// 	addUnit: (id: string, data: ApiType.AddProcessUnitDto) =>
	// 		instanceAxios.post<ApiType.ProcessUnitResponseDto>(ApiRoutes.processes.units(id), data),
	// 	updateUnit: (id: string, unitId: string, data: ApiType.UpdateProcessUnitDto) =>
	// 		instanceAxios.patch<ApiType.ProcessUnitResponseDto>(ApiRoutes.processes.unitById(id, unitId), data),
	// 	deleteUnit: (id: string, unitId: string) =>
	// 		instanceAxios.delete<void>(ApiRoutes.processes.unitById(id, unitId)),
	// 	getEvents: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.ProcessEventPaginationDto>(ApiRoutes.processes.events(id), options),
	// 	createEvent: (id: string, data: ApiType.CreateProcessEventDto) =>
	// 		instanceAxios.post<ApiType.ProcessEventResponseDto>(ApiRoutes.processes.events(id), data),
	// 	getAnalytics: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.AnalyticsResultPaginationDto>(ApiRoutes.processes.analytics(id), options),
	// 	getAnalyticsLatest: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.AnalyticsResultResponseDto[]>(ApiRoutes.processes.analyticsLatest(id), options),
	// 	getMetrics: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.metrics(id), options),
	// 	getForecast: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.forecast(id), options),
	// 	getForecastLongTerm: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.forecastLongTerm(id), options),
	// 	getCorrelations: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.correlations(id), options),
	// 	getBenchmark: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.benchmark(id), options),
	// 	getRoi: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.roi(id), options),
	// 	getDegradation: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.degradation(id), options),
	// 	getHealth: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.health(id), options),
	// 	getDesignComparison: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.designComparison(id), options),
	// 	getDiagnostics: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.diagnostics(id), options),
	// 	getContext: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.context(id), options),
	// 	getScenarios: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.scenarios(id), options),
	// 	runScenario: (id: string, scenarioId: string) =>
	// 		instanceAxios.post<void>(ApiRoutes.processes.scenarioById(id, scenarioId), {}),
	// 	getMvBaseline: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.mvBaseline(id), options),
	// 	getPeerComparison: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.peerComparison(id), options),
	// 	getRecommendations: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.recommendations(id), options),
	// 	getWeather: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.weather(id), options),
	// 	compute: (id: string, options?: OptionsType) =>
	// 		instanceAxios.post<void>(ApiRoutes.processes.compute(id), {}, options),
	// 	getAiAnalysis: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<unknown>(ApiRoutes.processes.aiAnalysis(id), options),
	// 	postAiChat: (id: string, data: unknown) =>
	// 		instanceAxios.post<unknown>(ApiRoutes.processes.aiChat(id), data),
	// 	backfill: (id: string, options?: OptionsType) =>
	// 		instanceAxios.post<ApiType.BackfillResponseDto>(ApiRoutes.processes.backfill(id), {}, options),
	// 	getReport: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<Blob>(ApiRoutes.processes.report(id), { ...options, responseType: 'blob' } as OptionsType),
	// },
	// mlAnalytics: {
	// 	get: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.MlAnalyticsResponseDto>(ApiRoutes.mlAnalytics.default, options),
	// },
	// logs: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.LogsDto>(ApiRoutes.logs.default, options),
	// },
	// userLogs: {
	// 	getAll: (options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UserLogPaginationEntity>(ApiRoutes.userLogs.default, options),
	// 	getById: (id: string, options?: OptionsType) =>
	// 		instanceAxios.get<ApiType.UserLogEntity>(ApiRoutes.userLogs.byId(id), options),
	// 	create: (data: ApiType.CreateUserLogDto) =>
	// 		instanceAxios.post<ApiType.UserLogEntity>(ApiRoutes.userLogs.default, data),
	// 	delete: (id: string) =>
	// 		instanceAxios.delete<ApiType.UserLogEntity>(ApiRoutes.userLogs.byId(id)),
	// },
}
