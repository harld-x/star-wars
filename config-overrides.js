const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
	alias({
  		'@components': 'src/components',
  		'@yu': 'src/components/UI',
  		'@containers': 'src/containers',
  		'@constants': 'src/constants',
  		'@HOC': 'src/HOC',
  		'@services': 'src/services',
  		'@utils': 'src/utils',
  		'@styles': 'src/styles',
  		'@routes': 'src/routes',
  		'@static': 'src/static',
  		'@hooks': 'src/hooks',
	})(config)
	return config
}