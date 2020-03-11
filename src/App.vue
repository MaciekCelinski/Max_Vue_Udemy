<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<!--       CSS ANIMATIONS         -->
				<h1>Animations with CSS</h1>
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
					<div class="alert alert-info" v-show="show">This is FADE info - simple
						transition
					</div>
				</transition>
				<!--        ANIMATION        -->
				<transition name="slide" type="animation">
					<div class="alert alert-danger" v-if="show">This is SLIDE info - transition and
						animation
					</div>
				</transition>
				<!--       with use of ANIMATE CSS  -  changing classes    -->
				<transition
				    enter-active-class="animated bounce"
				    leave-active-class="animated shake"
				    appear
				    appear-active-class="animated wobble"
				>
					<div class="alert alert-success" v-show="show">This is from ANIMATE CSS info
					</div>
				</transition>
				<!--        SELECTED ANIMATION    AND TYPE   -->
				<transition :name="alertAnimation" appear>
					<div class="alert alert-warning" v-show="show">This is SELECTED ANIMATION info
					</div>
				</transition>
				<!--        TRANSITION BETWEEN MULTIPLE ELEMENTS        -->
				<transition name="fade" mode="out-in" appear>
					<div class="alert alert-info" v-if="show" key="1">This is TRANSITION BETWEEN
						MULTIPLE ELEMENTS info - element 1
					</div>
					<div class="alert alert-danger" v-else key="2">This is TRANSITION BETWEEN
						MULTIPLE ELEMENTS info - element 2
					</div>
				</transition>
				<hr>
				<!--        JAVASCRIPT  ANIMATIONS      -->
				<h1>Animations with JAVASCRIPT</h1>
				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br><br>
				<transition
				    @before-enter="beforeEnter"
				    @enter="enter"
				    @after-enter="afterEnter"
				    @enter-cancelled="enterCancelled"

				    @before-leave="beforeLeave"
				    @leave="leave"
				    @after-leave="afterLeave"
				    @leave-cancelled="leaveCancelled"
				    :css="false"
				>
					<div style="width: 300px; height: 100px; background-color: lightgreen"
					     v-if="load"></div>
				</transition>
				<hr>
				<button class="btn btn-primary"
				        @click="selectedComponent === 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">
					Toggle Components
				</button>
				<br>
				<br>
				<!--        Animating Dynamic Components        -->
				<transition name="fade" mode="out-in">
					<component :is="selectedComponent"></component>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import DangerAlert from "./DangerAlert.vue";
	import SuccessAlert from "./SuccessAlert.vue";

	export default {
		data() {
			return {
				show: true,
				load: true,
				alertAnimation: 'fade',
				elementWidth: 100,
				selectedComponent: 'app-success-alert'
			}
		},
		components: {
			appDangerAlert: DangerAlert,
			appSuccessAlert: SuccessAlert
		},
		methods: {
			beforeEnter(el) {
				console.log('beforeEnter')
				this.elementWidth = 100;
				el.style.width = this.elementWidth + 'px'
			},
			enter(el, done) {
				console.log('enter')
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = (this.elementWidth + round * 10) + 'px';
					round++;
					if (round > 20) {
						clearInterval(interval);
						done()
					}
				}, 20)
			},
			afterEnter(el) {
				console.log('afterEnter')
			},
			enterCancelled(el) {
				console.log('enterCancelled')
			},
			beforeLeave(el) {
				console.log('beforeLeave')
				this.elementWidth = 300
				el.style.width = this.elementWidth + 'px'
			},
			leave(el, done) {
				console.log('leave')
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = (this.elementWidth - round * 10) + 'px';
					round++;
					if (round > 20) {
						clearInterval(interval);
						done()
					}
				}, 20)
			},
			afterLeave(el) {
				console.log('afterLeave')
			},
			leaveCancelled(el) {
				console.log('leaveCancelled')
			}
		}
	}
</script>

<style>
	/* ---------------- FADE - transition -----------------*/
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {
		/*opacity: 1;*/
	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	/* ---------------- SLIDE - mixed transition and animation -----------------*/
	.slide-enter {
		opacity: 0;
		/*transform: translateY(20px);*/
	}

	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity 0.5s;
	}

	.slide-leave {
	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 1s;
		opacity: 0
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
