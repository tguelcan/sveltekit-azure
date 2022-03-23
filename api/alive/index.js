module.exports = async function (context, req) {
	context.res = {
		body: { name: 'Func Api Alive', time: new Date() }
	};
	context.done();
};
