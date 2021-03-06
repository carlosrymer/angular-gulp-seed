/**
 * Build Tasks
 */

/**
 * Get parent module
 * @type {object}
 */
var parent = require.main.app;

/**
 * Builds the app
 */
function BuildApp() {

	parent.build = true;

	return parent.gulp.start('PrepareApp');

}

parent.gulp.task('build', BuildApp);