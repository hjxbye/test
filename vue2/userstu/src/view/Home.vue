<template>
	<div class="home">
		<Header />
		<el-container class="content">
			<Menu />
			<el-container>
				<el-main>
					<Bread />
					<div class="cont">
						<keep-alive :include="keepAliveInclude">
						<router-view></router-view>
						</keep-alive>
					</div>
				</el-main>
				<el-footer>
					<Footer />
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Menu from '@/components/common/Menu.vue'
import Bread from '@/components/common/Breadcrumb.vue'
import { mapGetters } from 'vuex'
export default {
	components: {
		Header,
		Footer,
		Menu,
		Bread
	},
	data() {
		return {
          // keepAliveInclude:''
		}
	},
	computed:{
    ...mapGetters([
      'keepAliveInclude',
    ])
  },
	// created() {
	// 	this.keepAliveInclude = this.$store.state.keepAliveInclude
	// 	console.log(this.$store.state.keepAliveInclude);
	// },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;

	.content {
		position: absolute;
		width: 100%;
		top: 60px;
		bottom: 0;

		.cont {
			margin: 20px;
		}
	}

}
</style>
