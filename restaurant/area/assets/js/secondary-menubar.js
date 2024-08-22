SecondaryHeaderSliderDesktop();
            $('#closeAnnouncement').on("click", function () {
        SecondaryHeaderSliderDesktop();
            });
            $('#closeOfflinePromotionAnnouncement').on("click", function () {
        SecondaryHeaderSliderDesktop();
            });

            function SecondaryHeaderSliderDesktop() {
                var topMenu = jQuery(".secondary-header"),
                    // mainHeader = jQuery(".main-header"),
                    // announcementBar = jQuery(".announcement-call"),
                    offset = 10,
                    topMainMenuHeight = topMenu.outerHeight() + offset,
                    // All list items
                    menuItems = topMenu.find('a[href*="#"]'),
                    // Anchors corresponding to menu items
                    scrollItems = menuItems.map(function () {
                        var href = jQuery(this).attr("href"),
                            id = href.substring(href.indexOf('#')),
                            item = jQuery(id);
                        //console.log(item)
                        if (item.length) {
                            return item;
                        }
                    });

                // so we can get a fancy scroll animation
                menuItems.click(function (e) {
                    var href = jQuery(this).attr("href"),
                        id = href.substring(href.indexOf('#'));
                    offsetTop = href === "#" ? 0 : jQuery(id).offset().top - topMainMenuHeight + 1;
                    jQuery('html, body').stop().animate({
        scrollTop: offsetTop
                    }, 100);
                    // e.preventDefault();
                });

                // Bind to scroll
                jQuery(window).scroll(function () {
                    // Get container scroll position
                    var fromTop = jQuery(this).scrollTop() + topMainMenuHeight;

                    // Get id of current scroll item
                    var cur = scrollItems.map(function () {
                        if (jQuery(this).offset().top < fromTop)
                            return this;
                    });

                    // Get the id of the current element
                    cur = cur[cur.length - 1];
                    var id = cur && cur.length ? cur[0].id : "";

                    menuItems.removeClass("active");
                    if (id) {
                        var bb = menuItems.parent().end().filter("[href*='#" + id + "']");
                        menuItems.parent().end().filter("[href*='#" + id + "']").addClass("active");
                        if ($(window).width() < 991) {

                            var parentIndex = $('.navigationLink.active').parent();
                            // console.log(parentIndex.index());
                            var multiplier = 0;
                            if (parentIndex.index() <= 1) {
        multiplier = 0;
                            } else if (parentIndex.index() <= 4) {
        multiplier = 100;
                            } else if (parentIndex.index() >= 5) {
        multiplier = 120;
                            }
                            $('.secondary-header').stop().animate({
        scrollLeft: parentIndex.index() * multiplier
                            }, 300);
                        }
                    }
                })
            }

