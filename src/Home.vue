<template>
  <div id="home" class="ui column centered stackable grid">
    <div class="column ui segment">
      <div class="ui inverted dimmer">
        <div class="ui text loader">正在获取数据，请稍候...</div>
      </div>
      <h1 class="ui centered dividing header">
        kcwiki舰娘语音校对表
        <div class="sub header">
            ver.{{verson}} by grzhan
        </div>
      </h1>
      <div class="ui fluid input">
        <input type="text" v-model="query" placeholder="输入要找的舰娘名或ID">
      </div>
      <div class="ui stackable grid" id="container">
      <div class="three wide column" v-for="ship in shipList | filterBy query" v-if="ship.wiki_id && ship.id < 500"><a v-link="'List/'+ship.id" class="ui tag teal label">{{ship.wiki_id}}.{{ ship.name }}</a></div>
      </div>
    </div>
  </div>
</template>

<script lang="coffee">
module.exports =
  ready: ->
    dimmer = document.querySelector('.ui.dimmer')
    dimmer.className += ' active'
    this.$http.get('http://kcwikizh.github.io/kcdata/ship/all.json').then (response) ->
      this.$set('shipList', response.data)
      dimmer.className = dimmer.className.replace('active', '')
    , (err) ->
      dimmer.className = dimmer.className.replace('active', '')
      console.error err
  data: ->
    verson: '20160410'
    title: '舰娘语音校对表'
    shipList: []
</script>

<style>
#home {
  padding: 5% 15%;
}
#home #container {
  padding: 20px;
}
</style>
