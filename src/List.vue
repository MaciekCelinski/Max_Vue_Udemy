<template>
	<div>
		<h3>Mixins</h3>
		<input v-model="filterText">
		<ul>
			<li v-for="fruit in filteredFruits">{{fruit}}</li>
		</ul>
	</div>
</template>

<script>
	import {fruitMixin} from './fruitMixin.js';
    export default {
       mixins: [fruitMixin],
        created(){
           // mixins run before components
           console.log('Created in List.vue')
        }
    }
</script>

<style>
</style>
