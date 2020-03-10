<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <!--        SELECT ANIMATION TYPE        -->
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <hr>
                <!--        TRIGGER BUTTON        -->
                <button class="btn btn-primary" @click="show= !show">Show Alert</button>
                <br><br>
                <!--        TRANSITION        -->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-show="show" >This is FADE info - simple transition</div>
                </transition>
                <!--        ANIMATION        -->
                <transition name="slide" type="animation">
                    <div class="alert alert-danger" v-if="show" >This is SLIDE info - transition and animation</div>
                </transition>
                <!--        ANIMATE CSS  and  changing classes    -->
                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    appear
                    appear-active-class="animated wobble"
                >
                    <div class="alert alert-success" v-show="show" >This is from ANIMATE CSS info</div>
                </transition>
                <!--        SELECTED ANIMATION    AND TYPE   -->
                <transition :name="alertAnimation" appear>
                    <div class="alert alert-warning" v-show="show" >This is FADE info - simple transition</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade'
            }
        }
    }
</script>

<style>
    /* ---------------- FADE - transition -----------------*/
    .fade-enter  {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 0.4s;
    }
    .fade-leave{
        /*opacity: 1;*/
    }
    .fade-leave-active{
        transition: opacity 0.4s;
        opacity: 0;
    }
    /* ---------------- SLIDE - mixed transition and animation -----------------*/
    .slide-enter  {
        opacity: 0;
        /*transform: translateY(20px);*/
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s ;
    }
    .slide-leave{
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } to {
            transform: translateY(0);
                  }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        } to {
              transform: translateY(20px);
          }
    }
</style>
