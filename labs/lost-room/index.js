(function(){"use strict";function n(n,t,e){return 0>e||e>=n.length?"#":0>t||t>=n[e].length?"#":n[e][t]}function t(n,t,a,i){return 0>a||a>=n.length?!1:0>t||t>=n[a].length?!1:(n[a]=e(n[a],t,i),!0)}function e(n,t,e){return n.substr(0,t)+e+n.substr(t+1)}function a(t,e,a,i,o,c){var u=n(t,e,a),f=0>i?"[{(":"]})";return!u||f.indexOf(u)<0?o(t,e,a,c):tt(t,et[u],function(n,e,a){return o(t,e+i,a,c)})}function i(t,e,i,o){return a(t,e,i,o,n)}function o(n,e,i,o,c){return a(n,e,i,o,t,c)}function c(e,a){for(var c;c=f(e,a);){var u=c[0],r=c[1];"v"===n(e,u,r-1)?(t(e,u,r-1," "),t(a,u,r,"v")):">"===i(e,u-1,r,-1)?(o(e,u-1,r,-1," "),t(a,u,r,">")):"<"===i(e,u+1,r,1)?(o(e,u+1,r,1," "),t(a,u,r,"<")):"^"===n(e,u,r+1)&&(t(e,u,r+1," "),t(a,u,r,"^"))}}function u(n){return n?" "===n:!0}function f(t,e){var a;return $(t,function(o,c,f){return!a&&u(o)&&u(n(e,c,f))?">"===i(t,c-1,f,-1)?a=[c,f]:"<"===i(t,c+1,f,1)?a=[c,f]:"v"===n(t,c,f-1)?a=[c,f]:"^"===n(t,c,f+1)?a=[c,f]:void 0:void 0}),a}function r(e,a){for(var i;i=l(e,a);){var o=i[0],c=i[1],u=n(e,o,c);">"===u&&t(a,o,c,"<"),"<"===u&&t(a,o,c,">"),"^"===u&&t(a,o,c,"v"),"v"===u&&t(a,o,c,"^")}}function v(n,t){return n!==t&&t?-1===" @[]{}()".indexOf(t):!1}function l(t,e){for(var a=0;a<t.length;a++)for(var i=0;i<t[a].length;i++)if(" "===n(e,i,a)){var o=n(t,i,a),c=i,u=a;if(-1!=="<>^v".indexOf(o)){">"===o&&c++,"<"===o&&c--,"^"===o&&u--,"v"===o&&u++;var f=n(t,c,u),r=n(e,c,u);if(v(o,f)||v(o,r))return[i,a]}}}function d(n,e){$(n,function(n,a,i){"[]{}()".indexOf(n)>-1&&t(e,a,i,n)})}function s(e,a,i,o){" "===n(e,i,o)&&t(a,i,o,".")}function m(n,t,e,a,c){" "===i(n,e,a,c)&&o(t,e,a,c,".")}function O(n,t){ot(n,"O",function(e,a){m(n,t,e-1,a,-1),m(n,t,e+1,a,1),s(n,t,e,a-1),s(n,t,e,a+1)})}function h(n,e,a,i){$(n,function(n,o,c){n===a&&t(e,o,c,i)})}function A(e,a,i){-1!=="abcdexyz".indexOf(n(e,a,i))&&t(e,a,i," ")}function C(n,t,e){var a=!1,i=!1;tt(n,t.toUpperCase(),function(){a=!0}),tt(n,t.toLowerCase(),function(){i=!0}),a&&i||e()}function b(n,t){C(n,t,function(){ut(n,t.toUpperCase()," "),ut(n,t.toLowerCase()," ")})}function B(n,t){C(n,t,function(){ot(n,t.toUpperCase(),y)})}function y(n,t,e,a){x(a,e,n,t,-1,0),x(a,e,n,t,1,0),x(a,e,n,t,0,-1),x(a,e,n,t,0,1)}function x(e,a,i,o,c,u){for(var f,r=i,v=o;;)if(r+=c,v+=u,f=n(e,r,v)," ".indexOf(f)<0){if(f!==a)return;break}for(i+=c,o+=u,i>r&&(f=i,i=r,r=f,c=-c),o>v&&(f=o,o=v,v=f,u=-u);r>i||v>o;i+=c,o+=u)t(e,i,o,a),y(a,i,o,e)}function g(n){ot(n,"-|",function(e,a){t(n,e,a," ")})}function D(t){ot(t,"+",function(e,a){("0"===n(t,e-1,a)||"0"===n(t,e+1,a)||"0"===n(t,e,a-1)||"0"===n(t,e,a+1))&&p(t,e,a)})}function p(n,t,e){Z(n,t,e,-1,0),Z(n,t,e,1,0),Z(n,t,e,0,-1),Z(n,t,e,0,1)}function Z(e,i,o,c,u){for(var f;;){if(i+=c,o+=u,0===u&&a(e,i,o,c,function(n,t,e){i=t,o=e}),f=n(e,i,o),!(" <>^vOo.@".indexOf(f)>-1)){"+"===f&&p(e,i,o);break}t(e,i,o,0===c?"|":"-")}}function X(n){return-1==="#ABCDEXYZ[]{}()".indexOf(n)}function w(n,e,a){return tt(n.slice(),"@",function(n,o,c,u){return X(i(u,o+e,c+a,e))?(t(u,o,c," "),[o,c,u]):!1})}function E(n,t,e,a,c,u){t=t.slice();var f=!1,r=i(n,e+c,a+u,c),v=i(t,e+c,a+u,c);return-1!==" =".indexOf(v)&&(f=!0),1===c&&"<"===r&&(f=!1),-1===c&&">"===r&&(f=!1),1===u&&"^"===r&&(f=!1),-1===u&&"v"===r&&(f=!1),f&&o(t,e+c,a+u,c,"@"),t}function I(n){return"#"===n?"wall":"@"===n?"hero":"="===n?"exit":" "===n?"space":"><^vOo.".indexOf(n)>-1?"enemy":"abcdexyz".indexOf(n)>-1?"key":"ABCDEXYZ".indexOf(n)>-1?"door":"[]{}()".indexOf(n)>-1?"portal":"0123".indexOf(n)>-1?"counter":"+-|".indexOf(n)>-1?"laser":n}function T(n){return'<i class="c-'+I(n)+'">'+n+"</i>"}function k(n){return n.split("").map(T).join("")}function Y(n){return n.map(k).join("")}function z(n,t){var e=document.getElementById("stage"),a=document.getElementById("words");a.innerHTML=t,e.innerHTML=Y(n),e.style.width=1.5*n[0].length+"em",e.style.marginLeft=-(.75*n[0].length)+"em",e.style.marginTop=-(.75*n.length)+"em",a.style.marginTop=e.style.marginTop.slice(1)}function L(n){st.push(n)}function M(){try{mt=localStorage.getItem("level")||0}catch(n){mt=0}W()}function j(n,t,e){U(e)||H()||n*t===0&&1===Math.abs(n+t)&&(V=lt(V,n,t),F()&&(R="I died."),G()&&(R="I made it."))}function H(){return F()||G()?(G()&&S(1),S(0),!0):void 0}function S(n){mt+=n,W();try{localStorage.setItem("level",mt)}catch(t){}}function U(n){69===n&&S(1),82===n&&S(0),81===n&&S(-1)}function q(){return[V.slice(),R]}function W(){mt=Math.max(0,Math.min(st.length-1,mt)),V=st[mt].data,R=st[mt].title}function F(){return-1===V.join("").indexOf("@")}function G(){return-1===V.join("").indexOf("=")}function J(n){switch(n){case 38:case 87:case 75:return[0,-1,0];case 40:case 83:case 74:return[0,1,0];case 37:case 65:case 72:return[-1,0,0];case 39:case 68:case 76:return[1,0,0]}}function K(n){document.addEventListener("keydown",function(t){var e=J(t.keyCode);e?n.apply(null,e):n(0,0,t.keyCode)})}function N(){dt.apply(null,q())}function P(n){return n.map(function(n,t){return t?"         "+n:n}).join("\n")}function Q(n,t,e,a){At(n,t,function(){return ft(n,e,a)})}var R,V,$=function(t,e){for(var a=0;a<t.length;a++)for(var i=0;i<t[a].length;i++)e(n(t,i,a),i,a,t);return t},_=function(n,e){$(n,function(a,i,o){t(n,i,o,e)})},nt=function(n,e){$(e,function(e,a,i){e&&" "!==e&&t(n,a,i,e)})},tt=function(n,t,e){var a=null;return $(n,function(i,o,c){t!==i||a||(a=e(i,o,c,n))}),a},et={"{":"}","[":"]","(":")","}":"{","]":"[",")":"("},at=function(n){var t=n.slice(),e=n.slice();return _(e," "),c(t,e),nt(t,e),t},it=function(n){var t=n.slice(),e=n.slice();return _(e," "),r(t,e),nt(t,e),t},ot=function(n,t,e){$(n,function(a,i,o){t.indexOf(a)>-1&&e(i,o,a,n)})},ct=function(n){var t=n.slice(),e=n.slice();return _(e," "),d(t,e),O(t,e),h(t,e,"o","O"),h(t,e,".","o"),nt(t,e),t},ut=function(n,e,a){ot(n,e,function(e,i){t(n,e,i,a)})},ft=function(n,t,e){return n=n.slice(),A(n,t,e),"abcde".split("").forEach(function(t){b(n,t)}),"xyz".split("").forEach(function(t){B(n,t)}),n},rt=function(n){return $(n.slice(),function(n,e,a,i){"0123".indexOf(n)>-1&&t(i,e,a,""+(+n+3)%4)})},vt=function(n){return n=n.slice(),g(n),D(n),n},lt=function(n,t,e){var a=n,i=w(n,t,e);return i?(a=i[2],a=ft(a,i[0]+t,i[1]+e),a=at(a),a=it(a),a=ct(a),a=rt(a),a=vt(a),a=E(n,a,i[0],i[1],t,e)):a},dt=z,st=[],mt=0;L({name:"01",title:"I awoke and ran to the door.",data:["           "," @       = ","           "]}),L({name:"02",title:"I'm in a hallway.",data:["    #   #  ","#@# # # #=#","  #   #    "]}),L({name:"03",title:"TODO: Story 1",data:["   #   ## ##   #   "," @     #       # = ","   #   ## ##   #   ","# ####### ### ### #","   ## ##   ## ##   ","   #       #   #   ","   ## ##   ## ##   ","# ### ### ### ### #","   #   ## ##   #   ","       #           ","   #   ## ##   #   "]}),L({name:"04",title:"I don't want to die.",data:["     >     "," @       = ","     <     "]}),L({name:"05",title:"More guards.",data:["## v     ##","##   v   ##","@      v = ","##       ##","##       ##"]}),L({name:"06",title:"I'll sneak behind them.",data:["## v@  ##","##   ^ ##","## ### ##","   v v   "," ^     ^ "," ###=### ","         "]}),L({name:"07",title:"Oh, they have buddies now.",data:["   v  v  ="," #       #"," #      ##"," #    ^###"," #    ####","@# ^ #####"]}),L({name:"08",title:"TODO: Story 2",data:["           "," @       = ","           "]}),L({name:"09",title:"Hmm...",data:["#####  @ A=","##### #####","a     #####"]}),L({name:"10",title:"",data:["bA ##vC=","## ## ##",">     @ ","## ## ##","## ## ##","       <","## ## ##","a ^## Bc"]}),L({name:"11",title:"TODO:",data:["   @  # > #  "," ### ### ####","#### ####### ","   a  A   <  ","B### ### ### "," ####### ####","  # > #  b#  "," ### ### ####","B### ####### ","   c  C < #  ","######## ####"," ### ### ### ","    = D  d < "]}),L({name:"12",title:"",data:["v@      <       <"," ############### "," #v           <# "," # ######## ## # "," # #v       <# # "," # # ## #### # # "," # # #v   <#   # "," # # # ### # # # ","v# # #  =# # # #^"," # # # ### # # # ","   # #>   ^# # # "," # # ####### # # "," # #>       ^# # "," # ######## ## # "," #>           ^# "," ## ############ ",">       >       ^"]}),L({name:"13",title:"It's not that scary.",data:["##   @   ##","# >       #","       <   ","   >       "," <##>  ## <","> #a# #=#> "," > B   A   ","#    #    #","##  #b#  ##","##       ##","##       ##","##^#^#^#^##"]}),L({name:"14",title:"Ooh, some of these.",data:["     #     "," @ ] # [ { ","     #     ","###########"," )   #     ","     # ( = ","   } #     "]}),L({name:"15",title:"What am I, a frog?",data:["       =            ","############# ######","{ >>> > > > >>> > >)","####### ############","( > > >>> > >>> > >}","############# ######","[<< < <<  <  <  << ]","####### ############","             @      "]}),L({name:"16",title:"Butler + Library + Candlestick",data:["   # #   # A   ","( =# #c{ # # b "," ^ # #   # #   ","#### ##### ####","@   v     ^   ]","#### ##### ####","   # #   # #   ","a[ # # } # # ) ","   # B   # C   "]}),L({name:"17",title:"There must be a pattern to these exits.\n\nIt's always the same one.",data:["@# ]#[ #( #(   "," # ]#[ ##### # ","   ]#[ #(=   # ","#####[ ####### ","       #     # "," ####### ]## # "," # }#{ # }#  # "," # }#{ # )# ## ","   }#{   )#    "]}),L({name:"18",title:"Hmm, tight quarters.",data:["{         ]","{    @    ]","###########","[ ###=### }","#^bA# #Bav#","# #BA BA# #"]}),L({name:"19",title:"19",data:["@="]}),L({name:"20",title:"A plague broke out here.",data:["o     o        ","O   .          ","OO@         =  ","o              ","     o .    ..O"]}),L({name:"21",title:"These bio-labs creep me out.",data:["@          ","########## ","         # ","[ .     }# ","         # ","########## ","         # ","{       ]# ","         # ","########## ","=          "]}),L({name:"22",title:"",data:[" v  v  v  v            O"," v  v  v  v             "," v     v                "," v  ^  v  ^#         o  "," v  ^  v  ^# ###########",".v  ^  v  ^#           ="," v  ^  v  ^# ###########","    ^  v  ^#          o "," ^  ^  v  ^#            "," ^  ^     ^#            ","@^  ^  ^  ^#     O     ."]}),L({name:"23",title:"Two sides to every story.",data:["##############.oOo.","                @  "," ################# "," #C C# D #   # B## "," # ###C# #DAD#C#D# "," # AD# #C#BAD# #B# "," #C#D# # #DAD# #D# "," # C #DCB#   #C ## "," ################# ","         bdBD AAaa ","#############c#####","#############=#####"]}),L({name:"24",title:"Avoid to survive.",data:["a@A=","# ##","a A<","# ##","a A<","# ##","a A<"]}),L({name:"25",title:"",data:[".@ Ba#bCc# #      =","## # A # D ### ####","a# Cb#cCc# #     < "," # # C # C ##### ##"," # Aa#cAd# # >     "," # # C # A ### ####","   Ba#cCc# #     < "," # # D # B ##### ##","b#  b#dBb# ABCD    "]}),L({name:"26",title:"26",data:["@="]}),L({name:"27",title:"",data:["####3####","    +    ","       < ","      @<=","       < "]}),L({name:"28",title:"",data:["# +       + #","#   #####   #","1   #   #   3","+ + + + + + +","= #   #   #  ","  #   #   #@ ","    +   +   +"]}),L({name:"29",title:"29",data:["@="]}),L({name:"30",title:"30",data:["@="]}),L({name:"31",title:"31",data:["@="]}),L({name:"32",title:"32",data:["@="]}),L({name:"33",title:"",data:["   >      "," #AZBYCX##"," #       ="," #AZBYCX##","          ","##### ### ","##### c x ","####### ##","@ azby    "]}),L({name:"34",title:"34",data:["@="]}),L({name:"35",title:"35",data:["@="]}),L({name:"36",title:"36",data:["@="]}),L({name:"37",title:"37",data:["@="]}),L({name:"38",title:"38",data:["@="]}),L({name:"39",title:"39",data:["@="]}),L({name:"40",title:"",data:["@    v           v     v     ","  ^     ^  ^  ^     ^     ^  "," <# <# <#> # <# <# <# <#> #> ","        v  v        v        ","  ^  ^        ^  ^     ^  ^  ","> #> # <# <#> #> #> #> # <# <","     v  v           v  v     ","  ^        ^  ^  ^        ^  ","> # <# <#> #> #> # <#> #> #> ","  v              v        v  ","     ^  ^  ^  ^     ^  ^     "," <#> #> # <#> # <#> # <# <#> ","     v  v  v  v     v  v     ","  ^              ^        ^  "," <# <#> # <#> #> # <# <#> #> ","  v     v     v  v  v        ","     ^     ^           ^  ^ ="]}),L({name:"41",title:"41",data:["@="]}),L({name:"42",title:"42",data:["@="]}),L({name:"43",title:"43",data:["@="]}),L({name:"44",title:"44",data:["@="]}),L({name:"45",title:"45",data:["@="]}),L({name:"46",title:"46",data:["@="]}),L({name:"47",title:"47",data:["@="]}),L({name:"48",title:"48",data:["@="]}),L({name:"49",title:"49",data:["@="]}),L({name:"50",title:"50",data:["@="]});var Ot=K;Ot(function(n,t,e){j(n,t,e),N()}),setTimeout(function(){M(),N()},0);var ht=function(n,t,e){if(n!==t)throw new Error(e)},At=function(n,t,e){var a=P(e(n));n=P(n),t=P(t),ht(a,t,"\nexpected "+n+"\n\nto equal "+t+"\n\nbut was  "+a+"\n")},Ct=function(n){for(var t=0;t<n.length-1;t++)At(n[t][0],n[t+1][0],function(e){return lt(e,n[t][1],n[t][2])})},bt=0,Bt=0,yt=function(n){try{n(),bt++}catch(t){console.log(t.stack),Bt++}};setTimeout(function(){console.log(""+bt+" passed : "+Bt+" failed")},0),yt(function(){At(["0123"],["3012"],rt)}),yt(function(){At(["0123","1230","2301","3012"],["3012","0123","1230","2301"],rt)}),yt(function(){At(["         "," .  o  O ","         "],["       . "," o  O .O.","       . "],ct)}),yt(function(){At(["      [  ","{O]      ","      }  "],[" .    [. ","{O]      "," .   .}  "],ct)}),yt(function(){At(["v > "," ^ <"],[" ^ >","v < "],at)}),yt(function(){At([">> ","<< "],[" >>","<< "],at)}),yt(function(){At(["    "," >v "," ^< ","    "],["    "," >v "," ^< ","    "],at)}),yt(function(){At([">>>v","^>vv","^^ v","^^<<"],["^>>>","^^>v","^^vv"," <<v"],at)}),yt(function(){At([" v ","> <"," ^ "],["   ",">v<"," ^ "],at)}),yt(function(){At(["> <"," ^ "],[" ><"," ^ "],at)}),yt(function(){At([" <","^ "],["< ","^ "],at)}),yt(function(){At([" [<   ] "," (   >) ",">}    { "],[" [   <] "," (>   ) "," }    {>"],at)}),yt(function(){At(["vv^^","><><"],["^^vv","<><>"],it)}),yt(function(){At(["    "," v< "," >^ ","    "],["    "," ^> "," <v ","    "],it)}),yt(function(){At(["^ >>","^   ","   v","<< v"],["v <<","v   ","   ^",">> ^"],it)}),yt(function(){At(["v <<","v   ","   ^",">> ^"],["v <<","v   ","   ^",">> ^"],it)}),yt(function(){At([">A ","B>C","  ^","E<D"],["<A ","B<C","  v","E>D"],it)}),yt(function(){At(["<A ","B<C","  v","E>D"],[">A ","B>C","  ^","E<D"],it)}),yt(function(){At([">a ","b>c","  ^","e<d"],["<a ","b<c","  v","e>d"],it)}),yt(function(){At(["<a ","b<c","  v","e>d"],[">a ","b>c","  ^","e<d"],it)}),yt(function(){At(["  0  ","  +  ","     ","     "],["  0  ","--+--","  |  ","  |  "],vt)}),yt(function(){At([" 0 + "," +   ","     "," +   "],[" 0 + ","-+---"," |   ","-+---"],vt)}),yt(function(){At([" 0   "," +  ]","  [  "],[" 0   ","-+--]"," |[--"],vt)}),yt(function(){At([" 0        "," + ><^v @ ","          "," O        "," o        "," .        ","          "],[" 0        ","-+--------"," |        "," |        "," |        "," |        "," |        "],vt)}),yt(function(){At([" 1   ","-+---"," |   "],[" 1   "," +   ","     "],vt)}),yt(function(){Ct([[["   ","   ","   "],0,1],[["   ","   ","   "],0,-1],[["   ","   ","   "],1,0],[["   ","   ","   "],-1,0],[["   ","   ","   "]]])}),yt(function(){Ct([[["   "," @ ","   "],0,1],[["   ","   "," @ "],0,1],[["   ","   "," @ "],1,0],[["   ","   ","  @"],1,0],[["   ","   ","  @"],0,-1],[["   ","  @","   "],0,-1],[["  @","   ","   "],0,-1],[["  @","   ","   "],-1,0],[[" @ ","   ","   "],-1,0],[["@  ","   ","   "],-1,0],[["@  ","   ","   "]]])}),yt(function(){Ct([[["# #"," @ "," # "],0,1],[["# #"," @ "," # "],1,0],[["# #","  @"," # "],0,-1],[["# #","  @"," # "],-1,0],[["# #"," @ "," # "],0,-1],[["#@#","   "," # "],-1,0],[["#@#","   "," # "]]])}),yt(function(){Ct([[["   "," @v"," # "],0,1],[["   "," @v"," # "],-1,0],[["   ","@  "," #^"],0,-1],[["@  ","  ^"," # "],0,-1],[["@  ","  ^"," # "],0,1],[["  v","@  "," # "],0,1],[["   ","  v","@# "]]])}),yt(function(){Ct([[[" > "," @ "," # "],0,1],[[" > "," @ "," # "],-1,0],[["  <","@  "," # "],0,1],[[" < ","   ","@# "],0,-1],[[">  ","@  "," # "],0,1],[[" > ","   ","@# "],0,-1],[["  <","@  "," # "]]])}),yt(function(){Ct([[[">   <","@    "],1,0],[[" > < "," @   "],1,0],[["  <> ","  @  "],1,0],[[" <  <","   @ "],1,0],[[">  < ","    @"],-1,0],[[" <>  ","   @ "],-1,0],[[">  > ","  @  "],-1,0],[[" >  <"," @   "],-1,0],[["  <> ","@    "]]])}),yt(function(){Ct([[["@  <"],1,0],[[" @< "],1,0],[[" <  "]]])}),yt(function(){Ct([[[">>   #     ",">>>  #     ",">>>> #     ","   <<#     ","  <<<#     ","###########","     #     ","     #     ","     #  @  ","     #     ","     #     "],1,0],[[" >>  #     "," >>> #     "," <<<<#     ","  << #     "," <<< #     ","###########","     #     ","     #     ","     #   @ ","     #     ","     #     "],-1,0],[["  >> #     ","  <<<#     ",">>>> #     "," <<  #     ",">>>  #     ","###########","     #     ","     #     ","     #  @  ","     #     ","     #     "]]])}),yt(function(){Ct([[[" >@"],-1,0],[["  <"]]])}),yt(function(){Ct([[["a@A="],1,0],[["a@A="],-1,0],[["@  ="],1,0],[[" @ ="],1,0],[["  @="],1,0],[["   @"]]])}),yt(function(){Ct([[["}@] [ ) ( <"],-1,0],[["}@] [ ) ( <"],1,0],[["} ] [@) (< "],1,0],[["} ] [<) (  "]]])}),yt(function(){Ct([[["2+ > .oO"," v <    ","       @"," +      "],0,1],[["1+  <oOO","  <    ."," ^      "," +     @"],0,-1],[["0+------"," |    .o"," |     @","-+------"],0,1],[["3+      ","      oO","        "," +     @"],0,1]])}),yt(function(){Q(["aA bB cC dD eE"],["aA bB cC dD eE"],2,0)}),yt(function(){Q([" A  B  C  D  E"],["              "],2,0)}),yt(function(){Q(["a  b  c  d  e "],["              "],2,0)}),yt(function(){Q([" a AAA"],["      "],1,0)}),yt(function(){Q([" z Z Z"],["   ZZZ"],1,0)}),yt(function(){Q(["   Z Z"," z    ","   Z Z"],["   ZZZ","   ZZZ","   ZZZ"],1,1)}),yt(function(){Q(["   XYZ","xyz   ","   XYZ"],["   XYZ","x z Y ","   XYZ"],1,1)}),yt(function(){Q(["xX     X"],[" XXXXXXX"],0,0)})}).call(this);