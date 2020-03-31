import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserDetails from "./components/user/UserDetail.vue";
import UserStart from "./components/user/UserStart.vue";
import UserEdit from "./components/user/UserEdit.vue";
import Header from "./components/Header.vue";

export const routes = [
	{
		path: "/",
		// component: Home,
		name: "Home",
		components: {
			default: Home,
			"header-top": Header
		}
	},

	// FOR PASSING ID AS A PROP

	// { path: "/user/:id", component: User, props: true }

	// CHILDREN is used to nest links

	{
		path: "/user",
		// component: User,
		components: {
			default: User,
			"header-bottom": Header
		},
		children: [
			{
				// we use '' so we start after '/user/', if we use '/' we will start root path 'localhost:8080:/'
				path: "",
				component: UserStart,
				name: "UserStart"
			},
			{
				path: ":id",
				component: UserDetails
			},
			{
				path: ":id/edit",
				component: UserEdit,
				name: "UserEdit"
			}
		]
	},
	//     {path: '/user/1/details/edit', component: UserEdit},
	//     {path: '/user/1/details', component: UserDetails}
	// { path: "/redirect-me", redirect: { name: "Home" } }
	{ path: "*", redirect: { name: "Home" } }
];
