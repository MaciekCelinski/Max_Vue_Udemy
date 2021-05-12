<template>
    <div class="container">
        <appHeader :quoteCount="quotes.length" :maxQuotes="maxQuotes"></appHeader>
        <!-- Here we are listening (@quoteAdded) to event from NewQuote component -->
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click a quote to delete it !</div>
            </div>
        </div>
    </div>
</template>

<script>
import NewQuote from "./components/NewQuote.vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import Header from "./components/Header.vue";
export default {
    data() {
        return {
            quotes: ["Just a Quote"],
            maxQuotes: 10
        };
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert("Please delete Quotes first");
            }
            this.quotes.push(quote);
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1);
        }
    }
};
</script>

<style></style>
