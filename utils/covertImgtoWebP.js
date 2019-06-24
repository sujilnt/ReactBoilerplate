const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const fileName  = [process.argv.pop()] || ['assets/*.{jpg,png}'];


imagemin(fileName, 'assets/', {
	use: [
		imageminWebp({quality: 50})
	]
}).then(() => {
	/*eslint-disable */
	console.log('Images optimized');
	/*eslint-enable */
});

