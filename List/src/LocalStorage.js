var KEY = 'list_data'
export default {
	get: function () {
		return JSON.parse(window.localStorage.getItem(KEY) || '[]')
	},
	set: function (list) {
		window.localStorage.setItem(KEY,JSON.stringify(list))
	}
}