<template>
  <block>
    <web-view src="/hybrid/html/index.html?symbol=BTCUSDT"></web-view>
  </block>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	onReady() {
		uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#000000',
				animation: {
						duration: 400,
						timingFunc: 'easeIn'
				}
		})
	},
  onLoad(query) {
    
  },
  components: {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>
