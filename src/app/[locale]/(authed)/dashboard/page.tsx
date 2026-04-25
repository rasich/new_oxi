'use client'

import {
	ButtonGroup,
	Card,
	Checkbox,
	Description,
	Dropdown,
	Label,
	ListBox,
	Modal,
	NumberField,
	Radio,
	RadioGroup,
	Select,
	Skeleton,
	Tabs,
} from '@heroui/react'
import { Ellipsis, PenLine, Trash2 } from 'lucide-react'

import Button from '@/ui/Button/Button'
import { DateAndTimeRangePicker } from '@/ui/DateRangePicker/DateRangePicker'

export default function Home() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-end justify-between flex-wrap gap-4">
				<div className="flex items-end gap-4 flex-wrap">
					<DateAndTimeRangePicker />

					<ButtonGroup variant="tertiary">
						<Button>Day</Button>
						<Button>
							<ButtonGroup.Separator />
							Week
						</Button>
						<Button>
							<ButtonGroup.Separator />
							Month
						</Button>
						<Button>
							<ButtonGroup.Separator />
							Year
						</Button>
					</ButtonGroup>
				</div>

				<Modal>
					<Button variant="secondary">Add Report</Button>
					<Modal.Backdrop>
						<Modal.Container>
							<Modal.Dialog>
								<Modal.CloseTrigger />
								<Modal.Header>
									<Modal.Heading>Add Report</Modal.Heading>
								</Modal.Header>
								<Modal.Body>
									<Tabs className="w-full max-w-md flex flex-col gap-6">
										<Tabs.ListContainer>
											<Tabs.List aria-label="Tabs with disabled">
												<Tabs.Tab id="existingReport">
													Existing Report
													<Tabs.Indicator />
												</Tabs.Tab>
												<Tabs.Tab id="analyticsReport">
													Analytics Report
													<Tabs.Indicator />
												</Tabs.Tab>
											</Tabs.List>
										</Tabs.ListContainer>

										<Tabs.Panel
											className="w-full min-h-[300px] flex flex-col gap-6"
											id="existingReport"
										>
											<Select placeholder="Report" variant="secondary">
												<Label>Report</Label>
												<Select.Trigger>
													<Select.Value />
													<Select.Indicator />
												</Select.Trigger>
												<Select.Popover>
													<ListBox>
														<ListBox.Item id="florida" textValue="Florida">
															Florida
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="delaware" textValue="Delaware">
															Delaware
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="california" textValue="California">
															California
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="texas" textValue="Texas">
															Texas
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="new-york" textValue="New York">
															New York
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="washington" textValue="Washington">
															Washington
															<ListBox.ItemIndicator />
														</ListBox.Item>
													</ListBox>
												</Select.Popover>
											</Select>

											<div className="flex flex-col gap-4">
												<Label>Size</Label>
												<RadioGroup
													defaultValue="small"
													name="size"
													orientation="horizontal"
													className="grid grid-cols-3"
													variant="secondary"
												>
													<Radio value="small">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Small</Label>
															<Description>1/3 width</Description>
														</Radio.Content>
													</Radio>
													<Radio value="medium">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Medium</Label>
															<Description>1/2 width</Description>
														</Radio.Content>
													</Radio>
													<Radio value="large">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Large</Label>
															<Description>Full width</Description>
														</Radio.Content>
													</Radio>
												</RadioGroup>
											</div>

											<NumberField
												className="w-full"
												defaultValue={1024}
												minValue={0}
												name="width"
												variant="secondary"
											>
												<Label>Position</Label>
												<NumberField.Group>
													<NumberField.DecrementButton />
													<NumberField.Input />
													<NumberField.IncrementButton />
												</NumberField.Group>
											</NumberField>
										</Tabs.Panel>

										<Tabs.Panel
											className="w-full min-h-[300px] flex flex-col gap-6"
											id="analyticsReport"
										>
											<Checkbox id="basic-terms" variant="secondary">
												<Checkbox.Control>
													<Checkbox.Indicator />
												</Checkbox.Control>
												<Checkbox.Content>
													<Label htmlFor="basic-terms">All processes</Label>
												</Checkbox.Content>
											</Checkbox>

											<Select placeholder="Default period" variant="secondary">
												<Label>Default period</Label>
												<Select.Trigger>
													<Select.Value />
													<Select.Indicator />
												</Select.Trigger>
												<Select.Popover>
													<ListBox>
														<ListBox.Item id="7" textValue="Florida">
															7 days
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="30" textValue="Delaware">
															30 days
															<ListBox.ItemIndicator />
														</ListBox.Item>
														<ListBox.Item id="90" textValue="California">
															90 days
															<ListBox.ItemIndicator />
														</ListBox.Item>
													</ListBox>
												</Select.Popover>
											</Select>

											<div className="flex flex-col gap-4">
												<Label>Size</Label>
												<RadioGroup
													defaultValue="small"
													name="size"
													orientation="horizontal"
													className="grid grid-cols-3"
													variant="secondary"
												>
													<Radio value="small">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Small</Label>
															<Description>1/3 width</Description>
														</Radio.Content>
													</Radio>
													<Radio value="medium">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Medium</Label>
															<Description>1/2 width</Description>
														</Radio.Content>
													</Radio>
													<Radio value="large">
														<Radio.Control>
															<Radio.Indicator />
														</Radio.Control>
														<Radio.Content>
															<Label>Large</Label>
															<Description>Full width</Description>
														</Radio.Content>
													</Radio>
												</RadioGroup>
											</div>

											<NumberField
												className="w-full"
												defaultValue={1024}
												minValue={0}
												name="width"
												variant="secondary"
											>
												<Label>Position</Label>
												<NumberField.Group>
													<NumberField.DecrementButton />
													<NumberField.Input />
													<NumberField.IncrementButton />
												</NumberField.Group>
											</NumberField>
										</Tabs.Panel>
									</Tabs>
								</Modal.Body>

								<Modal.Footer>
									<Button slot="close" variant="secondary">
										Cancel
									</Button>
									<Button slot="close" variant="primary">
										Ok
									</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</Modal.Container>
					</Modal.Backdrop>
				</Modal>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{[1, 2, 3, 4, 5, 6].map((_, i) => (
					<Card key={i} className="h-[400px]">
						<Card.Header>
							<Card.Title className="flex-center-between ">
								<div className="font-w_regular text-s_body text-balance">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, eius.
								</div>

								<Dropdown>
									<Button isIconOnly className="shrink-0" variant="ghost">
										<Ellipsis />
									</Button>
									<Dropdown.Popover>
										<Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
											<Dropdown.Item id="Modify" textValue="Modify">
												<Label className="flex items-center gap-2">
													<PenLine size={18} />
													Modify
												</Label>
											</Dropdown.Item>
											<Dropdown.Item id="Remove" textValue="Remove" variant="danger">
												<Label className="flex items-center gap-2">
													<Trash2 size={18} />
													Remove
												</Label>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown.Popover>
								</Dropdown>
							</Card.Title>
						</Card.Header>
						<Card.Content>
							<Skeleton className="w-full h-full rounded-xl" />
						</Card.Content>
					</Card>
				))}
			</div>
		</div>
	)
}
