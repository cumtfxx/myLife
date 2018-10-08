<template>
  <div class="my-4">
    <vue-event-calendar :events="events">
      <template slot-scope="props">
        <div class="_scroll">
          <div style="width:95%">
            <div v-for="(event, index) in props.showEvents" class="event-item" :key="index">
              <div class="wrapper">
                <h3 class="title">{{index+1}}. {{event.title}}</h3>
                <p class="time">{{event.date | dateFormat}}</p>
                <p class="desc">{{event.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vue-event-calendar>
  </div>
</template>

<script>
import '@/assets/js/scroll.js'
export default {
  name: 'calendar',
  data () {
    return {
      events: [{
        date: '2018/11/12', // Required
        title: 'Foo', // Required
        desc: 'description'
      }, {
        date: '2018/12/15',
        title: 'Bar',
        desc: 'description'
      }, {
        date: '2018/12/15',
        title: 'Bar',
        desc: 'description'
      }, {
        date: '2018/9/25',
        title: 'Bar',
        desc: 'description'
      }]
    }
  },
  methods: {

  },
  filters: {
    dateFormat: function (date) {
      let fdate = new Date(date)
      let result = fdate.getFullYear() + '年' + (fdate.getMonth() + 1) + '月' + fdate.getDate() + '日'
      return result
    }
  }
}
$(function () {
  $('._scroll').panel({iWheelStep: 32})
})
</script>

<style>
  ._scroll{
    width: 100%;
    height: 100%
  }
  .__vev_calendar-wrapper .events-wrapper .cal-events{
    height: 500px;
  }
  .zUIpanelScrollBox,.zUIpanelScrollBar{
    width:10px;
    top:4px;
    right:2px;
    border-radius:5px;
  }
  .zUIpanelScrollBox{
    background:black;opacity:0.1;
    filter:alpha(opacity=10);
  }
  .zUIpanelScrollBar{
    background:#fff;opacity:0.8;
    filter:alpha(opacity=80);
  }
  .desc{
    word-break: break-all
  }
</style>
