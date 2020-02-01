<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<button @click="selectedComponent = 'appQuote' ">Quote</button>
				<button @click="selectedComponent = 'appAuthor' ">Author</button>
				<button @click="selectedComponent = 'appNew' ">New</button>
				<hr>
				<p>{{selectedComponent}}</p>
				<!-- dynamic content will show in a slot if there is one -->
				<component :is="selectedComponent">Default Content</component>
				<!-- <app-quote> -->
				<!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
				<!-- <p>A wonderfull Life</p> -->
				<!-- </app-quote> -->
			</div>
		</div>
	</div>
</template>

<script>
    import Quote from "./components/Quote";
    import Author from "./components/Author";
    import New from "./components/New";

    export default {
        data() {
            return {
                quoteTitle: 'The Qoute',
//default selected component
                selectedComponent: 'appQoute'
            }
        },
        components: {
            'appQuote': Quote,
            'appAuthor': Author,
            'appNew': New
        }
    };
</script>

<style>

</style>
