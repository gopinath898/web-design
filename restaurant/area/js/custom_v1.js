$(document).ready(function () {

    //------------Rooms section start here-----

    $(document.body).on("click", '#norplus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomcartQty" + id).val();
        var noofr = $("#NRoomcartQty" + id).attr("data-norm");
        if (parseInt(val) >= 0) {
            if (parseInt(noofr) >= parseInt(val)) {
                $("#NRoomcartQty" + id).val(parseInt(val) + 1);
            }
            if (parseInt(noofr) == parseInt(val)) {
                $("#NRoomcartQty" + id).val(parseInt(val));
            }
        }
    });
    $(document.body).on("click", '#norminus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomcartQty" + id).val();
        var noofr = $("#NRoomcartQty" + id).attr("data-norm");
        if (parseInt(val) >= 0) {
            if (parseInt(noofr) >= parseInt(val)) {
                $("#NRoomcartQty" + id).val(parseInt(val) - 1)
            }
            if (parseInt(val) == 0) {
                $("#NRoomcartQty" + id).val(parseInt(val))
            }
        }

    });
    $(document.body).on("click", '#adultplus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomAdult" + id).val();
        if (parseInt(val) >= 0) {
            $("#NRoomAdult" + id).val(parseInt(val) + 1);
        }
    });
    $(document.body).on("click", '#adultminus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomAdult" + id).val();
        if (parseInt(val) > 0) {
            $("#NRoomAdult" + id).val(parseInt(val) - 1);
        }
    });
    $(document.body).on("click", '#kidsplus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomchild" + id).val();
        if (parseInt(val) >= 0) {
            $("#NRoomchild" + id).val(parseInt(val) + 1);
        }
    });
    $(document.body).on("click", '#kidsminus', function () {

        var id = $(this).attr("data-rid");
        var val = $("#NRoomchild" + id).val();
        if (parseInt(val) > 0) {
            $("#NRoomchild" + id).val(parseInt(val) - 1);
        }
    });

    ////-rooom cart funtionality
    $(document.body).on('click', '.addToC', function (e) {
        $(".roomsidebar1").empty();

        e.preventDefault();
        var rId = $(this).attr('id').split('_')[1];
        var roOf = $("#NRoomcartQty" + rId).val();
        var adults = $("#NRoomAdult" + rId).val();
        var children = $("#NRoomchild" + rId).val();
        // var chkin = $("#TxtFromDate").val();
        // var chkout = $("#TxtTodate").val();
        var chkin = $("input[name*='TxtFromDate']").val();
        var chkout = $("input[name*='TxtTodate']").val();
        const toast = swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            padding: '2em'
        });

        if (roOf == "0") {

            toast({
                type: 'error',
                title: 'No of rooms should be more than zero',
                padding: '2em',
            });
            return;
        }
        if (adults == "0") {

            toast({
                type: 'error',
                title: 'No of adult should be more than zero',
                padding: '2em',
            });
            return;
        }

        if (chkin != "" && chkout != "") {
            if (GetAvailability(rId) == "Yes") {

                $.ajax({
                    type: 'POST',
                    url: "/book-now.aspx/AddToCart",
                    data: "{rid: '" + rId + "',f_dt:'" + chkin + "', t_dt: '" + chkout + "', no_of_rooms:'" + roOf + "', adults:'" + adults + "', children:'" + children + "'}",
                    contentType: 'application/json; charset=utf-8',
                    dataType: "json",
                    async: true,
                    success: function (data2) {

                        if (data2.d.toString().split('|')[0] == "Exceed") {
                            toast({
                                type: 'error',
                                title: 'Maximum ' + data2.d.toString().split('|')[1] + ' persons are allowed',
                                padding: '2em',
                            });
                            return;
                        }
                        else if (data2.d.toString().split('|')[0] == "Room0") {
                            toast({
                                type: 'error',
                                title: 'Please add a room to proceed',
                                padding: '2em',
                            });
                            return;
                        }
                        else if (data2.d.toString().split('|')[0] == "Adult0") {
                            toast({
                                type: 'error',
                                title: 'Please add pax into rooms to proceed',
                                padding: '2em',
                            });
                            return;
                        } else if (data2.d.toString().split('|')[0] == "AdultLess") {
                            toast({
                                type: 'error',
                                title: 'No of adults should be greater than or equal to no of rooms',
                                padding: '2em',
                            });
                            return;
                        }
                        else if (data2.d.toString().split('|')[0] == "LessDate") {
                            toast({
                                type: 'error',
                                title: 'To date should be greater than from date',
                                padding: '2em',
                            });
                            return;
                        }
                        else {
                            $(".roomsidebar1").empty();
                            toast({
                                type: 'success',
                                title: 'Successfully added to Cart.',
                                padding: '2em',
                            });

                            var crtBlock = "";
                            var gstt = "";
                            var priceBlock = "";
                            var cost = 0;
                            var cost2 = 0;
                            var crt = data2.d.toString().split('#');
                            var gst = 0;
                            var x = ""; var p = "";
                            for (var i = 0; i < crt.length; i++) {
                                var crtInside = "";
                                var cartloop = "";
                                var maincart = "";
                                crtInside = crt[i].split("|");
                                if (crtInside != "") {
                                    var guest = "";
                                    if (crtInside[9] != "0" && crtInside[9] != "") {
                                        guest = "<div class='cart_room_detail'><div class='cart_room_left'><p>Extra Guest(" + crtInside[9] + "*" + crtInside[8] + ")</p></div><div class='cart_room_right'><p>₹ " + (parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + "</p> </div></div>";
                                    }
                                    cost += (((parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + (parseFloat(crtInside[10]) * parseFloat(crtInside[5]))));
                                    cost2 += (((parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + (parseFloat(crtInside[10]) * parseFloat(crtInside[5]))));
                                    gstt = "<div class='cart-total gstsec'><p class='tleft'>GST (" + crtInside[14] + "%)</p><p class='tright'> ₹  " + (cost2 * (parseFloat(crtInside[14]) / 100)) + "</p></div>";
                                    gst = (cost2 * (parseFloat(crtInside[14]) / 100));
                                    cartloop += "<div class='cart_room_head'><p>" + crtInside[0] + "</p> <p class='delete-sec'><a  id='" + crtInside[2] + "' class='delete removeCart' href='#'><span class='icon-trash'></span></a></p> </div>";
                                    cartloop += "<div class='cart_room_body'><div class='cart_room_detail'><div class='cart_room_left'><p>Rooms(" + crtInside[5] + "*" + crtInside[10] + ")</p> </div><div class='cart_room_right'><p>₹ " + (parseFloat(crtInside[10]) * parseFloat(crtInside[5])) + "</p></div></div>" + guest + "</div>";
                                    maincart += "<div class='cart_room_lists'>" + cartloop + " </div>";
                                    crtBlock += maincart;
                                }
                            }
                            priceBlock = "<div class='cart-total-sec'><div class='cart-total'><p class='tleft'>Sub Total</p> <p class='tright'>₹ " + cost + "</p></div>" + gstt + "</div>";
                            var c = "<h4>Payment Details</h4><div class='dates-sec'> <p><span>Check In:</span> " + chkin + "</p><p><span>Check Out:</span> " + chkout + "</p> </div>";
                            p = "<div class='ptotal'><div class='cart-total'><p class='tleft'>Total</p><p class='tright'>₹ " + (gst + cost) + "</p> </div><div class='mt-3'><a href='/checkout.aspx' class='btn btn-info-sub btn-md btn-shadow w-100'>Proceed</a></div></div>";
                            $(".roomsidebar1").append("<div class='cart_sec_main'><div class='cart_sec'>" + c + "<div class='cart_body'>" + crtBlock + "" + priceBlock + "</div></div>" + p + "</div>");

                        }
                    }
                });
            }
            else {
                alert("Rooms are not available for these dates");
            }
        }
        else {
            alert("Please select check-in and check-out date");
        }
    });


    $(document.body).on('click', '.removeCart', function () {


        var rId = $(this).attr('id');
        var chkin = $("input[name*='TxtFromDate']").val();
        var chkout = $("input[name*='TxtTodate']").val();
        $(".roomsidebar1").empty();
        $.ajax({
            type: 'POST',
            url: "/book-now.aspx/RemoveFromCart",
            data: "{rid: '" + rId + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            async: true,
            success: function (data2) {
                if (data2.d.toString() == "") {
                    $(".roomsidebar1").empty();
                }
                else {
                    $(".roomsidebar1").empty();
                    var crtBlock = "";
                    var gstt = "";
                    var priceBlock = "";
                    var cost = 0;
                    var cost2 = 0;
                    var crt = data2.d.toString().split('#');
                    var gst = 0;
                    var x = ""; var p = "";
                    for (var i = 0; i < crt.length; i++) {
                        var crtInside = "";
                        var cartloop = "";
                        var maincart = "";
                        crtInside = crt[i].split("|");
                        if (crtInside != "") {
                            var guest = "";
                            if (crtInside[9] != "0" && crtInside[9] != "") {
                                guest = "<div class='cart_room_detail'><div class='cart_room_left'><p>Extra Guest(" + crtInside[9] + "*" + crtInside[8] + ")</p></div><div class='cart_room_right'><p>₹ " + (parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + "</p> </div></div>";
                            }
                            cost += (((parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + (parseFloat(crtInside[10]) * parseFloat(crtInside[5]))));
                            cost2 += (((parseFloat(crtInside[8]) * parseFloat(crtInside[9])) + (parseFloat(crtInside[10]) * parseFloat(crtInside[5]))));
                            gstt = "<div class='cart-total gstsec'><p class='tleft'>GST (" + crtInside[14] + "%)</p><p class='tright'> ₹  " + (cost2 * (parseFloat(crtInside[14]) / 100)) + "</p></div>";
                            gst += (cost2 * (parseFloat(crtInside[14]) / 100));
                            cartloop += "<div class='cart_room_head'><p>" + crtInside[0] + "</p> <p class='delete-sec'><a  id='" + crtInside[2] + "' class='delete removeCart' href='#'><span class='icon-trash'></span></a></p> </div>";
                            cartloop += "<div class='cart_room_body'><div class='cart_room_detail'><div class='cart_room_left'><p>Rooms(" + crtInside[5] + "*" + crtInside[10] + ")</p> </div><div class='cart_room_right'><p>₹ " + (parseFloat(crtInside[10]) * parseFloat(crtInside[5])) + "</p></div></div>" + guest + "</div>";
                            maincart += "<div class='cart_room_lists'>" + cartloop + " </div>";
                            crtBlock += maincart;
                        }
                    }
                    priceBlock = "<div class='cart-total-sec'><div class='cart-total'><p class='tleft'>Sub Total</p> <p class='tright'>₹ " + cost + "</p></div>" + gstt + "</div>";
                    var c = "<h4>Payment Details</h4><div class='dates-sec'> <p><span>Check In:</span> " + chkin + "</p><p><span>Check Out:</span> " + chkout + "</p> </div>";
                    p = "<div class='ptotal'><div class='cart-total'><p class='tleft'>Total</p><p class='tright'>₹ " + (gst + cost) + "</p> </div><div class='mt-3'><a href='/checkout.aspx' class='btn btn-info-sub btn-md btn-shadow w-100'>Proceed</a></div></div>";
                    $(".roomsidebar1").append("<div class='cart_sec_main'><div class='cart_sec'>" + c + "<div class='cart_body'>" + crtBlock + "" + priceBlock + "</div></div>" + p + "</div>");
                }
            }
        });
    });

    ///---room gallery section

    //-----------cart section starts here-----------
    $(".Aminus").click(function () {
        var id = $(this).attr("id").split("_")[1];
        var val = $("#quantity" + id).val();
        var noof = $("[id*=txtNoOfPax]").val();
        if (parseInt(val) > 0) {
            if (parseInt(noof) >= TotalNoOfPax()) $("#quantity" + id).val(parseInt(val) - 1 + "");
        }
    });
    $(".Aplus").click(function () {
        var id = $(this).attr("id").split("_")[1];
        var val = $("#quantity" + id).val();
        var noof = $("[id*=txtNoOfPax]").val();
        if (parseInt(noof) >= TotalNoOfPax() + 1) {
            $("#quantity" + id).val(parseInt(val) + 1 + "");
        }
    });
    $(document.body).on("click", ".removepackage", function () {
        var x = confirm("Are you sure to remove packages from cart");
        if (x == true) {
            $.ajax({
                type: "POST",
                url: "/cart.aspx/RemovePackagesfromCart",
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (res) {
                    if (res.d.toString() == "Success") {
                        window.location.reload();
                    }
                },
            });
        }
    });

    $(document.body).on("click", ".removeroom", function () {
        var x = confirm("Are you sure to remove accomodation from cart");
        if (x == true) {
            $.ajax({
                type: "POST",
                url: "/cart.aspx/RemoveAccomfromCart",
                data: "{}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (res) {
                    if (res.d.toString() == "Success") {
                        window.location.reload();
                    }
                },
            });
        }
    });
    $(".paddcart").click(function () {
        $(".Mpopcontent").empty();
        var noof = $("[id*=txtNoOfPax]").val();
        if (parseInt(noof) >= TotalNoOfPax()) {
            var pax = $(this).attr("id").split("|")[0];
            var id = $(this).attr("id").split("|")[1];
            var brkfst = "No";
            if ($("[id*=chkPbreak]").prop("checked")) {
                brkfst = "Yes";
            }
            if (parseInt($("#" + pax).val()) > 0) {
                $.ajax({
                    type: "POST",
                    url: "/adventure-packages.aspx/AddToCartPackage",
                    data: "{pkg: '" + id + "', noofpax: '" + $("#" + pax).val() + "', date1:'" + $("[id*=txtDate]").val() + "', noof:'" + noof + "', brk:'" + brkfst + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (res) {
                        if (res.d.toString() == "Success") {
                            $(".Mpopcontent").append("<img src='/assets/img/success.gif' alt='Alternate Text' class='img-fluid'/> <h5>Your Adventure package booking details added to the Cart.</h5>");
                        }
                        else if (res.d[0].toString() == "EA") {
                            $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6>Package can't be booked due to <b>'" + res.d[1] + "'</b> out of stock. Only " + res.d[2] + " are available</h6>");
                        }
                        else if (res.d.toString() == "Team Less 8") {
                            $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6>Minimum 8 people required for team package.</h6>");
                        } else if (res.d.toString() == "Not Available") {
                            $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6" + noof + " Packages are not availabe for " + $("[id*=txtDate]").val() + "</h6>");
                            //alert(noof + " Packages are not availabe for " + $("[id*=txtDate]").val());
                        } else {
                            //alert("There is some problem now. Please try after some time.");
                            $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6>There is some problem now. Please try after some time.</h6>");
                        }
                    },
                });
            } else {
                $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6>Please select the no of pax</h6>");
            }
        } else {
            $(".Mpopcontent").append("<img src='/assets/img/error.gif' alt='Alternate Text' class='img-fluid'/> <h6>Package should be equal to no of pax</h6>");

        }
    });


    flatpickertime('10');

});
function TotalNoOfPax() {
    var q1 = $("#quantity1").val();
    var q2 = $("#quantity2").val();
    var q3 = $("#quantity3").val();
    var q4 = $("#quantity4").val();
    if (isNaN(q1)) {
        q1 = "0";
    }
    if (isNaN(q2)) {
        q2 = "0";
    }
    if (isNaN(q3)) {
        q3 = "0";
    }
    if (isNaN(q4)) {
        q4 = "0";
    }
    var x = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4);
    return x;
}
function TotalNoofroompax() {

    var p1 = $("#NRoomAdult1").val();
    var p2 = $("#quantity2").val();

};
function addCustomInformation(dayElem, toDay) {
    if (dayElem != undefined) {
        $.ajax({
            type: 'POST',
            url: "/adventure-packages.aspx/AvailablePax",
            data: "{mth:'" + (dayElem.dateObj.getMonth() + 1) + "', yr:'" + dayElem.dateObj.getFullYear() + "',dy:'" + dayElem.dateObj.getDate() + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            async: false,
            success: function (res) {
                var tl = res.d.toString().split('|')[0];
                if (new Date().fp_incr(90) >= new Date(dayElem.dateObj) && new Date(dayElem.dateObj) >= new Date(toDay.toString().split(' ')[0] + ' ' + toDay.toString().split(' ')[1] + ' ' + toDay.toString().split(' ')[2] + ' ' + toDay.toString().split(' ')[3])) {
                    if (parseFloat(tl.split('#')[1]) != 0) {
                        dayElem.innerHTML += "<span class='eventGrn'>" + tl.split('#')[1] + "</span>";
                    }
                    else {
                        dayElem.innerHTML += "<span class='eventRd'>" + tl.split('#')[1] + "</span>";
                    }
                }
            }
        });
    }
};
function GetAvailability(rId) {

    var x = "No";
    //var chkin = $("#TxtFromDate").val();
    //var chkout = $("#TxtTodate").val();
    var chkin = $("input[name*='TxtFromDate']").val();
    var chkout = $("input[name*='TxtTodate']").val();
    var roOf = $("#NRoomcartQty" + rId).val();
    if (chkin != "" && chkout != "") {
        $.ajax({
            type: 'POST',
            url: "/book-now.aspx/CheckAvailabilty",
            data: "{rguid: '" + rId + "',f_dt:'" + chkin + "', t_dt: '" + chkout + "',no_of:'" + roOf + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            async: false,
            success: function (data2) {
                if (data2.d.toString() == "Yes") {
                    x = data2.d.toString();
                }
                else {
                    alert('Rooms are not available for these days');
                }

            }
        });
    }
    return x;
}
function flatpickertime(def) {
    var ds = flatpickr(document.getElementsByClassName('advtimeFlatpickr'), {
        enableTime: true,
        noCalendar: true,
        enableSeconds: false,
        time_24hr: false,
        dateFormat: "H:i",
        defaultHour: def,
        defaultMinute: 0,
        minTime: def + ':00',
    });
};
