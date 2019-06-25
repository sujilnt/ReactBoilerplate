module.exports={
	"name": "ReactBoilerplate",
	"bail": 1,
	"verbose": true,
	"collectCoverageFrom": [
		"src/**/*.{js,jsx,ts,tsx}",
		"!<rootDir>/node_modules/",
		"!<rootDir>/webpack/"
	],
	"coverageThreshold": {
		"global" : {
			"branches" : 50,
			"functions" : 90,
			"lines" : 90,
			"statements" : 90
		}
	},
	"moduleDirectories": ["node_modules", "src"],
	"transformIgnorePatterns": [`/node_modules/`],
	"transform": {
		"^.+\\.(js|jsx)?$": "babel-jest",
		"^.+\\.(css)$": "identity-obj-proxy",
	},
	"moduleNameMapper": {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
		"\\.(svg)$": "<rootDir>/__mocks__/svgMockFile.js",
		"\\.(css|less)$": "identity-obj-proxy"
	}
};
