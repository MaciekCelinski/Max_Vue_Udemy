<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters and Mixins</h1>

				<h3>Filters</h3>
				<!-- local filter -->
				<p>{{text | toUppercase }}</p>
				<!-- global filter from main.js -->
				<p>{{ text2 | to-lowercase }}</p>
				<hr>
				<button @click="fruits.push('berries')">Add New Fruit</button>
				<input v-model="filterText">
				<ul>
					<li v-for="fruit in filteredFruits">{{fruit}}</li>
				</ul>
				<hr>
				<List/>
			</div>
		</div>
	</div>
</template>

<script>
	import List from "./List.vue"
	import {fruitMixin} from "./fruitMixin";

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: "Hello there!",
                text2: "I'm here too",
	            // fruits: ['orange', 'apple', 'banana', 'mango'],
	            // filterText: ""
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
	    // computed: {
        //     filteredFruits(){
        //         return this.fruits.filter((element) => {
        //             return element.match(this.filterText)
        //         })
        //     }
	    // },
	    components: {
            List
	    }
    }
</script>

<style>
</style>
