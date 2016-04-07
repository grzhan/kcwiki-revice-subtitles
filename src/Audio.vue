<template>
	<div class="audio-player-wrapper">
		<audio :src="url" data-id="player-{{vid}}" controls="controls" preload="none" class="audio-player"></audio>
		<i class="play icon" v-on:click="play" v-if="state=='pause'" ></i>
		<i class="pause icon" v-on:click="pause"v-else></i>
	</div>
</template>

<script lang="coffee">
module.exports =
  props: ['url', 'vid']
  methods:
  	pause: (e)->
  		this.$set 'state', 'pause'
  		@audio.pause()
  	play: (e)->
  		this.$set 'state', 'play'
  		@audio.play()
  ready: ->
  	@audio = document.querySelector("audio[data-id='player-#{@vid}'")
  	@audio.addEventListener("ended", @pause);
  data: ->
  	state: 'pause'
</script>

<style>
	.audio-player { display: none;}
	.audio-player-wrapper .icon { cursor: pointer; }
</style>