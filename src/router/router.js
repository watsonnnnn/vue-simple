/**
 * Created by Administrator on 2017/6/24.
 */
const Login = {
    template: '<div>login</div>'
}
const Register = {
    template: '<div>register</div>'
}
import Detail from '../components/detail';
const routes = [
    {
        path: '/',
        component: {
            template: '<div></div>'
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },{
        path:'/details',
        name:'detail',
        component : {
            template:'<div><div>detail</div><router-view></router-view></div>'
        },
        children:[
            {
                name:'humandetail',
                path:'/humandetail',
                component : Detail,
            }
        ]
    }
]

export default routes;