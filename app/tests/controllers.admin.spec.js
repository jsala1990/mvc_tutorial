var AdminController = require('../controllers/Admin');

describe('Admin controller', function(){
	it('have an Admin name', function(next){
		expect(AdminController.name).toBe('Admin');
		expect(AdminController.run).toBeDefined();
		// expect(AdminController.run('something', 'somethin', 'some')).toBeDefined();
		next();
	});
});