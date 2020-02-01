<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<button @click="selectedComponent = 'appQuote' ">Quote</button>
				<button @click="selectedComponent = 'appAuthor' ">Author</button>
				<button @click="selectedComponent = 'appNew' ">New</button>
				<hr>
				<p>{{selectedComponent}}</p>
				<keep-alive>
					<!-- dynamic content will show in a slot if there is one -->
					<component :is="selectedComponent">Default Content</component>

				</keep-alive>
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
                quoteTitle: 'The Quote',
				//default selected component
                selectedComponent: 'appQuote'
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
