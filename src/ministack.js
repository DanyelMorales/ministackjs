/**
 * @author Daniel Vera Morales <danyelmorales1991 at gmail.com>
 */
(function() {
	if (typeof window.ministack !== 'undefined') {
		return window.ministack;
	}
	window.ministack = {
		stack : [],
		require : function(deps, callback) {
			this.push(function() {
				require(deps, callback);
			});
		},
		push : function(callback) {
			this.stack.push(callback);
		},
		pop : function() {
			return this.stack.pop();
		},
		amd : function() {
			if (typeof define !== 'undefined') {
				for ( var i in this.stack) {
					this.stack[i]();
				}
			}
		},
		loadCss : function(urls) {
			for ( var url in urls) {
				var link = document.createElement("link");
				link.type = "text/css";
				link.rel = "stylesheet";
				link.href = url;
				document.getElementsByTagName("head")[0].appendChild(link);
			}
		}
	};
}());
