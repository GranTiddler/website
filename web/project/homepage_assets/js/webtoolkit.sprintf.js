var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

sprintfWrapper={init:function(){if("undefined"==typeof arguments||1>arguments.length||"string"!=typeof arguments[0]||"undefined"==typeof RegExp)return null;for(var a=arguments[0],d=RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g),b=[],e=[],g=0,h=0,i=0,h=0,f="",c=null;c=d.exec(a);)c[9]&&(g+=1),i=d.lastIndex-c[0].length,e[e.length]=a.substring(h,i),h=d.lastIndex,b[b.length]={match:c[0],left:c[3]?!0:!1,sign:c[4]||"",pad:c[5]||" ",min:c[6]||0,precision:c[8],code:c[9]||"%",negative:0>
parseInt(arguments[g])?!0:!1,argument:""+arguments[g]};e[e.length]=a.substring(h);if(0==b.length)return a;if(arguments.length-1<g)return null;a=null;for(a=0;a<b.length;a++)"%"==b[a].code?substitution="%":"b"==b[a].code?(b[a].argument=""+Math.abs(parseInt(b[a].argument)).toString(2),substitution=sprintfWrapper.convert(b[a],!0)):"c"==b[a].code?(b[a].argument=""+String.fromCharCode(parseInt(Math.abs(parseInt(b[a].argument)))),substitution=sprintfWrapper.convert(b[a],!0)):"d"==b[a].code?(b[a].argument=
""+Math.abs(parseInt(b[a].argument)),substitution=sprintfWrapper.convert(b[a])):"f"==b[a].code?(b[a].argument=""+Math.abs(parseFloat(b[a].argument)).toFixed(b[a].precision?b[a].precision:6),substitution=sprintfWrapper.convert(b[a])):"o"==b[a].code?(b[a].argument=""+Math.abs(parseInt(b[a].argument)).toString(8),substitution=sprintfWrapper.convert(b[a])):"s"==b[a].code?(b[a].argument=b[a].argument.substring(0,b[a].precision?b[a].precision:b[a].argument.length),substitution=sprintfWrapper.convert(b[a],
!0)):"x"==b[a].code?(b[a].argument=""+Math.abs(parseInt(b[a].argument)).toString(16),substitution=sprintfWrapper.convert(b[a])):"X"==b[a].code?(b[a].argument=""+Math.abs(parseInt(b[a].argument)).toString(16),substitution=sprintfWrapper.convert(b[a]).toUpperCase()):substitution=b[a].match,f+=e[a],f+=substitution;return f+=e[a]},convert:function(a,d){a.sign=d?"":a.negative?"-":a.sign;var b=a.min-a.argument.length+1-a.sign.length,b=Array(0>b?0:b).join(a.pad);return a.left?"0"==a.pad||d?a.sign+a.argument+
b.replace(/0/g," "):a.sign+a.argument+b:"0"==a.pad||d?a.sign+b+a.argument:b+a.sign+a.argument}};sprintf=sprintfWrapper.init;

}
/*
     FILE ARCHIVED ON 12:17:18 Oct 21, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:47:30 Jul 19, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 310.242
  exclusion.robots: 0.222
  exclusion.robots.policy: 0.216
  RedisCDXSource: 0.502
  esindex: 0.007
  LoadShardBlock: 294.768 (3)
  PetaboxLoader3.datanode: 327.141 (4)
  CDXLines.iter: 12.819 (3)
  load_resource: 216.915
  PetaboxLoader3.resolve: 46.169
*/