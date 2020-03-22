<template>
	<div class="content-wrapper">
	
			<!--  expamle section -->
			<section id="main">
			  <div class="container">
				<h1>Webpack message: {{ message }}</h1>
				<p>sasat</p>
				<img src="/assets/img/Handphone.png" alt="">
				<!-- toggle expamle component -->
		 </div>
	</section>
			
	
	</div> 
</template>



<script>
export default {
	data() {
		return {
			message: null
		}
	},
	created () {
		this.message = this.$store.getters.getMessage
	}
}
</script>

<style lang="scss" scoped>
	.container {
		height: 150px;
	}
</style>