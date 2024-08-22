$(document).ready(function () {
    GetAllPax();
});
var vDates = "";
//function addCustomInformation(year, month, inst) {


//    if (inst + "" == "undefined") {
//        year = 0;
//        month = 0;
//    }


//    setTimeout(function () {
//        $(".ui-datepicker-calendar > tbody > tr > td").each(function () {
//            var $this = $(this);
//            $this.find("a").attr('data-customt', "");
//        });
//        var txtc = 0;

//        $.ajax({
//            type: 'POST',
//            url: "adventure-packages.aspx/AvailablePax",
//            data: "{mth:'" + month + "', yr:'" + year + "'}",
//            contentType: 'application/json; charset=utf-8',
//            dataType: "json",
//            async: true,
//            success: function (res) {
//                var tl = res.d.toString().split('|').length;

//                for (var i = 0; i < tl; i++) {
//                    if (res.d.toString().split('|')[i] != "") {
//                        var cols = res.d.toString().split('|')[i];
//                        $(".ui-datepicker-calendar > tbody > tr > td").each(function () {
//                            if (!$(this).hasClass("ui-state-disabled")) {
//                                if (parseInt($(this).find("a").html().trim()) == parseInt(cols.split('#')[0].split('-')[0])) {
//                                    txtc = 1;
//                                    if (parseInt(cols.split('#')[1]) < 300)
//                                        $(this).find("a").attr('data-custom2', cols.split('#')[1]);
//                                    else
//                                        $(this).find("a").attr('data-custom', cols.split('#')[1]);
//                                };
//                            }
//                        });
//                    }
//                }
//                if (txtc == 1) {
//                    if ($(".ui-datepicker-calendar").find("tfoot")) {
//                        $(".ui-datepicker-calendar tfoot").remove();
//                        $(".ui-datepicker-calendar").append("<tfoot><tr><td colspan='7'><span style='font-size:12px;color:green;margin-top:5px'><i style='font-size:18px' class='fa fa-square'></i> : No Of Pax Available</span></td></tr></tfoot>");
//                    }
//                    else {
//                        $(".ui-datepicker-calendar").append("<tfoot><tr><td colspan='7'><span style='font-size:12px;color:green;margin-top:5px'><i style='font-size:18px' class='fa fa-square'></i> : No Of Pax Available</span></td></tr></tfoot>");
//                    }
//                }
//            }
//        });

//    }, 0)
//}

function addCustomInformationNew(year, month, inst) {


    if (inst + "" == "undefined") {
        year = 0;
        month = 0;
    }
    month++;

    setTimeout(function () {
        $(".flatpickr-day").each(function () {
            var $this = $(this);
            if (($this.find("a").length < 1) && (!$this.hasClass("flatpickr-disabled")) && (!$this.hasClass("nextMonthDay")) && (!$this.hasClass("prevMonthDay"))) {
                $this.append("<img src='/assets/img/loading.gif' />");
            }
        });
        var txtc = 0;

        $.ajax({
            type: 'POST',
            url: "adventure-packages.aspx/AvailablePax",
            data: "{mth:'" + month + "', yr:'" + year + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            async: true,
            success: function (res) {
                vDates = res.d.toString();
                var tl = res.d.toString().split('|').length;

                for (var i = 0; i < tl; i++) {
                    if (res.d.toString().split('|')[i] != "") {
                        var cols = res.d.toString().split('|')[i];
                        $(".flatpickr-day").each(function () {
                            if ((!$(this).hasClass("flatpickr-disabled")) && (!$(this).hasClass("nextMonthDay")) && (!$(this).hasClass("prevMonthDay"))) {
                                var this_ = $(this);
                                var cccnnn = this_.html() == "" ? "0" : this_.html().trim();
                                if (parseInt(cccnnn) == parseInt(cols.split('#')[0].split('-')[1])) {
                                    txtc = 1;
                                    $(this).find("img").remove();
                                    if (parseInt(cols.split('#')[1]) > 100) {
                                        // $(this).append(" - " + cols.split('#')[1] + "");
                                        $(this).append("<a class='eventGrn'>" + cols.split('#')[1] + "</a>");
                                        //$(this).append("<span class='eventGrn'>" + cols.split('#')[1] + "</span>");
                                        //$(this).find("span").attr('data-custom2', cols.split('#')[1]);
                                    }
                                    else {
                                        $(this).append("<a class='eventRd'>" + cols.split('#')[1] + "</a>");
                                        /*        $(this).append(" = " +cols.split('#')[1]);*/
                                        //$(this).find("span").attr('data-custom', cols.split('#')[1]);
                                    }

                                };
                            }
                        });
                    }
                }
                if (txtc == 1) {
                    if ($(".ui-datepicker-calendar").find("tfoot")) {
                        $(".ui-datepicker-calendar tfoot").remove();
                        $(".ui-datepicker-calendar").append("<tfoot><tr><td colspan='7'><span style='font-size:12px;color:green;margin-top:5px'><i style='font-size:18px' class='fa fa-square'></i> : No Of Pax Available</span></td></tr></tfoot>");
                    }
                    else {
                        $(".ui-datepicker-calendar").append("<tfoot><tr><td colspan='7'><span style='font-size:12px;color:green;margin-top:5px'><i style='font-size:18px' class='fa fa-square'></i> : No Of Pax Available</span></td></tr></tfoot>");
                    }
                }
            }
        });

    }, 0)
}


function GetAllPax() {

    //$.ajax({
    //             type: 'POST',
    //             url: "/adventure-packages.aspx/AvailablePax",
    //             data: "{mth:'0', yr:'0',dy:'0'}",
    //             contentType: 'application/json; charset=utf-8',
    //             dataType: "json",
    //             async: false,
    //             success: function (res) {
    //                 vDates = res.d.toString();

    //             }
    //         });


    var toDay = new Date();
    var f4 = flatpickr(document.getElementsByClassName('timeFlatpickr000'), {
        dateFormat: "d/M/Y",
        minDate: toDay,
        maxDate: toDay.fp_incr(90),
        disableMobile: "true",
        //defaultDate: toDay,
        onReady: function (selectedDates, dateStr, instance, dayElem) {
            addCustomInformationNew(instance.currentYear, instance.currentMonth, 0, instance);
        },
        onMonthChange: function (selectedDates, dateStr, instance, dayElem) {
            addCustomInformationNew(instance.currentYear, instance.currentMonth, 0, instance);
        },
        //onDayCreate: function (dObj, dStr, fp, dayElem) {
        //    for (var i = 0; i < vDates.split('|').length; i++) {
        //        var tl = vDates.split('|')[i];
        //        if (new Date().fp_incr(90) >= new Date(dayElem.dateObj) && new Date(dayElem.dateObj) >= new Date(toDay.toString().split(' ')[0] + ' ' + toDay.toString().split(' ')[1] + ' ' + toDay.toString().split(' ')[2] + ' ' + toDay.toString().split(' ')[3])) {
        //            var aDay = new Date(tl.split('#')[0]).toDateString();
        //            var bDay = new Date(dayElem.dateObj).toDateString();
        //            if (aDay == bDay) {
        //                if (parseFloat(tl.split('#')[1]) != 0) {
        //                    dayElem.innerHTML += "<span class='eventGrn'>" + tl.split('#')[1] + "</span>";
        //                }
        //                else {
        //                    dayElem.innerHTML += "<span class='eventRd'>" + tl.split('#')[1] + "</span>";
        //                }
        //            }
        //        }
        //    }

        //},

    });


}