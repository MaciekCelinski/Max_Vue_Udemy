<template>
        <div class="row">
                <div class="col-sm-12">
                        <h3>
                                Qoutes Added
                        </h3>
                        <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                     aria-valuemax="100">
                                        {{ quoteCount}} / {{}}
                                </div>
                        </div>
                </div>
        </div>
</template>

<script>
        export default {
                name: "Header",
                props: ['quoteCount', 'maxQuotes']
        }
</script>

<style scoped>

</style>