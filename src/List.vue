<template>
  <div id="list" class="ui column centered stackable grid">
    <div class="column ui segment">
      <div class="ui inverted dimmer">
        <div class="ui text loader">正在获取数据，请稍候...</div>
      </div>
      <h1 class="ui centered dividing header">
        {{result.shipName}} - 语音校对表
        <div class="sub header">
          Ship ID：{{ $route.params.id }}
        </div>
      </h1>
      <div class="ui grid" id="container">
        <table class="ui celled table">
          <thead> <tr> <th class="one wide">序号</th> <th class="two wide">场景</th><th>语音</th> <th>日文</th> <th>中文</th> </tr> </thead> 
          <tbody>
            <tr v-for="v in voices">
              <td>{{v}}</td>
              <td>{{names[v]}}</td>
              <td><ship-audio :url="result.url[v]" :vid="v"></ship-audio></td>
              <td>{{result.jp[v]}}</td>
              <td>{{result.zh[v]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">
module.exports =
  ready: ->
    dimmer = document.querySelector('.ui.dimmer')
    dimmer.className += ' active'
    id = this.$route.params.id
    this.$http.get("/data/voice_names.json").then (response) ->
      this.$set('names', response.data)
    this.$http.get("/data/#{id}.json").then (response) ->
      this.$set('result', response.data)
      this.$set('voices', Object.keys(response.data.url))
      dimmer.className = dimmer.className.replace 'active', ''
    , (err) ->
      dimmer.className = dimmer.className.replace 'active', ''
      console.error err
  data: ->
    result: {}
</script>

<style>
#list {
  padding: 5% 5% 5%;
}
</style>