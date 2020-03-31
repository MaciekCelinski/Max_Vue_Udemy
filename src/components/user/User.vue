<template>
	<div>
		<h1>The User Page</h1>
		<hr />
		<!-- <p>Loaded ID : {{id}}</p> -->
		<button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		// props: ["id"],

		// data() {
		// 	return {
		// 		id: this.$route.params.id
		// 	};
		// },
		// watch: {
		// 	$route(to, from) {
		// 		this.id = to.params.id;
		// 	}
		// },
		methods: {
			navigateToHome() {
				// this.$router.push('/');
				// this.$router.push({ path: "/" });
				this.$router.push({ name: "Home" });
			}
		}
	};
</script>