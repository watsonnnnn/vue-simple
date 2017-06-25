/**
 * Created by Administrator on 2017/6/24.
 */
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/', component: {template:'<div></div>'}},
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

export default routes;