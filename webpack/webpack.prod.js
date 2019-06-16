const path = require('path');
module.exports=()=>({
	mode: "production",
	output : {
		filename : "[chunkhash].js"
	},resolve : {
		modules: [path.resolve(__dirname,"src"),"node_modules"]
	},
});
