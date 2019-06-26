//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


var tg = moment.defineLocale('tg', {
    months : 'ጥሪ_ለካቲት_መጋቢት_ሚያዝያ_ጉንበት_ሰነ_ሓምለ_ነሓሰ_መስከረም_ጥቅምቲ_ሕዳር_ታሕሳስ'.split('_'),
    monthsShort : 'ጥሪ_ለካ_መጋ_ሚያ_ጉንበ_ሰነ_ሓም_ነሓ_መስ_ጥቅ_ሕዳ_ታሕ'.split('_'),
    weekdays : 'ሰንበት_ሰኑይ_ሰሉስ_ረቡዕ_ሓሙስ_ዓርቢ_ቀዳም'.split('_'),
    weekdaysShort : 'ሰንበት_ሰኑይ_ሰሉስ_ረቡዕ_ሓሙስ_ዓርቢ_ቀዳም'.split('_'),
    weekdaysMin : 'ሰንበት_ሰኑይ_ሰሉስ_ረቡዕ_ሓሙስ_ዓርቢ_ቀዳም'.split('_'),
   longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'D/M/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[ሎሚ መዓልቲ ኣብ] LT',
        nextDay : '[ጽባሕ ኣብ] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[ትማሊ ኣብ] LT',
        lastWeek : '[ዝሓለፈ] dddd [ኣብ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'in %ታት',
        past : '%s ይገብር',
        s : 'ቅድሚ ቁሩብ ካሊኢታት',
        m : 'ቅድሚ ሓደ  ደቒቕ',
        mm : '%d ደቒቕ',
        h : 'ቅድሚ ሰዓት',
        hh : '%d ሰዓታት',
        d : 'ሓደ መዓልቲ',
        dd : '%d መዓልታት',
        M : 'ቅድሚ ወርሒ',
        MM : '%d ኣዋርሕ',
        y : 'ሓደ ዓመት ኣቢሉ',
        yy : '%d ዓመታት'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (~~(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'ቀዳማይ' :
            (b === 2) ? 'ካልኣይ' :
            (b === 3) ? 'ሳልሳይ' : 'th';
        return number + output;
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

return tg;

})));
