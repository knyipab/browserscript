/*
we = whole_element (<div>)
me = menu (horizontal bar <ul>): mc = menu_collapse (first <li>), ml = menu_langage (second <li>), mi = menu_item (<li>)
sm = sub_menu (<ul>): si = sub_menu_item (<li>), sl = sub_menu_language (<li>)
xxh = xx_hover
    ______________________________________________________________________
    |                                                                     |
    |      ______ ______ _____________ _____________ ______               | 
    |     |      |      |             |             |      |              | 
    |     |  mc  |  ml  |      mi     |      mi     |  mi  | <-- me       |
    |     |______|______|_____________|_____________|______|              | 
    |            |      |             |             |                     |   <--we
    |            |  sl  |             |      si     |                     |
    |            |______|             |_____________|                     |
    |            |      | <-- sm      |             |                     |
    |            |  sl  |             |      si     | <-- sm              |
    |            |______|             |_____________|                     |
    |                                 |             |                     |
    |                                 |      si     |                     |
    |                                 |_____________|                     |
    |                                                                     |
    |_____________________________________________________________________|
*/
var themes = {
  'One White': {
    sm: 'position: absolute; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; ',
    sl: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 0px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    si: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; text-align: center; padding: 2px 8px 2px 8px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sih: 'background-color: #AAAAAA; ',
    slh: 'background-color: #AAAAAA; ',
    me: 'left: 0; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; display: table; ',
    mc: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #AAAAAA; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    mch: 'background-color: #606060; ',
    mi: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    ml: 'display: block; font-family: Calibri; font-size: 16px; color: #000000; background-color: #FFFFFF; height: 40px; text-align: left; vertical-align: middle; padding: 0px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    mih: 'background-color: #AAAAAA; ',
    mlh: 'background-color: #AAAAAA; ',
    we: 'position: fixed; z-index: 2147483647; margin: 0px; padding: 0px; ',
    bg: 'z-index: 2147483647; background: #000000; position: fixed; left: 0; top: 0; bottom: 0; right: 0; opacity: 0.5;', 
    ed: 'z-index: 2147483647; background: #FFFFFF; position: fixed; left: 10%; top: 10%; width: 80%; height: 80%;', 
    ex: 'z-index: 2147483647; width: 40px; height: 40px; line-height: 40px; text-align: center; user-select: none; position: fixed; top: calc(10% - 20px); right: calc(10% - 20px); pointer-events: auto; background: #EEEEEE; border-radius: 50%;',
  },
  'One Dark': {
    sm: 'position: absolute; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; ',
    sl: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; text-align: center; padding: 0px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    si: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; text-align: center; padding: 2px 8px 2px 8px; margin: 0px; border-bottom: solid #CCCCCC 1px; text-decoration: none; user-select: none; ',
    sih: 'background-color: #444444; ',
    slh: 'background-color: #444444; ',
    me: 'left: 0; box-shadow: 0 0 24px 0 rgba(0,0,0,0.2),0 0 77px 0 rgba(0,0,0,0.22); margin: 0px; padding: 0px; display: table; ',
    mc: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #666666; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    mch: 'background-color: #AAAAAA; ',
    mi: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; height: 40px; text-align: left; vertical-align: middle; padding: 0px 10px 0px 10px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    ml: 'display: block; font-family: Calibri; font-size: 16px; color: #EEEEEE; background-color: #222222; height: 40px; text-align: left; vertical-align: middle; padding: 0px; boarder-left: solid #CCCCCC 0.25px; border-right: solid #CCCCCC 0.25px; text-decoration: none; margin: 0px; user-select: none; display: table-cell;',
    mih: 'background-color: #444444; ',
    mlh: 'background-color: #444444; ',
    we: 'position: fixed; z-index: 2147483647; margin: 0px; padding: 0px; ',
    bg: 'z-index: 2147483647; background: #000000; position: fixed; left: 0; top: 0; bottom: 0; right: 0; opacity: 0.5;', 
    ed: 'z-index: 2147483647; background: #FFFFFF; position: fixed; left: 10%; top: 10%; width: 80%; height: 80%;', 
    ex: 'z-index: 2147483647; width: 40px; height: 40px; line-height: 40px; text-align: center; user-select: none; position: fixed; top: calc(10% - 20px); right: calc(10% - 20px); pointer-events: auto; background: #EEEEEE; border-radius: 50%;',
  }
};