const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function getWeekDayList(selectWeek) {
  var selectWeekTime = getCurrentTimeStamp() + (selectWeek * 7) * 24 * 60 * 60 * 1000
  if (getWeekNumber(selectWeekTime) == 0) {
    var mondayTime = selectWeekTime - 6 * 24 * 60 * 60 * 1000;
  } else {
    var mondayTime = selectWeekTime - (getWeekNumber(selectWeekTime) - 1) * 24 * 60 * 60 * 1000;
  }

  var timeBean = {
    selectDay: 0,
    yearMonth: '',
    weekDayList: [],
    year: '',
    month: '',
  }
  for (var i = 0; i < 7; i++) {
    var weekDay = {
      week: '',
      day: ''
    }
    weekDay.week = getWeek(mondayTime + i * 24 * 60 * 60 * 1000)
    weekDay.day = getMyDay(mondayTime + i * 24 * 60 * 60 * 1000)
    timeBean.weekDayList.push(weekDay)
  }

  timeBean.yearMonth = getYearMonth(selectWeekTime);
  timeBean.year = getYear(selectWeekTime);
  timeBean.month = getMonth(selectWeekTime);
  timeBean.selectDay = getCurrenrWeek();
  return timeBean;

}


//获取当前时间戳  --
function getCurrentTimeStamp() {
  var timestamp = new Date().getTime();
  console.log(timestamp);
  return timestamp
}
 
//获取当前周几
function getCurrenrWeek() {
  var str = "6012345".charAt(new Date().getDay());
  console.log("currentweek", str);
  return str;
}
 
//时间戳获得年月
function getYearMonth(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  return y + "-" + m;
}

function getYear(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  return y;
}

function getMonth(res) {
  var time = new Date(res);
  var m = time.getMonth();
  var allMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var month = allMonth[m];
  // console.log("month!", month);
  return month;
}

 
//时间戳转几号
function getMyDay(res) {
  var time = new Date(res);
  var d = time.getDate();
  return d;
}
 
//时间戳转周几 
function getWeek(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  return "SMTWTFS".charAt(new Date(y + '-' + m + '-' + d).getDay());
}
 
//时间戳转周几 0123456  --
function getWeekNumber(res) {
  var time = new Date(res);
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  console.log("time", time, "year", y, "month", m, "day", d);
  console.log("new date", new Date(y + '-' + m + '-' + 20).getDay());
  console.log("0123456".charAt(new Date(y + '-' + m + '-' + d).getDay()));
  return "0123456".charAt(new Date(y + '-' + m + '-' + d).getDay());
}


module.exports = {
  formatTime,
  getWeekDayList: getWeekDayList,
}
