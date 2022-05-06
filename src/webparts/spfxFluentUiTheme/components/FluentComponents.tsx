import { facepilePersonas, TestImages } from '@fluentui/example-data';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import { Breadcrumb, Checkbox, ChoiceGroup, ColorPicker, ComboBox, CommandBar, CommandBarButton, ContextualMenu, DatePicker, DayOfWeek, DefaultButton, DetailsList, DetailsListLayoutMode, DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle, Dropdown, Facepile, IconButton, ImageFit, INavLink, ITag, ITheme, Label, Link, MessageBar, MessageBarButton, MessageBarType, Nav, Persona, PersonaPresence, PersonaSize, Pivot, PivotItem, PrimaryButton, ProgressIndicator, Rating, RatingSize, SearchBox, SelectableOptionMenuItemType, Shimmer, Slider, SpinButton, Spinner, SpinnerSize, Stack, SwatchColorPicker, TagPicker, Text, TextField, Toggle } from "office-ui-fabric-react";
import * as React from 'react';

const stackTokens = { childrenGap: 10 };

const testTags: ITag[] = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow',
].map(item => ({ key: item, name: item }));

const listContainsTagList = (tag: ITag, tagList?: ITag[]) => {
    if (!tagList || !tagList.length || tagList.length === 0) {
        return false;
    }
    return tagList.some(compareTag => compareTag.key === tag.key);
};

const filterSuggestedTags = (filterText: string, tagList: ITag[]): ITag[] => {
    return filterText
        ? testTags.filter(
            tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0 && !listContainsTagList(tag, tagList),
        )
        : [];
};

export interface IFluentComponentsProps {
    theme: ITheme;
  }

export const FluentComponents = (props: IFluentComponentsProps) => {
    return (
        <ThemeProvider theme={props.theme}>
            <h1>Test Theme for Fluent UI Controls</h1>
            <p>This Web Part contains most, but not all, of the Fluent UI controls available for the current version (1.14) of SPFx and is intended for testing the controls with the various themes applied.</p>

            <Stack tokens={stackTokens}>
                <h2>Buttons</h2>
                <Stack horizontal tokens={stackTokens}>
                    <DefaultButton text="Standard" allowDisabledFocus disabled={false} checked={false} />
                    <PrimaryButton text="Primary" allowDisabledFocus disabled={false} checked={false} />
                    <DefaultButton text="Standard" allowDisabledFocus disabled={true} checked={false} />
                    <PrimaryButton text="Primary" allowDisabledFocus disabled={true} checked={false} />
                    <DefaultButton text="Standard" allowDisabledFocus disabled={false} checked={true} />
                    <PrimaryButton text="Primary" allowDisabledFocus disabled={false} checked={true} />
                    <DefaultButton text="Standard" allowDisabledFocus disabled={true} checked={true} />
                    <PrimaryButton text="Primary" allowDisabledFocus disabled={true} checked={true} />
                </Stack>

                <h2>CommandBarButtons</h2>
                <Stack horizontal tokens={stackTokens} styles={{ root: { height: 44 } }}>
                    <CommandBarButton iconProps={{ iconName: 'Add' }} text="New item" disabled={false} checked={false} />
                    <CommandBarButton iconProps={{ iconName: 'Add' }} text="New item" disabled={false} checked={true} />
                    <CommandBarButton iconProps={{ iconName: 'Add' }} text="New item" disabled={true} checked={false} />
                    <CommandBarButton iconProps={{ iconName: 'Add' }} text="New item" disabled={true} checked={true} />
                </Stack>

                <h2>IconButton</h2>
                <Stack horizontal tokens={stackTokens} styles={{ root: { height: 44 } }}>
                    <IconButton iconProps={{ iconName: 'Emoji2' }} disabled={false} checked={false} />
                    <IconButton iconProps={{ iconName: 'Emoji2' }} disabled={false} checked={true} />
                    <IconButton iconProps={{ iconName: 'Emoji2' }} disabled={true} checked={false} />
                    <IconButton iconProps={{ iconName: 'Emoji2' }} disabled={true} checked={true} />
                </Stack>

                <h2>Contextual Menu Button</h2>
                <Stack horizontal tokens={stackTokens}>
                    <DefaultButton
                        text="New item"
                        iconProps={{ iconName: 'Add' }}
                        menuProps={{
                            onDismiss: ev => {
                                if (ev && 'shiftKey' in ev) {
                                    ev.preventDefault();
                                }
                            },
                            items: [
                                {
                                    key: 'emailMessage',
                                    text: 'Email message',
                                    iconProps: { iconName: 'Mail' },
                                },
                                {
                                    key: 'calendarEvent',
                                    text: 'Calendar event',
                                    iconProps: { iconName: 'Calendar' },
                                },
                            ],
                            directionalHintFixed: true,
                        }}
                        menuAs={(props2) => { return <ContextualMenu {...props2} />; }}
                        allowDisabledFocus
                        disabled={false}
                        checked={false}
                    />
                </Stack>

                <h2>Checkboxes</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Checkbox label="Unchecked checkbox (uncontrolled)" />
                    <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked />
                    <Checkbox label="Disabled checkbox" disabled />
                    <Checkbox label="Disabled checked checkbox" disabled defaultChecked />
                    <Checkbox
                        label="Indeterminate checkbox which defaults to true when clicked (uncontrolled)"
                        defaultIndeterminate
                        defaultChecked={true}
                    />
                    <Checkbox label="Disabled indeterminate checkbox" disabled defaultIndeterminate />
                </Stack>

                <h2>ChoiceGroup</h2>
                <Stack horizontal tokens={stackTokens}>
                    <ChoiceGroup defaultSelectedKey="B" options={[
                        { key: 'A', text: 'Option A' },
                        { key: 'B', text: 'Option B' },
                        { key: 'C', text: 'Option C', disabled: true },
                        { key: 'D', text: 'Option D' },
                    ]} label="Pick one" required={true} />
                    <ChoiceGroup label="Pick one image" defaultSelectedKey="bar" options={[
                        { key: 'day', text: 'Day', iconProps: { iconName: 'CalendarDay' }, checked: true },
                        { key: 'week', text: 'Week', iconProps: { iconName: 'CalendarWeek' } },
                        { key: 'month', text: 'Month', iconProps: { iconName: 'Calendar' }, disabled: true },
                    ]} />
                </Stack>

                <h2>ComboBox</h2>
                <Stack horizontal tokens={stackTokens}>
                    <ComboBox
                        label="Basic single-select ComboBox"
                        options={[
                            { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'A', text: 'Option A' },
                            { key: 'B', text: 'Option B' },
                            { key: 'C', text: 'Option C' },
                            { key: 'D', text: 'Option D' },
                            { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
                            { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'E', text: 'Option E' },
                            { key: 'F', text: 'Option F', disabled: true },
                            { key: 'G', text: 'Option G' },
                            { key: 'H', text: 'Option H' },
                            { key: 'I', text: 'Option I' },
                            { key: 'J', text: 'Option J' },
                        ]}
                    />
                    <ComboBox
                        label="Basic single-select ComboBox"
                        disabled
                        options={[
                            { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'A', text: 'Option A' },
                            { key: 'B', text: 'Option B' },
                            { key: 'C', text: 'Option C' },
                            { key: 'D', text: 'Option D' },
                            { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
                            { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'E', text: 'Option E' },
                            { key: 'F', text: 'Option F', disabled: true },
                            { key: 'G', text: 'Option G' },
                            { key: 'H', text: 'Option H' },
                            { key: 'I', text: 'Option I' },
                            { key: 'J', text: 'Option J' },
                        ]}
                    />
                </Stack>

                <h2>ComboBox</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Dropdown
                        label="Basic single-select ComboBox"
                        options={[
                            { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'A', text: 'Option A' },
                            { key: 'B', text: 'Option B' },
                            { key: 'C', text: 'Option C' },
                            { key: 'D', text: 'Option D' },
                            { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
                            { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'E', text: 'Option E' },
                            { key: 'F', text: 'Option F', disabled: true },
                            { key: 'G', text: 'Option G' },
                            { key: 'H', text: 'Option H' },
                            { key: 'I', text: 'Option I' },
                            { key: 'J', text: 'Option J' },
                        ]}
                    />
                    <Dropdown
                        label="Basic single-select ComboBox"
                        disabled
                        options={[
                            { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'A', text: 'Option A' },
                            { key: 'B', text: 'Option B' },
                            { key: 'C', text: 'Option C' },
                            { key: 'D', text: 'Option D' },
                            { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
                            { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
                            { key: 'E', text: 'Option E' },
                            { key: 'F', text: 'Option F', disabled: true },
                            { key: 'G', text: 'Option G' },
                            { key: 'H', text: 'Option H' },
                            { key: 'I', text: 'Option I' },
                            { key: 'J', text: 'Option J' },
                        ]}
                    />
                </Stack>

                <h2>Label</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Label>I'm a Label</Label>
                    <Label disabled>I'm a disabled Label</Label>
                    <Label required>I'm a required Label</Label>
                </Stack>

                <h2>Links</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Text>
                        When a link has an href,{' '}
                        <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
                            it renders as an anchor tag.
                        </Link>{' '}
                        Without an href,{' '}
                        <Link onClick={() => { alert("onClick"); }} underline>
                            the link is rendered as a button
                        </Link>
                        . You can also use the disabled attribute to create a{' '}
                        <Link disabled href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link" underline>
                            disabled link.
                        </Link>
                    </Text>
                    <Text>
                        It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons
                        are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by
                        making a button with an unstyled variant and adding the img content and href source to that.
                    </Text>
                </Stack>

                <h2>Rating</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Rating
                        max={5}
                        size={RatingSize.Large}
                        rating={2}
                        ariaLabel="Large stars"
                        ariaLabelFormat="{0} of {1} stars"
                    />
                </Stack>

                <h2>SearchBox</h2>
                <Stack horizontal tokens={stackTokens}>
                    <SearchBox placeholder="Search" />
                    <SearchBox placeholder="Search" disabled />
                </Stack>

                <h2>Slider</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Slider label="Slider example" />
                    <Slider label="Snapping slider example" min={0} max={50} step={10} defaultValue={20} showValue snapToStep />
                    <Slider label="Disabled example" min={50} max={500} step={50} defaultValue={300} showValue disabled />
                </Stack>

                <h2>SpinButton</h2>
                <Stack horizontal tokens={stackTokens}>
                    <SpinButton
                        label="Basic SpinButton"
                        defaultValue="0"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                    />
                    <SpinButton
                        label="Disabled SpinButton"
                        disabled={true}
                        defaultValue="25"
                        min={0}
                        max={100}
                        step={1}
                        incrementButtonAriaLabel="Increase value by 1"
                        decrementButtonAriaLabel="Decrease value by 1"
                    />
                </Stack>

                <h2>TextField</h2>
                <Stack horizontal tokens={stackTokens}>
                    <TextField label="Standard" />
                    <TextField label="Disabled" disabled defaultValue="I am disabled" />
                </Stack>

                <h2>Toggle</h2>
                <Stack tokens={stackTokens}>
                    <Toggle label="Enabled and checked" defaultChecked onText="On" offText="Off" />
                    <Toggle label="Enabled and unchecked" onText="On" offText="Off" />
                    <Toggle label="Disabled and checked" defaultChecked disabled onText="On" offText="Off" />
                    <Toggle label="Disabled and unchecked" disabled onText="On" offText="Off" />
                    <Toggle label="With inline label" inlineLabel onText="On" offText="Off" />
                    <Toggle label="Disabled with inline label" inlineLabel disabled onText="On" offText="Off" />
                    <Toggle label="With inline label and without onText and offText" inlineLabel />
                    <Toggle label="Disabled with inline label and without onText and offText" inlineLabel disabled />
                    <Toggle
                        label="Enabled and checked (ARIA 1.0 compatible)"
                        defaultChecked
                        onText="On"
                        offText="Off"
                        role="checkbox"
                    />
                </Stack>

                {/* <h2>Calendar</h2>
          <Stack tokens={stackTokens}>
            <Calendar
              isMonthPickerVisible={true}
              dateRangeType={DateRangeType.Day}
              showGoToToday={true}
              value={new Date()}
              firstDayOfWeek={DayOfWeek.Sunday}
              highlightCurrentMonth={true}
              highlightSelectedMonth={true}
              isDayPickerVisible={true}
              showMonthPickerAsOverlay={true}
              showWeekNumbers={true}
              showSixWeeksByDefault={true}
            />
          </Stack> */}

                <h2>ColorPicker</h2>
                <Stack tokens={stackTokens}>
                    <ColorPicker color={"red"} alphaType={"alpha"} showPreview={true} />
                </Stack>

                <h2>DatePicker</h2>
                <Stack horizontal tokens={stackTokens}>
                    <DatePicker
                        label="DatePicker"
                        firstDayOfWeek={DayOfWeek.Sunday}
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                    />
                    <DatePicker
                        disabled
                        label="Disabled (with label)"
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                    />
                </Stack>

                <h2>TagPicker</h2>
                <Stack horizontal tokens={stackTokens}>
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        onResolveSuggestions={filterSuggestedTags}
                        getTextFromItem={(item: ITag) => item.name}
                        pickerSuggestionsProps={{
                            suggestionsHeaderText: 'Suggested tags',
                            noResultsFoundText: 'No color tags found',
                        }}
                        itemLimit={2}
                        disabled={false}
                        inputProps={{
                            ...{
                                onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                                onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                            },
                            id: 'picker1',
                        }}
                    />
                    <TagPicker
                        removeButtonAriaLabel="Remove"
                        onResolveSuggestions={filterSuggestedTags}
                        itemLimit={2}
                        disabled={true}
                        inputProps={{
                            ...{
                                onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                                onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                            },
                            id: 'picker2',
                        }}
                    />
                </Stack>

                <h2>SwatchColorPicker</h2>
                <Stack horizontal tokens={stackTokens}>
                    <SwatchColorPicker
                        columnCount={5}
                        cellShape={'circle'}
                        colorCells={[
                            { id: 'a', label: 'red', color: '#a4262c' },
                            { id: 'b', label: 'orange', color: '#ca5010' },
                            { id: 'c', label: 'orangeYellow', color: '#986f0b' },
                            { id: 'd', label: 'yellowGreen', color: '#8cbd18' },
                            { id: 'e', label: 'green', color: '#0b6a0b' },
                            { id: 'f', label: 'cyan', color: '#038387' },
                            { id: 'g', label: 'cyanBlue', color: '#004e8c' },
                            { id: 'h', label: 'magenta', color: '#881798' },
                            { id: 'i', label: 'magentaPink', color: '#9b0062' },
                            { id: 'j', label: 'black', color: '#000000' },
                            { id: 'k', label: 'gray', color: '#7a7574' },
                            { id: 'l', label: 'gray20', color: '#69797e' },
                        ]}
                    />
                </Stack>

                <h2>DetailsList</h2>
                <Stack horizontal tokens={stackTokens}>
                    <DetailsList
                        items={[
                            { name: "AAA", value: "123" },
                            { name: "BBB", value: "456" },
                            { name: "CCC", value: "789" },
                        ]}
                        columns={[
                            { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
                            { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
                        ]}
                        setKey="set"
                        layoutMode={DetailsListLayoutMode.justified}
                        selectionPreservedOnEmptyClick={true}
                        ariaLabelForSelectionColumn="Toggle selection"
                        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                        checkButtonAriaLabel="select row"
                    />
                </Stack>

                <h2>DocumentCard</h2>
                <Stack horizontal tokens={stackTokens}>
                    <DocumentCard
                        aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
                        onClickHref="http://bing.com">
                        <DocumentCardPreview {...{
                            previewImages: [
                                {
                                    name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
                                    linkProps: {
                                        href: 'http://bing.com',
                                        target: '_blank',
                                    },
                                    previewImageSrc: TestImages.documentPreview,
                                    iconSrc: TestImages.iconPpt,
                                    imageFit: ImageFit.cover,
                                    width: 318,
                                    height: 196,
                                },
                            ],
                        }} />
                        <DocumentCardTitle
                            title={
                                'Large_file_name_with_underscores_used_to_separate_all_of_the_words_and_there_are_so_many_words_' +
                                'it_needs_truncating.pptx'
                            }
                            shouldTruncate
                        />
                        <DocumentCardActivity activity="Created a few minutes ago" people={[{ name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale }]} />
                    </DocumentCard>
                </Stack>

                <h2>Facepile</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Facepile
                        personaSize={PersonaSize.size32}
                        personas={facepilePersonas.slice(0, 4)}
                        ariaDescription="To move through the items use left and right arrow keys."
                        ariaLabel="Example list of Facepile personas"
                    />
                </Stack>

                <h2>Persona</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Persona
                        {...{
                            imageUrl: TestImages.personaFemale,
                            imageInitials: 'AL',
                            text: 'Annie Lindqvist',
                            secondaryText: 'Software Engineer',
                            tertiaryText: 'In a meeting',
                            optionalText: 'Available at 4:00pm',
                        }}
                        presence={PersonaPresence.none}
                        imageAlt="Annie Lindqvist"
                    />
                    <Persona
                        {...{
                            imageUrl: TestImages.personaFemale,
                            imageInitials: 'AL',
                            text: 'Annie Lindqvist',
                            secondaryText: 'Software Engineer',
                            tertiaryText: 'In a meeting',
                            optionalText: 'Available at 4:00pm',
                        }}
                        presence={PersonaPresence.busy}
                        imageAlt="Annie Lindqvist, status is busy"
                    />
                </Stack>

                <h2>Breadcrumb</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Breadcrumb
                        items={[
                            { text: 'Files', key: 'Files', href: '#/controls/web/breadcrumb' },
                            { text: 'Folder 1', key: 'f1', href: '#/controls/web/breadcrumb' },
                            { text: 'Folder 2', key: 'f2', href: '#/controls/web/breadcrumb' },
                            { text: 'Folder 3', key: 'f3', href: '#/controls/web/breadcrumb' },
                            { text: 'Folder 4 (non-clickable)', key: 'f4' },
                            { text: 'Folder 5', key: 'f5', href: '#/controls/web/breadcrumb', isCurrentItem: true },
                        ]}
                        maxDisplayedItems={3}
                        ariaLabel="Breadcrumb with items rendered as links"
                        overflowAriaLabel="More links"
                    />
                </Stack>

                <h2>CommandBar</h2>
                <Stack horizontal tokens={stackTokens}>
                    <CommandBar
                        items={[
                            {
                                key: 'newItem',
                                text: 'New',
                                cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
                                iconProps: { iconName: 'Add' },
                                subMenuProps: {
                                    items: [
                                        {
                                            key: 'emailMessage',
                                            text: 'Email message',
                                            iconProps: { iconName: 'Mail' },
                                            ['data-automation-id']: 'newEmailButton', // optional
                                        },
                                        {
                                            key: 'calendarEvent',
                                            text: 'Calendar event',
                                            iconProps: { iconName: 'Calendar' },
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'upload',
                                text: 'Upload',
                                iconProps: { iconName: 'Upload' },
                                subMenuProps: {
                                    items: [
                                        {
                                            key: 'uploadfile',
                                            text: 'File',
                                            preferMenuTargetAsEventTarget: true,
                                            onClick: () => console.log('onClick')
                                        },
                                        {
                                            key: 'uploadfolder',
                                            text: 'Folder',
                                            preferMenuTargetAsEventTarget: true,
                                            onClick: () => console.log('onClick')
                                        },
                                    ],
                                },
                            },
                            {
                                key: 'share',
                                text: 'Share',
                                iconProps: { iconName: 'Share' },
                                onClick: () => console.log('onClick')
                            },
                            {
                                key: 'download',
                                text: 'Download',
                                iconProps: { iconName: 'Download' },
                                onClick: () => console.log('onClick')
                            },
                        ]}
                        overflowItems={[
                            { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
                            { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
                            { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
                        ]}
                        overflowButtonProps={{ ariaLabel: 'More commands' }}
                        farItems={[
                            {
                                key: 'tile',
                                text: 'Grid view',
                                // This needs an ariaLabel since it's icon-only
                                ariaLabel: 'Grid view',
                                iconOnly: true,
                                iconProps: { iconName: 'Tiles' },
                                onClick: () => console.log('Tiles'),
                            },
                            {
                                key: 'info',
                                text: 'Info',
                                // This needs an ariaLabel since it's icon-only
                                ariaLabel: 'Info',
                                iconOnly: true,
                                iconProps: { iconName: 'Info' },
                                onClick: () => console.log('Info'),
                            },
                        ]}
                        ariaLabel="Inbox actions"
                    />
                </Stack>

                <h2>Nav</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Nav
                        onLinkClick={(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => { alert(item?.name); }}
                        selectedKey="key3"
                        ariaLabel="Nav basic example"
                        groups={[
                            {
                                links: [
                                    {
                                        name: 'Home',
                                        url: 'http://example.com',
                                        expandAriaLabel: 'Expand Home section',
                                        collapseAriaLabel: 'Collapse Home section',
                                        links: [
                                            {
                                                name: 'Activity',
                                                url: 'http://msn.com',
                                                key: 'key1',
                                                target: '_blank',
                                            },
                                            {
                                                name: 'MSN',
                                                url: 'http://msn.com',
                                                disabled: true,
                                                key: 'key2',
                                                target: '_blank',
                                            },
                                        ],
                                        isExpanded: true,
                                    },
                                    {
                                        name: 'Documents',
                                        url: 'http://example.com',
                                        key: 'key3',
                                        isExpanded: true,
                                        target: '_blank',
                                    },
                                    {
                                        name: 'Pages',
                                        url: 'http://msn.com',
                                        key: 'key4',
                                        target: '_blank',
                                    },
                                    {
                                        name: 'Notebook',
                                        url: 'http://msn.com',
                                        key: 'key5',
                                        disabled: true,
                                    },
                                    {
                                        name: 'Communication and Media',
                                        url: 'http://msn.com',
                                        key: 'key6',
                                        target: '_blank',
                                    },
                                    {
                                        name: 'News',
                                        url: 'http://cnn.com',
                                        icon: 'News',
                                        key: 'key7',
                                        target: '_blank',
                                    },
                                ],
                            },
                        ]}
                    />
                </Stack>

                <h2>Pivot</h2>
                <Stack horizontal tokens={stackTokens}>
                    <Pivot aria-label="Basic Pivot Example">
                        <PivotItem
                            headerText="My Files"
                            headerButtonProps={{
                                'data-order': 1,
                                'data-title': 'My Files Title',
                            }}
                        >
                            <Label>Pivot #1</Label>
                        </PivotItem>
                        <PivotItem headerText="Recent">
                            <Label>Pivot #2</Label>
                        </PivotItem>
                        <PivotItem headerText="Shared with me">
                            <Label>Pivot #3</Label>
                        </PivotItem>
                    </Pivot>
                </Stack>

                <h2>MessageBars</h2>
                <Stack tokens={stackTokens}>
                    <MessageBar
                        messageBarType={MessageBarType.blocked}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                    <MessageBar
                        messageBarType={MessageBarType.error}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                    <MessageBar
                        messageBarType={MessageBarType.info}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                    <MessageBar
                        messageBarType={MessageBarType.severeWarning}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                    <MessageBar
                        messageBarType={MessageBarType.success}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                    <MessageBar
                        messageBarType={MessageBarType.warning}
                        actions={<div> <MessageBarButton>Yes</MessageBarButton> <MessageBarButton>No</MessageBarButton> </div>}
                        isMultiline={true}>
                        MessageBar with single line and action buttons.
                        <Link href="www.bing.com" target="_blank" underline>
                            Visit our website.
                        </Link>
                    </MessageBar>
                </Stack>

                <h2>ProgressIndicators</h2>
                <Stack tokens={stackTokens}>
                    <ProgressIndicator label="Example title" description="Example description" percentComplete={0.5} />
                    <ProgressIndicator label="Example title" description="Example description" />
                </Stack>

                <h2>Shimmer</h2>
                <Stack tokens={stackTokens}>
                    <Shimmer />
                    <Shimmer width="75%" />
                    <Shimmer width="50%" />
                </Stack>

                <h2>Spinner</h2>
                <Stack tokens={stackTokens}>
                    <Label>Large spinner</Label>
                    <Spinner size={SpinnerSize.large} />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
};