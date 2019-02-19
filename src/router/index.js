import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import main from '@/components/main/main';
import collection from '@/components/collection/collection';

export default new Router({
	routes: [{
			path: '/',
			name: 'main',
			component: main,
			meta: {
				index: 0
			} //for animation
		},
		{
			path: '/collection',
			name: 'collection',
			component: collection,
			meta: {
				index: 1
			} //for animation
		}
	]
})
