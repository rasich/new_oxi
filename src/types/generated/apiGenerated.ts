/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum ProcessStatus {
  Draft = "Draft",
  Active = "Active",
  Paused = "Paused",
  Archived = "Archived",
}

export enum Domain {
  Water = "water",
  Lighting = "lighting",
  Heatpump = "heatpump",
  Greenhouse = "greenhouse",
  Battery = "battery",
  Solar = "solar",
}

export enum LocationPageDefaultTab {
  Details = "Details",
  Alerts = "Alerts",
  Reports = "Reports",
  Schema = "Schema",
}

export enum ReportSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum DashboardType {
  Organization = "Organization",
  Location = "Location",
  Device = "Device",
  Category = "Category",
}

export enum LogLevel {
  Info = "Info",
  Warning = "Warning",
  Error = "Error",
  Fatal = "Fatal",
  Debug = "Debug",
  Verbose = "Verbose",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export enum ExecutionStatus {
  Success = "Success",
  Failed = "Failed",
  None = "None",
}

export enum SunEventType {
  Sunrise = "sunrise",
  Sunset = "sunset",
}

export enum NodeType {
  Condition = "Condition",
  Action = "Action",
  Input = "Input",
}

export enum SourceType {
  Basic = "Basic",
  Calculated = "Calculated",
}

export enum TriggerType {
  UnitDataChange = "UnitDataChange",
  Schedule = "Schedule",
}

export enum AlertSource {
  Strategy = "Strategy",
  Manual = "Manual",
  ML = "ML",
}

export enum Status {
  Normal = "Normal",
  Warning = "Warning",
  Critical = "Critical",
}

export enum AlertStatus {
  Open = "Open",
  Confirmed = "Confirmed",
  Forwarded = "Forwarded",
  Closed = "Closed",
}

export enum AlertPriority {
  Info = "Info",
  Low = "Low",
  High = "High",
}

export enum GadgetSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum GadgetType {
  Table = "Table",
  Graph = "Graph",
  Text = "Text",
  Statistic = "Statistic",
}

export enum ReportType {
  Standard = "Standard",
  Analytics = "Analytics",
}

export enum LogEventType {
  Created = "Created",
  Updated = "Updated",
  Disabled = "Disabled",
  Duplicated = "Duplicated",
  Enabled = "Enabled",
}

export enum LogScope {
  Alert = "Alert",
  Strategy = "Strategy",
  Location = "Location",
  Organization = "Organization",
  Report = "Report",
  Device = "Device",
  Unit = "Unit",
  Categories = "Categories",
  StrategyExecution = "StrategyExecution",
  StrategyAudit = "StrategyAudit",
}

export enum EvaluationTimePeriod {
  Second = "second",
  Minute = "minute",
  Hour = "hour",
  Day = "day",
}

export enum MqttBooleanFormat {
  ON_OFF = "ON_OFF",
  ONE_ZERO = "ONE_ZERO",
  TRUE_FALSE = "TRUE_FALSE",
}

export enum SwapTypes {
  LE = "LE",
  BE = "BE",
  None = "None",
}

export enum Protocol {
  MQTT = "MQTT",
  Modbus = "Modbus",
  SNMP = "SNMP",
}

export enum ConnectionStatus {
  Unknown = "Unknown",
  Online = "Online",
  Offline = "Offline",
  Error = "Error",
}

export enum SchemaDataType {
  Integer16 = "Integer16",
  Integer32 = "Integer32",
  Integer64 = "Integer64",
  String = "String",
  Float = "Float",
  Boolean = "Boolean",
}

export enum IntegrationType {
  Email = "Email",
  Slack = "Slack",
  Teams = "Teams",
  Sms = "Sms",
}

export enum Role {
  User = "User",
  PowerUser = "PowerUser",
  LocationAdmin = "LocationAdmin",
  SuperAdmin = "SuperAdmin",
}

export enum UserStatus {
  Active = "Active",
  Deactivated = "Deactivated",
  InvitationSent = "InvitationSent",
  PendingEmailChange = "PendingEmailChange",
}

export interface BaseGroupDto {
  id: string;
  name: string;
  description?: string;
}

export interface UserDto {
  role: string;
  /** @example "1" */
  id: string;
  /** @example "1" */
  organizationId: string;
  email: string;
  firstName: string;
  lastName: string;
  /** @format date-time */
  createdAt: string;
  status: UserStatus;
  /** @format date-time */
  updatedAt: string | null;
  groups: BaseGroupDto[];
  isSystem: object;
}

export interface PaginationMeta {
  pageCount: number;
  totalCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
}

export interface UserPaginationEntity {
  data: UserDto[];
  meta: PaginationMeta;
}

export interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  /** Array of group IDs associated with the user */
  groups?: string[];
}

export interface UpdateUserBodyDto {
  firstName?: string;
  lastName?: string;
  role?: Role;
  /** Array of group IDs associated with the user */
  groups?: string[];
  status?: UserStatus;
  /** @example "example@email.com" */
  email?: string;
}

export interface UpdateCurrentUserBodyDto {
  firstName?: string;
  lastName?: string;
}

export interface RoleStatsDto {
  role: string;
  userAmount: number;
}

export interface ResetPasswordDto {
  /** @example "user@oxi.io" */
  email: string;
}

export interface EmailConfirmationDto {
  token: string;
  password: string;
}

export interface LoginDto {
  /** @default "user@example.org" */
  email: string;
  /** @default "SuperDuperPassword" */
  password: string;
}

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshDto {
  refreshToken: string;
}

export interface RegisterIntegrationQueryDto {
  type: string;
  value: string;
}

export interface IntegrationEntity {
  /** @example "1" */
  id: string;
  type: IntegrationType;
  /** @example "1" */
  locationId: string;
  value: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  /** @format date-time */
  deletedAt: string | null;
}

export interface UpdateIntegrationBodyDto {
  type: string;
  value: string;
}

export interface RecipientEntity {
  name: string;
  value: string;
}

export interface BaseModelDto {
  /** @example "1" */
  id: string;
  name: string;
}

export interface BaseConnectionDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  status: ConnectionStatus;
  protocol: Protocol;
  settings: object;
}

export interface DeviceNameDto {
  location: BaseModelDto;
  category: BaseModelDto;
  connection: BaseConnectionDto;
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
}

export interface ExtendedUnitDto {
  /** @example "1" */
  unitGroupId: string;
  /** @format int64 */
  deviceId: number;
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  measurement: string;
  allowNegativeValues: boolean;
  isVirtual: boolean;
  markedForDisplay: boolean;
  dataType: SchemaDataType | null;
  settings: object;
  /** @example "1" */
  value: string | null;
  /** @format date-time */
  valueUpdatedAt: string | null;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  device: DeviceNameDto;
}

export interface UnitPaginationDto {
  data: ExtendedUnitDto[];
  meta: object;
}

export interface ValidateFormulaDto {
  /**
   * Formula expression to validate
   * @maxLength 1000
   */
  formula: string;
}

export interface ValidateFormulaResponseDto {
  isValid: boolean;
  /** Validation error message if formula is invalid */
  error?: string;
}

export interface UnitSettingsDto {
  swap?: SwapTypes;
  flag?: string;
  topic?: string;
  writeTopic?: string;
  booleanFormat?: MqttBooleanFormat;
  address?: number;
  mapping?: string;
  registerType?: string;
  dataRecordingFrequency?: number;
  dataRecordingAmplitude?: number;
  snmpOID?: string;
  /** @maxLength 1000 */
  formula?: string;
  /**
   * Evaluation frequency value (e.g. 5 for "every 5 minutes")
   * @default 1
   */
  evaluationFrequency?: number;
  /**
   * Evaluation time period unit
   * @default "minute"
   */
  evaluationTimePeriod?: EvaluationTimePeriod;
}

export interface CreateUnitDto {
  name: string;
  /** @default false */
  isVirtual?: boolean;
  dataType?: SchemaDataType;
  measurement: string;
  /** @default false */
  allowNegativeValues?: boolean;
  settings: UnitSettingsDto;
  /** @example "1" */
  deviceId: string;
  /** @example "1" */
  locationId: string;
}

export interface UnitDto {
  /** @example "1" */
  unitGroupId: string;
  /** @format int64 */
  deviceId: number;
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  measurement: string;
  allowNegativeValues: boolean;
  isVirtual: boolean;
  markedForDisplay: boolean;
  dataType: SchemaDataType | null;
  settings: object;
  /** @example "1" */
  value: string | null;
  /** @format date-time */
  valueUpdatedAt: string | null;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
}

export interface CreateUnitsDto {
  units: CreateUnitDto[];
}

export interface UpdateUnitBodyDto {
  name?: string;
  measurement?: string;
  allowNegativeValues?: boolean;
  dataType?: SchemaDataType;
  settings?: UnitSettingsDto;
  /** @example "1" */
  unitId?: string;
  /** @example "1" */
  unitGroupId?: string;
}

export interface UnitDataPointDto {
  /** @example "1" */
  value: string | null;
  /** @example "2021-07-23T07:00:00.000Z" */
  createdAt: string;
}

export interface UnitsDataAggregationDto {
  /** @example "1" */
  unitId: string;
  /** @example "1" */
  name: string;
  /** @example "2021-07-23T07:00:00.000Z" */
  intervalStart: string;
  min?: UnitDataPointDto;
  max?: UnitDataPointDto;
  median?: UnitDataPointDto;
}

export interface UnitDataDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  unitId: string;
  value: string | null;
  /** @format date-time */
  createdAt: string;
}

export interface UnitDataPaginationEntity {
  data: UnitDataDto[];
  meta: PaginationMeta;
}

export interface BaseUserDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  organizationId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  status: UserStatus;
  isSystem: object;
}

export interface StrategyLogDto {
  /** @example "1" */
  id: string;
  name: string;
}

export interface LogDto {
  actor: BaseUserDto | null;
  strategy: StrategyLogDto | null;
  /** @format int64 */
  id: number;
  /** @example "1" */
  locationId: string;
  level: string;
  scope: string;
  actorId: object;
  /** @format int64 */
  reference: number;
  newValue: object;
  oldValue: object | null;
  eventType: object;
  /** @format date-time */
  createdAt: string;
}

export interface LogsDto {
  data: LogDto[];
  meta: object;
}

export interface UnitWithBaseDeviceDto {
  /** @example "1" */
  unitGroupId: string;
  /** @format int64 */
  deviceId: number;
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  measurement: string;
  allowNegativeValues: boolean;
  isVirtual: boolean;
  markedForDisplay: boolean;
  dataType: SchemaDataType | null;
  settings: object;
  /** @example "1" */
  value: string | null;
  /** @format date-time */
  valueUpdatedAt: string | null;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  device: BaseModelDto;
}

export interface GadgetDto {
  id: bigint;
  /** @example "1" */
  locationId: string;
  name: string;
  description: object | null;
  type: GadgetType;
  size: GadgetSize;
  position: number;
  settings: {
    chart?: {
      x?: string;
      y?: string;
      type?: string;
      series?: string;
    };
  };
  reportId: bigint;
  defaultReportPreview: boolean;
  units: UnitWithBaseDeviceDto[];
}

export interface ReportWithUnitsEntity {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  description: string | null;
  /** @example "1" */
  createdByUserId: string;
  type: ReportType;
  analyticsSettings?: Record<string, any>;
  locations: string[];
  createdBy: BaseUserDto;
  modifiedBy: BaseUserDto;
  /** @format date-time */
  modifiedAt: string | null;
  gadgets: GadgetDto[];
}

export interface ReportPaginationEntity {
  data: ReportWithUnitsEntity[];
  meta: PaginationMeta;
}

export interface ChatDto {
  /** @example "1" */
  x: string;
  /** @example "1" */
  y: string;
  /** @example "AreaChart" */
  type: ReportType;
  /** @example "1" */
  series: string;
}

export interface GadgetSettingsDto {
  /** @example {"x":"createdAt","y":"value","series":"name","type":"line"} */
  chart?: ChatDto | null;
  /** @example {"columns":["column1","column2","column3"],"rows":[["row1","row2","row3"],["row4","row5","row6"]]} */
  table?: object | null;
  /** @example "Help text" */
  text?: string | null;
  /** @example {"color":"#099250","icon":"LightbulbOutlined"} */
  statistic?: object | null;
}

export interface CreateGadgetDto {
  /** @example "Report gadget name" */
  name: string;
  /** @example "Report gadget description" */
  description?: string | null;
  /** @example "Graph" */
  type: GadgetType;
  /** @example "Large" */
  size: GadgetSize;
  /** @example 1 */
  position?: number | null;
  /** @example false */
  defaultReportPreview?: boolean | null;
  settings: GadgetSettingsDto;
  /** @example ["1"] */
  units?: string[];
}

export interface UpdateGadgetDto {
  /** @example "Report gadget name" */
  name?: string | null;
  /** @example "Report gadget description" */
  description?: string | null;
  /** @example "Graph" */
  type?: GadgetType;
  /** @example "Large" */
  size?: GadgetSize;
  /** @example 1 */
  position?: number | null;
  /** @example false */
  defaultReportPreview?: boolean | null;
  settings?: GadgetSettingsDto;
  /** @example ["1"] */
  units?: string[];
}

export interface CreateReportDto {
  name: string;
  description?: string | null;
  /** @default "Standard" */
  type?: ReportType;
  /** Analytics card settings (processIds, defaultPeriod) */
  analyticsSettings?: Record<string, any>;
}

export interface ReportEntity {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  description: string | null;
  /** @example "1" */
  createdByUserId: string;
  type: ReportType;
  analyticsSettings?: Record<string, any>;
  locations: string[];
}

export interface UpdateReportBodyDto {
  name?: string;
  description?: string;
}

export type StreamableFile = object;

export interface CommentDto {
  author: UserDto;
  id: string;
  /** @example "1" */
  locationId: string;
  text: string;
  /** @format date-time */
  createdAt: string;
}

export interface DeviceLocationInfoDto {
  address: string;
  name: string;
  id: string;
  latitude: string;
  longitude: string;
}

export interface ExtendedDeviceDto {
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  connectionId: string;
  label: string;
  /** @example "1" */
  id: string;
  name: string;
  status: Status;
  /** @example "1" */
  categoryId: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  location: DeviceLocationInfoDto | null;
  connection: ConnectionStatus;
  category: string | null;
}

export interface AlertDto {
  forwardedAt: string | null;
  createdById: object | null;
  strategyId: object | null;
  confirmedAt: string | null;
  closedAt: string | null;
  nodeId: object;
  forwardedTo: string | null;
  comments: CommentDto[];
  modifiedByUser: object;
  assignedToUser: object;
  device: ExtendedDeviceDto;
  /** @format int64 */
  id: number;
  /** @example "1" */
  locationId: string;
  priority: string;
  status: string;
  message: string;
  updatedAt: object;
  /** @format date-time */
  createdAt: string;
  source: AlertSource;
  mlMethod?: string | null;
  mlScore?: number | null;
  /** @example 1 */
  occurrences: number;
  /** @format date-time */
  lastSeenAt?: string | null;
  mlExplain?: object | null;
}

export interface StatisticsDto {
  Closed: number;
  Open: number;
  Forwarded: number;
  Confirmed: number;
}

export interface AlertsDto {
  data: AlertDto[];
  statistics: StatisticsDto[];
  meta: object;
}

export interface UpdateAlertDto {
  comment?: string;
  status?: AlertStatus;
  priority?: AlertPriority;
  /** @example "1" */
  assignedTo?: string;
  /** @example "example@email.com" */
  forwardedTo?: string;
}

export interface CreateAlertDto {
  priority: AlertPriority;
  message: string;
  unitId: string;
}

export interface ConnectionSettingsDto {
  host: string;
  port: number;
  /** @maxLength 255 */
  login?: string;
  /** @maxLength 255 */
  password?: string;
}

export interface TestConnectionBodyDto {
  settings: ConnectionSettingsDto;
  protocol: Protocol;
}

export interface SendBodyDTO {
  text: string;
  subject: string;
  integration: string;
  recipients: string[];
}

export interface NotificationObjectEntity {
  /** @example "1" */
  id: string;
  type: IntegrationType;
  resipients: string[];
  subject: string | null;
  text: string;
}

export interface CreateStrategyDto {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** @example "1" */
  ownerId: string;
  /** Whether to notify on failure */
  notifyOnFailure: boolean;
  /** Whether the strategy is enabled */
  enabled?: boolean;
  /** @example "1" */
  locationId: string;
}

export interface StrategyDto {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name: string;
  /** @example "1" */
  ownerId: string;
  /** Whether to notify on failure */
  notifyOnFailure: boolean;
  /** Whether the strategy is enabled */
  enabled?: boolean;
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  unitId?: string | null;
  triggerType: TriggerType | null;
  sourceType: SourceType | null;
  sourceSettings: Record<string, any>;
  triggerSettings: Record<string, any>;
  /** @format int64 */
  id: number;
  /** @format date-time */
  createdAt: string;
}

export interface EdgeDto {
  /** Unique identifier for the edge */
  id: string;
  /** ID of the source node */
  source: string;
  /** ID of the target node */
  target: string;
  /** Type of the edge connection */
  type: EdgeDtoTypeEnum;
  /** Label text for the edge */
  label: string;
}

export interface NodeDto {
  /** Unique identifier for the node */
  id: string;
  type: NodeType;
  /**
   * Position coordinates of the node
   * @example {"x":100,"y":100}
   */
  position?: object;
  /** @example "1" */
  locationId: string;
  edges?: EdgeDto | null;
  /**
   * Node data containing label and additional properties
   * @example {"type":"Condition","operation":{"name":"greaterThan","description":"greater than","type":"Condition","settings":{}}}
   */
  data: object;
}

export interface ExtendedStrategyDto {
  strategy: StrategyDto;
  nodes: NodeDto[];
  edges: EdgeDto[];
}

export interface StrategiesPaginationDto {
  data: ExtendedStrategyDto[];
  meta: PaginationMeta;
}

export interface BaseStrategyDto {
  /**
   * @minLength 1
   * @maxLength 255
   */
  name?: string;
  /** @example "1" */
  ownerId?: string;
  /** Whether to notify on failure */
  notifyOnFailure?: boolean;
  /** Whether the strategy is enabled */
  enabled?: boolean;
  /**
   * Unit ID. Can be null for ${TriggerType.Schedule} trigger type
   * @example "1"
   */
  unitId?: string | null;
  /** Use UnitDataChange with Basic and Calculated. Use Schedule to trigger the strategy at a specific time. */
  triggerType?: TriggerType;
  sourceType?: SourceType;
  /**
   * For Calculated source type, function can be 'AVG' | 'MIN' | 'MAX' | 'MEDIAN'
   * @example {"function":"AVG","timestamp":1710288000}
   */
  sourceSettings?: object;
  /** For ${TriggerType.Schedule} trigger type, it should be cron string */
  triggerSettings?: object;
}

export interface UpdateStrategyDto {
  strategy?: BaseStrategyDto;
  nodes?: NodeDto[];
  edges?: EdgeDto[];
}

export type BigInt = object;

export interface SunEventTypeSchema {
  sunEvent: SunEventType;
}

export interface StrategyExecutionLogDto {
  /** @format int64 */
  id: number;
  /** @format date-time */
  createdAt: string;
  eventType: LogEventType;
  /** Array of execution logs */
  executionLogs: {
    operationType?: StrategyExecutionLogDtoOperationTypeEnum;
    nodeType?: string;
    error?: string | null;
    cooldown?: number | null;
    recipients?: string[] | null;
    subject?: string | null;
    text?: string | null;
    type?: string | null;
    message?: string | null;
    priority?: string | null;
    unitId?: string | null;
    status?: string | null;
    logLevel?: string | null;
    condition?: string | null;
    result?: boolean | null;
    sourceType?: StrategyExecutionLogDtoSourceTypeEnum;
    function?: string | null;
    period?: number | null;
    value?: string | null;
    clockType?: string | null;
    sunEvent?: StrategyExecutionLogDtoSunEventEnum;
    timezone?: string | null;
    offsetMinutes?: number | null;
    expression?: string | null;
  }[];
}

export interface StrategyExecutionLogsPaginationDto {
  data: StrategyExecutionLogDto[];
  meta: PaginationMeta;
}

export interface LocationEntity {
  /** @example "1" */
  id: string;
  /** @example "1" */
  organizationId: string;
  name: string;
  description?: string | null;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  /** @format date-time */
  updatedAt: string | null;
}

export interface DeviceDto {
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  connectionId: string;
  label: string;
  /** @example "1" */
  id: string;
  name: string;
  status: Status;
  /** @example "1" */
  categoryId: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
}

export interface ConnectionWithDevicesEntity {
  /** @example "1" */
  id: string;
  name: string;
  status: ConnectionStatus;
  /** @example "1" */
  locationId: string | null;
  protocol: Protocol;
  settings: object;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  location: LocationEntity;
  devices: DeviceDto[];
}

export interface ConnectionPaginationEntity {
  data: ConnectionWithDevicesEntity[];
  meta: PaginationMeta;
}

export interface CreateConnectionDto {
  name: string;
  settings: object;
  protocol: Protocol;
  /** @example "1" */
  locationId?: string;
  /** @example ["1"] */
  devices?: string[];
}

export interface ConnectionEntity {
  /** @example "1" */
  id: string;
  name: string;
  status: ConnectionStatus;
  /** @example "1" */
  locationId: string | null;
  protocol: Protocol;
  settings: object;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
}

export interface CreateConnectionsDto {
  connections: CreateConnectionDto[];
}

export interface BatchDto {
  count: number;
}

export interface UpdateConnectionBodyDto {
  name?: string;
  settings?: object;
  protocol?: Protocol;
  /** @example "1" */
  locationId?: string;
  /** @example ["1"] */
  devices?: string[];
}

export interface UnitGroupEntity {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  settings: object;
  /** @format int64 */
  connectionId: number;
}

export interface UnitGroupPaginationEntity {
  data: UnitGroupEntity[];
  meta: PaginationMeta;
}

export interface CreateUnitGroupDto {
  settings: object;
  /** @example ["1"] */
  units: string[];
  /** @example "1" */
  connectionId: string;
}

export interface UpdateUnitGroupBodyDto {
  settings: object;
  /** @example ["1"] */
  units?: string[];
}

export interface ConnectionInfoDto {
  protocol: string;
  status: string;
  name: string;
  id: string;
  settings: string;
}

export interface CategoryInfoDto {
  icon: string;
  description: string;
  name: string;
  id: string;
}

export interface GetDeviceResponseDto {
  /** @example "1" */
  label: string;
  /** @example "1" */
  id: string;
  name: string;
  status: Status;
  location: DeviceLocationInfoDto;
  connection: ConnectionInfoDto;
  unitsForDisplay: UnitDto[];
  category: CategoryInfoDto;
  unitsAmount: number;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
}

export interface DevicePaginationDto {
  data: GetDeviceResponseDto[];
  meta: object;
}

export interface CreateDeviceDto {
  name: string;
  label: string;
  /** @example "1" */
  connectionId: string;
  /** @example "1" */
  categoryId: string;
  /** @example "1" */
  locationId: string;
  /** @example ["1"] */
  units?: string[];
  /** @example ["1"] */
  unitsForDisplay?: string[];
}

export interface DeviceEntity {
  status: string;
  label: string;
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  categoryId: string;
  /** @example "1" */
  id: string;
  name: string;
  settings: object;
  /** @example "1" */
  connectionId: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string | null;
  /** @format date-time */
  deletedAt: string | null;
}

export interface CreateDevicesDto {
  devices: CreateDeviceDto[];
}

export interface UpdateDeviceBodyDto {
  name?: string;
  label?: string;
  /** @example "1" */
  connectionId: string;
  /** @example "1" */
  categoryId: string;
  /** @example "1" */
  locationId: string;
  /** @example ["1"] */
  units?: string[];
  /** @example ["1"] */
  unitsForDisplay?: string[];
}

export interface StatusAtTimeDto {
  status: Status;
  /** @format date-time */
  at: string;
}

export interface DevicePerformanceDto {
  data: StatusAtTimeDto[];
}

export interface MapLocationEntity {
  /** @example "1" */
  id: string;
  name: string;
  latitude: string;
  longitude: string;
}

export interface LocationInfoDto {
  amountAlertsByPriority: object;
  status: string;
  connection: boolean;
  lastAlert: object;
  issuesDetected: number;
  /** @format date-time */
  lastUpdated: string;
  /** @format int64 */
  locationId: number;
  numberOfAllDevices: number;
  numberOfDevicesWithCriticalStatus: number;
  numberOfDevicesWithWarningStatus: number;
  /** @format date-time */
  updatedAt: string;
}

export interface LocationWithConnectionsEntity {
  /** @example "1" */
  id: string;
  /** @example "1" */
  organizationId: string;
  name: string;
  description?: string | null;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  /** @format date-time */
  updatedAt: string | null;
  status: LocationInfoDto;
  connections: ConnectionEntity[];
}

export interface LocationPaginationEntity {
  data: LocationWithConnectionsEntity[];
  meta: PaginationMeta;
}

export interface CreateLocationDto {
  name: string;
  description?: string | null;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  /** @example ["1"] */
  connections: string[];
}

export interface UpdateLocationBodyDto {
  name?: string;
  description?: string | null;
  address?: string;
  phone?: string;
  latitude?: string;
  longitude?: string;
  /** @example ["1"] */
  connections?: string[];
}

export interface DashboardEnergyByDomainDto {
  /** @example 450.2 */
  consumed_kwh?: number;
  /** @example 320.1 */
  generated_kwh?: number;
}

export interface DashboardEnergyDto {
  /** @example 1200.5 */
  total_consumed_kwh: number;
  /** @example 800.3 */
  total_generated_kwh: number;
  /** @example 400.2 */
  net_kwh: number;
  /** @example 66.7 */
  self_sufficiency_pct: number;
  /** @example {"heatpump":{"consumed_kwh":450.2},"solar":{"generated_kwh":320.1}} */
  by_domain: Record<string, DashboardEnergyByDomainDto>;
}

export interface DashboardSavingsDto {
  /** @example 350 */
  total_savings_currency: number;
  /** @example "EUR" */
  currency: string;
  /** @example 120.5 */
  total_co2_savings_kg: number;
  /** @example 2.3 */
  trees_equivalent: number;
}

export interface DashboardHealthDto {
  /** @example 82.5 */
  overall_score?: number | null;
  /** @example "B" */
  overall_grade?: string | null;
}

export interface ProcessMetricDto {
  /** @example "cop" */
  name: string;
  /** @example 3.45 */
  value: number;
  /** @example "" */
  unit: string;
}

export interface DashboardProcessDto {
  /** @example 1 */
  id: number;
  /** @example "Heat Pump #1" */
  name: string;
  /** @example "heatpump" */
  domain: string;
  /** @example 85.2 */
  health_score?: number | null;
  /** @example "B" */
  health_grade?: string | null;
  metrics: ProcessMetricDto[];
  primary_metric?: ProcessMetricDto | null;
  /** @example 120.5 */
  savings_currency: number;
  /** @example [3.1,3.2,3.4,3.3] */
  trend: number[];
}

export interface DashboardAnalyticsResponseDto {
  /** @example 1 */
  location_id: number;
  /** @example "Main Building" */
  location_name: string;
  /** @example "30d" */
  period: string;
  energy: DashboardEnergyDto;
  savings: DashboardSavingsDto;
  health: DashboardHealthDto;
  processes: DashboardProcessDto[];
}

export interface OrganizationInfoDto {
  numberOfAllDevices: number;
  numberOfDevicesWithCriticalStatus: number;
  numberOfDevicesWithWarningStatus: number;
  status: string;
  numberOfAllLocations: number;
  numberOfLocationsWithCriticalStatus: number;
  numberOfLocationsWithWarningStatus: number;
  /** @format date-time */
  updatedAt: string;
}

export interface DeviceInfoDto {
  lastAlert: object;
  locationId: object;
  status: string;
  /** @format int64 */
  deviceId: number;
  /** @format date-time */
  updatedAt: string;
  /**
   * The amount of alerts by priority.
   * @example {"High":7,"Low":1,"Info":4}
   */
  amountOfAlertsByPriority: Record<string, number>;
}

export interface BackfillResponseDto {
  /** @example 1 */
  process_id: number;
  /** @example "2025-03-01" */
  from_date: string;
  /** @example "2025-03-07" */
  to_date: string;
  /** @example "1d" */
  window: BackfillResponseDtoWindowEnum;
  /** @example 6 */
  windows_computed: number;
  /** @example 12 */
  metrics_saved: number;
  /** @example [] */
  errors: string[];
}

export interface UserLogEntity {
  /** @example "1" */
  id: string;
  level: LogLevel;
  /** @example "1" */
  locationId: string;
  message: string;
  data: object;
  /** @example "1" */
  userId: string | null;
  /** @format date-time */
  createdAt: string;
}

export interface UserLogPaginationEntity {
  data: UserLogEntity[];
  meta: PaginationMeta;
}

export interface CreateUserLogDto {
  level: LogLevel;
  data: object;
  message: string;
  /** @example "1" */
  userId: string;
}

export interface ExtendedReport {
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  description: string | null;
  /** @example "1" */
  createdByUserId: string;
  type: ReportType;
  analyticsSettings?: Record<string, any>;
  locations: string[];
  gadgets: GadgetDto[];
}

export interface ExtendedDashboardToReports {
  id: string;
  /** @example "1" */
  locationId: string;
  type: DashboardType;
  referenceId: string;
  position: number;
  size: ReportSize;
  report: ExtendedReport;
}

export interface PostReportsDto {
  type: DashboardType;
  referenceId: number;
  reportId: number;
  position: number;
  /** @example "Small" */
  size: ReportSize;
}

export interface PatchReportsDto {
  position: number;
  /** @example "Small" */
  size: ReportSize;
}

export interface OrganizationDto {
  id: string;
  name: string;
  isFirstStart: boolean;
  status: OrganizationInfoDto;
  /** @example "en_US" */
  locale: string;
  homeLocationId: string | null;
  locationPageDefaultTab: LocationPageDefaultTab;
}

export interface UpdateOrganizationDto {
  /** @maxLength 255 */
  name?: string;
  /**
   * @maxLength 6
   * @example "en-US"
   */
  locale?: string;
  /** @example "1" */
  homeLocationId?: string | null;
  locationPageDefaultTab?: LocationPageDefaultTab;
}

export interface CategoryDto {
  amountOfDevices: number;
  /**
   * The amount of alerts by priority.
   * @example {"High":7,"Low":1,"Info":4}
   */
  amountOfAlertsByPriority: Record<string, number>;
  /** @example "1" */
  id: string;
  /** @example "1" */
  locationId: string;
  name: string;
  description: string;
  icon: string;
}

export interface CategoriesDto {
  data: CategoryDto[];
  meta: object;
}

export interface CreateCategoryDto {
  /** @example "Category name" */
  name: string;
  /** @example "1" */
  locationId: string;
  /** @example "Category description" */
  description: string;
  /**
   * Material UI icon name
   * @example "AcUnitIcon"
   */
  icon: string;
}

export interface BaseLocationDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  organizationId: string;
  name: string;
  description?: object;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
}

export interface ExtendedGroupDto {
  id: string;
  name: string;
  description?: string;
  locations: BaseLocationDto[];
  users: BaseUserDto[];
}

export interface CreateGroupDto {
  /** The name of the group */
  name: string;
  /** The description of the group */
  description: string;
  /** Array of user IDs to be added to the group */
  users: string[];
  /** Array of location IDs associated with the group */
  locations: string[];
}

export interface UpdateGroupDto {
  /** The name of the group */
  name?: string;
  /** The description of the group */
  description?: string;
  /** Array of user IDs to be added to the group */
  users?: string[];
  /** Array of location IDs associated with the group */
  locations?: string[];
}

export interface MlRecentAnomalyDto {
  unitId: string;
  timestamp: string;
  score: object | null;
  severity: object | null;
  method: object | null;
  explain: object | null;
  value: number;
}

export interface MlAnalyticsSummaryDto {
  totalUnits: number;
  activeProfiles: number;
  recentAnomalyCount: number;
}

export interface MlAnalyticsResponseDto {
  profiles: Record<string, object>;
  recentAnomalies: MlRecentAnomalyDto[];
  summary: MlAnalyticsSummaryDto;
}

export interface ProcessListItemDto {
  /** @example "1" */
  id: string;
  name: string;
  description?: object;
  domain: Domain;
  status: ProcessStatus;
  /** @example "1" */
  locationId: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  _count: object;
}

export interface ProcessPaginationDto {
  data: ProcessListItemDto[];
  meta: object;
}

export interface DeviceSummaryDto {
  /** @example "1" */
  id: string;
  name: string;
}

export interface UnitSummaryDto {
  /** @example "1" */
  id: string;
  name: string;
  measurement: string;
  value?: string | null;
  /** @format date-time */
  valueUpdatedAt?: string | null;
  device?: DeviceSummaryDto | null;
}

export interface ProcessUnitResponseDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  unitId: string;
  role: string;
  sortOrder: number;
  config: object;
  unit?: UnitSummaryDto;
}

export interface ProcessResponseDto {
  /** @example "1" */
  id: string;
  name: string;
  description?: object;
  domain: Domain;
  status: ProcessStatus;
  domainConfig: object;
  operationalConfig: object;
  businessConfig: object;
  analyticsConfig: object;
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  organizationId: string;
  /** @format date-time */
  commissionedAt?: string | null;
  /** @format date-time */
  dataStartAt?: string | null;
  /** @format date-time */
  lastOverhaulAt?: string | null;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt?: string | null;
  processUnits?: ProcessUnitResponseDto[];
}

export interface CreateProcessDto {
  name: string;
  description?: string;
  domain: Domain;
  /** @default {} */
  domainConfig?: object;
  /** @default {} */
  operationalConfig?: object;
  /** @default {} */
  businessConfig?: object;
  /** @default {} */
  analyticsConfig?: object;
  /** @example "1" */
  locationId: string;
  /** @example "1" */
  organizationId: string;
  commissionedAt?: string;
  dataStartAt?: string;
  lastOverhaulAt?: string;
}

export interface UpdateProcessBodyDto {
  name?: string;
  description?: string;
  status?: ProcessStatus;
  domainConfig?: object;
  operationalConfig?: object;
  businessConfig?: object;
  analyticsConfig?: object;
  commissionedAt?: string;
  dataStartAt?: string;
  lastOverhaulAt?: string;
}

export interface DuplicateProcessBodyDto {
  /** Name for the duplicated process. Defaults to "<original name> (copy)" */
  name?: string;
  /**
   * Whether to copy process units. Defaults to true
   * @default true
   */
  includeUnits?: boolean;
}

export interface AddProcessUnitDto {
  /** @example "1" */
  unitId: string;
  /** @example "supply_temp" */
  role: string;
  /** @default 0 */
  sortOrder?: number;
  /** @default {} */
  config?: object;
}

export interface UpdateProcessUnitDto {
  /** @example "return_temp" */
  role?: string;
  sortOrder?: number;
  config?: object;
}

export interface CreateProcessEventDto {
  /**
   * @maxLength 64
   * @example "maintenance"
   */
  eventType: string;
  /** @default {} */
  payload?: object;
  /**
   * @format date-time
   * @example "2026-02-28T12:00:00Z"
   */
  occurredAt: string;
}

export interface ProcessEventResponseDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  processId: string;
  /** @example "maintenance" */
  eventType: string;
  payload: object;
  /** @format date-time */
  occurredAt: string;
  /** @format date-time */
  createdAt: string;
}

export interface ProcessEventPaginationDto {
  data: ProcessEventResponseDto[];
  meta: object;
}

export interface AnalyticsResultResponseDto {
  /** @example "1" */
  id: string;
  /** @example "1" */
  processId: string;
  /** @example "cop" */
  metricName: string;
  /** @example 4.2 */
  value: number;
  metadata: object;
  /** @format date-time */
  periodStart: string;
  /** @format date-time */
  periodEnd: string;
  /** @format date-time */
  calculatedAt: string;
}

export interface AnalyticsResultPaginationDto {
  data: AnalyticsResultResponseDto[];
  meta: object;
}

/** Type of the edge connection */
export enum EdgeDtoTypeEnum {
  True = "true",
  False = "false",
  Failure = "failure",
}

export enum StrategyExecutionLogDtoOperationTypeEnum {
  Notification = "Notification",
  Alert = "Alert",
  Condition = "Condition",
  AlwaysTrue = "AlwaysTrue",
  AnotherUnitValue = "AnotherUnitValue",
  Log = "Log",
  ClockCondition = "ClockCondition",
  SunEvent = "SunEvent",
  UpdateParameter = "UpdateParameter",
  NotificationWithAlert = "NotificationWithAlert",
}

export enum StrategyExecutionLogDtoSourceTypeEnum {
  Basic = "Basic",
  Calculated = "Calculated",
}

export enum StrategyExecutionLogDtoSunEventEnum {
  Sunrise = "sunrise",
  Sunset = "sunset",
}

/** @example "1d" */
export enum BackfillResponseDtoWindowEnum {
  Value1D = "1d",
  Value7D = "7d",
}

export enum LocationsControllerGetAnalyticsSummaryParamsPeriodEnum {
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

export enum LocationsControllerGetDashboardAnalyticsParamsPeriodEnum {
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

export enum LocationsControllerGetAnalyticsReportParamsPeriodEnum {
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

export enum LocationsControllerGetAnalyticsReportParamsLocaleEnum {
  En = "en",
  Ru = "ru",
}

/** @example "7d" */
export enum AnalyticsProxyControllerGetMetricsParamsPeriodEnum {
  Value1D = "1d",
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "30d" */
export enum AnalyticsProxyControllerGetCorrelationsParamsPeriodEnum {
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "7d" */
export enum AnalyticsProxyControllerGetDiagnosticsParamsPeriodEnum {
  Value1D = "1d",
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "7d" */
export enum AnalyticsProxyControllerGetContextParamsPeriodEnum {
  Value1D = "1d",
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "90d" */
export enum AnalyticsProxyControllerGetMvBaselineParamsPeriodEnum {
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "7d" */
export enum AnalyticsProxyControllerPostComputeParamsPeriodEnum {
  Value1D = "1d",
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

export enum AnalyticsProxyControllerGetAiAnalysisParamsLocaleEnum {
  En = "en",
  Ru = "ru",
}

/** @example "30d" */
export enum AnalyticsProxyControllerGetReportParamsPeriodEnum {
  Value7D = "7d",
  Value30D = "30d",
  Value90D = "90d",
}

/** @example "en" */
export enum AnalyticsProxyControllerGetReportParamsLocaleEnum {
  En = "en",
  Ru = "ru",
}

/**
 * Window size per iteration
 * @example "1d"
 */
export enum AnalyticsProxyControllerPostBackfillParamsWindowEnum {
  Value1D = "1d",
  Value7D = "7d",
}
