const sendResponse = require('./sendResponse');
const stuff = require('./stuff');

module.exports = {
  checkTeacherName: checkTeacherName,
  checkGroup: checkGroup,
  checkWindDownTime: checkWindDownTime
}

function checkTeacherName(sender_psid, teacherName) {
  const checkArray = stuff.teachersCheckArray;
  if(checkArray.includes(teacherName)) return true;
  else {
    let response = stuff.checkTeacherNameResponse;
    response.text = "Tên giáo viên không có trong danh sách hoặc không có tiết dạy nào. Kiểm tra lại xem bạn có viết nhầm hay không nhé.\nNhầm thì viết lại luôn nha :>";
    sendResponse(sender_psid, response);
    return false;
  }
}

function checkGroup(sender_psid, group) {
  const checkArray = stuff.groupsCheckArray;
  if(checkArray.includes(group)) return true;
  else {
    let response = stuff.checkGroupResponse;
    response.text = "Tên lớp không có trong danh sách. Kiểm tra lại xem bạn có viết nhầm hay không nhé.\nNhầm thì viết lại luôn nha :>"
    sendResponse(sender_psid, response);
    return false;
  }
}

function checkWindDownTime(sender_psid, time) {
  if(isNaN(time) || time < 0) {
    let response = stuff.defaultResponse;
    response.text = "Xin lỗi, tớ không hiểu thời gian bạn vừa nhập :(";
    sendResponse(sender_psid, response);
    return 0;
  }
  if(time >= 8 * 60) {
    let response = stuff.defaultResponse;
    response.text = "Thế thì thức luôn đi chứ còn ngủ gì nữa @@";
    sendResponse(sender_psid, response);
    return 0;
  }
  return 1;
}
