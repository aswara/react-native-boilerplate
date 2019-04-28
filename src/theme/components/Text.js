import variable from "./../variables/platform";

export default (variables = variable) => {
	const textTheme = {
		fontSize: variables.DefaultFontSize - 1,
		fontFamily: variables.fontFamily,
		color: variables.textColor,
		".note": {
			color: "#a7a7a7",
			fontSize: variables.noteFontSize,
		},
		".primary": {
			color:  variables.brandPrimary,
		},
		".bold": {
			fontWeight: "600",
		},
	};

	return textTheme;
};