export interface IWeatherWidgetIoWidget
{
    /**
     * @description
     * Forecast7 URL built from location-finder that includes location, language, and units.
     */
    href: string;
    /**
     * @description
     * The first line of the label, e.g. the name of location. You can type anything you like, but try to keep it short (preferably less than 15 characters)
     */
    dataLabel_1?: string;
    /**
     * @description
     * The second line of the label. You can type anything you like, but try to keep it short (preferably less than 15 characters)
     */
    dataLabel_2?: string;
    /**
     * @description
     * Select a font for the widget. Two types of fonts are available: (1) Stacks with "web safe" font-families, i.e. fonts that are usually found on most operating systems, and (2) Google fonts. For the "web safe" fonts only the first font of the stack is shown and if a user doesn't have installed on his/her system this font, then a fallback will be used.
     *
     * @default
     * Tahoma
     */
    dataFont?: string;
    /**
     * @description
     * Three different icon sets are currently available. They are all SVG and will therefore always look sharp. One of the icon sets is animated.
     *
     * @default
     * Iconvault
     */
    dataIcons?: string;
    /**
     * @description
     * The weather widget can display the current weather, a weather forecast for the next few days, or both the current weather and the weather forecast.
     *
     * @default
     * Both
     */
    dataMode?: string;
    /**
     * @description
     * The number of days to be shown in the weather forecast (not applicable when only the current weather is displayed)
     *
     * @default
     * 7
     */
    dataDays?: number;
    /**
     * @description
     * //TODO
     */
    dataTheme?: string;
    /**
     * @description
     * The background color of the widget. With an image based theme the background color is usually removed so that the image behind it can be seen. You can also make the background, semi-transparent by lowering its opacity in order to blend and colorize whatever lies behind it.
     *
     * @default
     * None
     */
    dataBasecolor?: string;
    /**
     * @description
     * The color for the drop shadow behind text and icons. This is sometimes useful to visually separate the text and icons from the background (most useful when the background is an image or when text and icons have a similar color to the background)
     *
     * @default
     * None
     */
    dataShadow?: string;
    /**
     * @description
     * This is the color background for all the odd forecast day columns (i.e. 1, 3, 5, 7). Setting this to a color (e.g. black or white) with low opacity makes it easy to blend the accent with the background color.
     *
     * @default
     * None
     */
    dataAccent?: string;
    /**
     * @description
     * The text color is used for the location labels, the current temperature, the current weather description and the day names. It is also used as the default color for all text and icon colors.
     *
     * @default
     * #000000 (black)
     */
    dataTextcolor?: string;
    /**
     * @description
     * The color for the high temperature.
     *
     * @default
     * Text color
     */
    dataHighcolor?: string;
    /**
     * @description
     * The color for the low temperature.
     *
     * @default
     * Text color
     */
    dataLowcolor?: string;
    /**
     * @description
     * The color of the sun **and** the thunder in the icons.
     *
     * @default
     * Text color
     */
    dataSuncolor?: string;
    /**
     * @description
     * The color of the moon in the icons.
     *
     * @default
     * Text color
     */
    dataMooncolor?: string;
    /**
     * @description
     * The color of the cloud, fog and wind icons.
     *
     * @default
     * Text color
     */
    dataCloudcolor?: string;
    /**
     * @description
     * The color for the fill (inside part) of the cloud icons. Applicable only for the animated icons (Climacons Animated). Static icons have no cloud fill.
     *
     * @default
     * Text color
     */
    dataCloudfill?: string;
    /**
     * @description
     * The color of the rain drops in the icons.
     *
     * @default
     * Text color
     */
    dataRaincolor?: string;
    /**
     * @description
     * The color for the snow and hail in the icons.
     *
     * @default
     * Text color
     */
    dataSnowcolor?: string;
}
