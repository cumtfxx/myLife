<template>
  <div id="container">
    <Login></Login>
    <Calendar></Calendar>
  </div>
</template>

<script>
import Calendar from './components/calendar/calendar'
import Login from './components/login/login'
export default{
  name: 'app',
  components: {
    Calendar,
    Login
  }
}

</script>

<style>
  @font-face{
    font-family: "cyjxk";
    src: url(`@/assets/font/创艺简行楷.ttf)
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  #container{
    width: 100%;
    height: 100%;
  }
</style>
