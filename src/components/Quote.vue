<template>
	<div class="container">
		<div class="title">
			<slot name="title"></slot>
			<!-- if we use the slot below default text will disappear -->
			<span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
		</div>
		<hr/>
		<div>
			<!-- if a slot is not named than everything that don't have a name will go there -->
			<slot></slot>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Quote",
        props: ['quote']
    }
</script>

<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}

	h2 {
		color: red
	}

	title {
		font-style: italic;
	}
</style>