"use strict";
/// <reference path="@types/jquery/index.d.ts" />
/*$(document).ready(function () {
alert("hello from jquery!");
});*/
$(document).ready(function () {
    $("#content").html("<h1>Привет мир</h1>");
});
$(function () {
    $("#alertBtn").click(function (e) { $("#content").html("<h2>Привет мир</h2>"); });
});
//# sourceMappingURL=app.js.map