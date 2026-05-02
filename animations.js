/* js/animations.js — SVG анимации для каждого упражнения */
const EX_ANIMATIONS = {

/* ===========================
   МУЖСКИЕ УПРАЖНЕНИЯ
=========================== */

'Жим штанги лёжа': {badge:'ГРУДЬ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080c08"/>
<!-- скамья -->
<rect x="70" y="88" width="180" height="14" rx="5" fill="#1a2a1a"/>
<rect x="80" y="102" width="12" height="30" fill="#142014"/>
<rect x="228" y="102" width="12" height="30" fill="#142014"/>
<!-- голова -->
<ellipse cx="100" cy="78" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="78;75;78" dur="2.5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="98" cy="67" rx="11" ry="6" fill="#4a2c10"/>
<!-- торс -->
<rect x="110" y="70" width="100" height="22" rx="7" fill="#1a5a2a">
  <animate attributeName="y" values="70;67;70" dur="2.5s" repeatCount="indefinite"/>
</rect>
<!-- ноги -->
<line x1="195" y1="92" x2="215" y2="115" stroke="#1a4a1a" stroke-width="11" stroke-linecap="round"/>
<line x1="210" y1="92" x2="228" y2="112" stroke="#1a4a1a" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="215" cy="117" rx="10" ry="5" fill="#0a2010"/>
<ellipse cx="230" cy="113" rx="10" ry="5" fill="#0a2010"/>
<!-- левая рука -->
<line x1="128" y1="76" x2="128" y2="44" stroke="#1a5a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="44;30;44" dur="2.5s" repeatCount="indefinite"/>
</line>
<!-- правая рука -->
<line x1="168" y1="76" x2="168" y2="44" stroke="#1a5a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="44;30;44" dur="2.5s" repeatCount="indefinite"/>
</line>
<!-- штанга -->
<rect x="52" y="37" width="216" height="7" rx="3" fill="#ccc">
  <animate attributeName="y" values="37;23;37" dur="2.5s" repeatCount="indefinite"/>
</rect>
<rect x="42" y="31" width="12" height="20" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="31;17;31" dur="2.5s" repeatCount="indefinite"/>
</rect>
<rect x="266" y="31" width="12" height="20" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="31;17;31" dur="2.5s" repeatCount="indefinite"/>
</rect>
<rect x="30" y="33" width="12" height="16" rx="3" fill="#888">
  <animate attributeName="y" values="33;19;33" dur="2.5s" repeatCount="indefinite"/>
</rect>
<rect x="278" y="33" width="12" height="16" rx="3" fill="#888">
  <animate attributeName="y" values="33;19;33" dur="2.5s" repeatCount="indefinite"/>
</rect>
<!-- стрелки -->
<text x="160" y="130" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">↑ Жим вверх · Вдох вниз ↑</text>
</svg>`},

'Жим гантелей на наклонной': {badge:'ВЕРХ ГРУДИ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080c08"/>
<!-- наклонная скамья -->
<rect x="60" y="100" width="200" height="12" rx="4" fill="#1a2a1a" transform="rotate(-20 160 106)"/>
<rect x="230" y="80" width="14" height="55" fill="#142014"/>
<rect x="78" y="105" width="12" height="30" fill="#142014"/>
<!-- голова -->
<ellipse cx="240" cy="54" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="54;51;54" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<!-- торс на наклонной -->
<rect x="130" y="72" width="105" height="20" rx="6" fill="#1a4a6a" transform="rotate(-20 182 82)">
  <animate attributeName="y" values="72;69;72" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- руки -->
<line x1="180" y1="70" x2="155" y2="50" stroke="#1a4a6a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="155;140;155" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="50;35;50" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="205" y1="66" x2="230" y2="44" stroke="#1a4a6a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="230;248;230" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="44;30;44" dur="2.2s" repeatCount="indefinite"/>
</line>
<!-- гантели -->
<rect x="130" y="44" width="22" height="8" rx="3" fill="#aaa">
  <animate attributeName="x" values="130;115;130" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="44;29;44" dur="2.2s" repeatCount="indefinite"/>
</rect>
<rect x="238" y="24" width="22" height="8" rx="3" fill="#aaa">
  <animate attributeName="x" values="238;255;238" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="24;10;24" dur="2.2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="130" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Угол 30–45° · Локти чуть согнуты</text>
</svg>`},

'Разводка гантелей': {badge:'ГРУДЬ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080c08"/>
<rect x="70" y="88" width="180" height="14" rx="5" fill="#1a2a1a"/>
<rect x="80" y="102" width="12" height="30" fill="#142014"/>
<rect x="228" y="102" width="12" height="30" fill="#142014"/>
<ellipse cx="100" cy="78" rx="14" ry="13" fill="#c8a882"/>
<ellipse cx="98" cy="67" rx="11" ry="6" fill="#4a2c10"/>
<rect x="110" y="70" width="100" height="22" rx="7" fill="#1a5a2a"/>
<!-- руки разводка с анимацией -->
<line x1="128" y1="80" x2="68" y2="65" stroke="#1a5a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="x2" values="68;125;68" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="65;55;65" dur="2.5s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="80" x2="228" y2="65" stroke="#1a5a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="x2" values="228;170;228" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="65;55;65" dur="2.5s" repeatCount="indefinite"/>
</line>
<!-- гантели -->
<rect x="52" y="58" width="22" height="8" rx="3" fill="#aaa">
  <animate attributeName="x" values="52;108;52" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="y" values="58;48;58" dur="2.5s" repeatCount="indefinite"/>
</rect>
<rect x="248" y="58" width="22" height="8" rx="3" fill="#aaa">
  <animate attributeName="x" values="248;194;248" dur="2.5s" repeatCount="indefinite"/>
  <animate attributeName="y" values="58;48;58" dur="2.5s" repeatCount="indefinite"/>
</rect>
<text x="160" y="130" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Лёгкий изгиб локтей · Дуга</text>
</svg>`},

'Французский жим лёжа': {badge:'ТРИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#08080c"/>
<rect x="70" y="88" width="180" height="14" rx="5" fill="#1a1a2a"/>
<rect x="80" y="102" width="12" height="30" fill="#14141a"/>
<rect x="228" y="102" width="12" height="30" fill="#14141a"/>
<ellipse cx="100" cy="78" rx="14" ry="13" fill="#c8a882"/>
<rect x="110" y="70" width="100" height="22" rx="7" fill="#2a2a5a"/>
<!-- руки вертикально вверх -->
<line x1="138" y1="76" x2="138" y2="42" stroke="#2a2a5a" stroke-width="9" stroke-linecap="round"/>
<line x1="158" y1="76" x2="158" y2="42" stroke="#2a2a5a" stroke-width="9" stroke-linecap="round"/>
<!-- предплечья с анимацией сгибания -->
<line x1="138" y1="42" x2="148" y2="24" stroke="#4a4a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="148;130;148" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="24;40;24" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="158" y1="42" x2="168" y2="24" stroke="#4a4a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="168;148;168" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="24;40;24" dur="2s" repeatCount="indefinite"/>
</line>
<!-- гриф -->
<rect x="128" y="18" width="44" height="7" rx="3" fill="#bbb">
  <animate attributeName="x" values="128;110;128" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="18;34;18" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="130" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Локти фиксированы · Только предплечья</text>
</svg>`},

'Отжимания на брусьях': {badge:'ГРУДЬ/ТРИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<!-- брусья -->
<rect x="85" y="42" width="14" height="85" rx="4" fill="#333"/>
<rect x="221" y="42" width="14" height="85" rx="4" fill="#333"/>
<rect x="70" y="38" width="44" height="8" rx="4" fill="#555"/>
<rect x="206" y="38" width="44" height="8" rx="4" fill="#555"/>
<!-- человек с анимацией -->
<ellipse cx="160" cy="28" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="28;40;28" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="17" rx="11" ry="7" fill="#4a2c10">
  <animate attributeName="cy" values="17;29;17" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<rect x="140" y="39" width="40" height="40" rx="8" fill="#2a4a2a">
  <animate attributeName="y" values="39;52;39" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- руки на брусьях -->
<line x1="148" y1="46" x2="99" y2="46" stroke="#2a4a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y1" values="46;58;46" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="46;46;46" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="172" y1="46" x2="221" y2="46" stroke="#2a4a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y1" values="46;58;46" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="46;46;46" dur="2.2s" repeatCount="indefinite"/>
</line>
<!-- ноги -->
<line x1="152" y1="79" x2="145" y2="112" stroke="#1a3a1a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="79;92;79" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="112;125;112" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="79" x2="175" y2="112" stroke="#1a3a1a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="79;92;79" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="112;125;112" dur="2.2s" repeatCount="indefinite"/>
</line>
<text x="160" y="134" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Наклон вперёд = грудь · Прямо = трицепс</text>
</svg>`},

'Подтягивания широким хватом': {badge:'СПИНА/БИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#08080c"/>
<!-- перекладина -->
<rect x="50" y="18" width="220" height="8" rx="4" fill="#555"/>
<rect x="44" y="5" width="14" height="20" fill="#333"/>
<rect x="262" y="5" width="14" height="20" fill="#333"/>
<!-- человек -->
<ellipse cx="160" cy="42" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="42;28;42" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="30" rx="11" ry="7" fill="#3a2010">
  <animate attributeName="cy" values="30;16;30" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<!-- руки вверх -->
<line x1="80" y1="22" x2="144" y2="52" stroke="#2a2a5a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="52;36;52" dur="2.3s" repeatCount="indefinite"/>
</line>
<line x1="240" y1="22" x2="176" y2="52" stroke="#2a2a5a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="52;36;52" dur="2.3s" repeatCount="indefinite"/>
</line>
<rect x="140" y="52" width="40" height="46" rx="9" fill="#2a2a5a">
  <animate attributeName="y" values="52;36;52" dur="2.3s" repeatCount="indefinite"/>
</rect>
<!-- ноги -->
<line x1="152" y1="98" x2="145" y2="128" stroke="#1a1a4a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="98;82;98" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="128;112;128" dur="2.3s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="98" x2="175" y2="128" stroke="#1a1a4a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="98;82;98" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="128;112;128" dur="2.3s" repeatCount="indefinite"/>
</line>
<text x="160" y="136" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Тяни грудью к перекладине</text>
</svg>`},

'Тяга штанги в наклоне': {badge:'СПИНА', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="122" width="320" height="18" fill="#111"/>
<ellipse cx="106" cy="65" rx="14" ry="13" fill="#c8a882"/>
<ellipse cx="104" cy="54" rx="11" ry="6" fill="#4a2c10"/>
<line x1="160" y1="80" x2="108" y2="58" stroke="#1a3a6a" stroke-width="20" stroke-linecap="round"/>
<!-- ноги -->
<line x1="160" y1="80" x2="140" y2="122" stroke="#1a3a6a" stroke-width="12" stroke-linecap="round"/>
<line x1="160" y1="80" x2="182" y2="122" stroke="#1a3a6a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="140" cy="122" rx="15" ry="6" fill="#0a2040"/>
<ellipse cx="182" cy="122" rx="15" ry="6" fill="#0a2040"/>
<!-- руки тянут вниз/вверх -->
<line x1="120" y1="72" x2="115" y2="98" stroke="#2a4a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="98;76;98" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="140" y1="75" x2="136" y2="100" stroke="#2a4a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="100;78;100" dur="2s" repeatCount="indefinite"/>
</line>
<!-- штанга -->
<rect x="74" y="95" width="95" height="7" rx="3" fill="#bbb">
  <animate attributeName="y" values="95;72;95" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="63" y="90" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="90;67;90" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="169" y="90" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="90;67;90" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="136" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Спина прямая · Лопатки сводить</text>
</svg>`},

'Тяга гантели одной рукой': {badge:'СПИНА', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- скамья опора -->
<rect x="80" y="90" width="100" height="12" rx="4" fill="#1a2a1a"/>
<rect x="86" y="102" width="12" height="20" fill="#14201a"/>
<!-- человек в наклоне -->
<ellipse cx="106" cy="68" rx="13" ry="12" fill="#c8a882"/>
<line x1="160" y1="82" x2="108" y2="62" stroke="#2a4a2a" stroke-width="18" stroke-linecap="round"/>
<line x1="160" y1="82" x2="148" y2="118" stroke="#1a3a1a" stroke-width="12" stroke-linecap="round"/>
<line x1="160" y1="82" x2="178" y2="118" stroke="#1a3a1a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="14" ry="5" fill="#0a2010"/>
<ellipse cx="178" cy="118" rx="14" ry="5" fill="#0a2010"/>
<!-- левая рука упирается в скамью -->
<line x1="135" y1="78" x2="132" y2="94" stroke="#2a4a2a" stroke-width="8" stroke-linecap="round"/>
<!-- правая рука с гантелью -->
<line x1="180" y1="76" x2="184" y2="105" stroke="#2a4a2a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="105;78;105" dur="1.9s" repeatCount="indefinite"/>
</line>
<rect x="174" y="100" width="22" height="8" rx="3" fill="#aaa">
  <animate attributeName="y" values="100;73;100" dur="1.9s" repeatCount="indefinite"/>
</rect>
<text x="160" y="134" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Локоть прижат · Тяга к поясу</text>
</svg>`},

'Подъём штанги на бицепс': {badge:'БИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- стоящий человек -->
<ellipse cx="160" cy="28" rx="14" ry="13" fill="#c8a882"/>
<ellipse cx="158" cy="17" rx="11" ry="7" fill="#4a2c10"/>
<rect x="145" y="39" width="30" height="48" rx="7" fill="#1a5a1a"/>
<!-- ноги -->
<line x1="155" y1="87" x2="148" y2="118" stroke="#1a4a1a" stroke-width="11" stroke-linecap="round"/>
<line x1="165" y1="87" x2="172" y2="118" stroke="#1a4a1a" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="13" ry="5" fill="#0a2010"/>
<ellipse cx="172" cy="118" rx="13" ry="5" fill="#0a2010"/>
<!-- руки с подъёмом -->
<line x1="145" y1="55" x2="118" y2="70" stroke="#1a5a1a" stroke-width="9" stroke-linecap="round"/>
<!-- предплечья сгибаются -->
<line x1="118" y1="70" x2="110" y2="95" stroke="#2a7a2a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="110;122;110" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="95;58;95" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="175" y1="55" x2="202" y2="70" stroke="#1a5a1a" stroke-width="9" stroke-linecap="round"/>
<line x1="202" y1="70" x2="210" y2="95" stroke="#2a7a2a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="210;198;210" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="95;58;95" dur="2s" repeatCount="indefinite"/>
</line>
<!-- штанга -->
<rect x="98" y="89" width="124" height="7" rx="3" fill="#bbb">
  <animate attributeName="x" values="98;110;98" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="89;52;89" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="width" values="124;100;124" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="88" y="84" width="11" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="x" values="88;100;88" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="84;47;84" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="221" y="84" width="11" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="x" values="221;209;221" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="84;47;84" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="134" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Локти неподвижны · Полная амплитуда</text>
</svg>`},

'Молотковые сгибания': {badge:'БИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="28" rx="14" ry="13" fill="#c8a882"/>
<ellipse cx="158" cy="17" rx="11" ry="7" fill="#4a2c10"/>
<rect x="145" y="39" width="30" height="48" rx="7" fill="#2a3a5a"/>
<line x1="155" y1="87" x2="148" y2="118" stroke="#1a2a4a" stroke-width="11" stroke-linecap="round"/>
<line x1="165" y1="87" x2="172" y2="118" stroke="#1a2a4a" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="13" ry="5" fill="#0a1020"/>
<ellipse cx="172" cy="118" rx="13" ry="5" fill="#0a1020"/>
<!-- попеременный подъём -->
<line x1="145" y1="55" x2="118" y2="68" stroke="#2a3a5a" stroke-width="9" stroke-linecap="round"/>
<line x1="118" y1="68" x2="112" y2="96" stroke="#4a5a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="96;58;96" dur="1.6s" repeatCount="indefinite"/>
</line>
<rect x="102" y="90" width="20" height="28" rx="4" fill="#aaa">
  <animate attributeName="y" values="90;52;90" dur="1.6s" repeatCount="indefinite"/>
</rect>
<!-- вторая рука в другой фазе -->
<line x1="175" y1="55" x2="202" y2="68" stroke="#2a3a5a" stroke-width="9" stroke-linecap="round"/>
<line x1="202" y1="68" x2="208" y2="88" stroke="#4a5a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="88;58;88" dur="1.6s" begin="0.8s" repeatCount="indefinite"/>
</line>
<rect x="198" y="82" width="20" height="28" rx="4" fill="#aaa">
  <animate attributeName="y" values="82;52;82" dur="1.6s" begin="0.8s" repeatCount="indefinite"/>
</rect>
<text x="160" y="134" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Нейтральный хват · Чередуй руки</text>
</svg>`},

'Приседания со штангой': {badge:'КВАДРИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- человек со штангой на плечах -->
<ellipse cx="160" cy="22" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="22;46;22" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="11" rx="11" ry="7" fill="#4a2c10">
  <animate attributeName="cy" values="11;35;11" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<!-- штанга на плечах -->
<rect x="82" y="34" width="156" height="7" rx="3" fill="#bbb">
  <animate attributeName="y" values="34;57;34" dur="2.3s" repeatCount="indefinite"/>
</rect>
<rect x="72" y="29" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="29;52;29" dur="2.3s" repeatCount="indefinite"/>
</rect>
<rect x="236" y="29" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="29;52;29" dur="2.3s" repeatCount="indefinite"/>
</rect>
<rect x="60" y="31" width="12" height="14" rx="3" fill="#888">
  <animate attributeName="y" values="31;54;31" dur="2.3s" repeatCount="indefinite"/>
</rect>
<rect x="248" y="31" width="12" height="14" rx="3" fill="#888">
  <animate attributeName="y" values="31;54;31" dur="2.3s" repeatCount="indefinite"/>
</rect>
<!-- торс -->
<rect x="143" y="39" width="34" height="44" rx="7" fill="#1a2a5a">
  <animate attributeName="y" values="39;62;39" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="height" values="44;28;44" dur="2.3s" repeatCount="indefinite"/>
</rect>
<!-- левая нога -->
<line x1="152" y1="83" x2="132" y2="118" stroke="#1a2a5a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="83;90;83" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="132;112;132" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.3s" repeatCount="indefinite"/>
</line>
<ellipse cx="132" cy="118" rx="16" ry="5" fill="#0a1530">
  <animate attributeName="cx" values="132;112;132" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<!-- правая нога -->
<line x1="168" y1="83" x2="188" y2="118" stroke="#1a2a5a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="83;90;83" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="188;208;188" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.3s" repeatCount="indefinite"/>
</line>
<ellipse cx="188" cy="118" rx="16" ry="5" fill="#0a1530">
  <animate attributeName="cx" values="188;208;188" dur="2.3s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.3s" repeatCount="indefinite"/>
</ellipse>
<text x="160" y="136" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Колени по носкам · Спина нейтральна</text>
</svg>`},

'Жим ногами': {badge:'КВАДРИЦЕПС', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<!-- платформа тренажёра -->
<rect x="30" y="20" width="80" height="110" rx="8" fill="#151515" stroke="#222" stroke-width="1"/>
<rect x="240" y="40" width="60" height="80" rx="6" fill="#1a1a1a"/>
<!-- сиденье -->
<rect x="35" y="95" width="70" height="12" rx="4" fill="#222"/>
<!-- рельсы -->
<line x1="108" y1="35" x2="240" y2="55" stroke="#333" stroke-width="6"/>
<line x1="108" y1="115" x2="240" y2="95" stroke="#333" stroke-width="6"/>
<!-- платформа для ног -->
<rect x="230" y="48" width="20" height="55" rx="4" fill="#2a2a2a">
  <animate attributeName="x" values="230;180;230" dur="2s" repeatCount="indefinite"/>
</rect>
<!-- человек сидящий -->
<ellipse cx="62" cy="75" rx="13" ry="12" fill="#c8a882"/>
<rect x="50" y="85" width="26" height="22" rx="5" fill="#2a3a5a"/>
<!-- ноги толкают платформу -->
<line x1="65" y1="95" x2="120" y2="90" stroke="#2a3a5a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="x2" values="120;180;120" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="90;82;90" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="65" y1="95" x2="118" y2="100" stroke="#1a2a4a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="x2" values="118;178;118" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="100;94;100" dur="2s" repeatCount="indefinite"/>
</line>
<text x="160" y="130" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Полная амплитуда · Ноги параллельно</text>
</svg>`},

'Румынская тяга': {badge:'БЁДРА/ЯГОДИЦЫ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- стоящий/наклоняющийся человек -->
<ellipse cx="160" cy="28" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cx" values="160;148;160" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="28;55;28" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="17" rx="11" ry="7" fill="#4a2c10">
  <animate attributeName="cx" values="158;146;158" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="17;44;17" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<!-- торс наклон -->
<line x1="160" y1="40" x2="160" y2="80" stroke="#2a5a1a" stroke-width="18" stroke-linecap="round">
  <animate attributeName="x1" values="160;148;160" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y1" values="40;64;40" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="160;168;160" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="80;76;80" dur="2.2s" repeatCount="indefinite"/>
</line>
<!-- ноги прямые -->
<line x1="152" y1="80" x2="148" y2="118" stroke="#1a3a1a" stroke-width="12" stroke-linecap="round"/>
<line x1="168" y1="80" x2="172" y2="118" stroke="#1a3a1a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="14" ry="5" fill="#0a2010"/>
<ellipse cx="172" cy="118" rx="14" ry="5" fill="#0a2010"/>
<!-- штанга вдоль ног -->
<rect x="120" y="75" width="80" height="7" rx="3" fill="#bbb">
  <animate attributeName="y" values="75;95;75" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x" values="120;112;120" dur="2.2s" repeatCount="indefinite"/>
</rect>
<rect x="110" y="70" width="11" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="70;90;70" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x" values="110;102;110" dur="2.2s" repeatCount="indefinite"/>
</rect>
<rect x="199" y="70" width="11" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="70;90;70" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x" values="199;194;199" dur="2.2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="135" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Движение в бёдрах · Спина нейтральна</text>
</svg>`},

'Жим штанги стоя': {badge:'ПЛЕЧИ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="24" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="24;22;24" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="13" rx="11" ry="7" fill="#4a2c10"/>
<rect x="145" y="35" width="30" height="46" rx="7" fill="#2a4a6a"/>
<line x1="155" y1="81" x2="148" y2="118" stroke="#1a3a5a" stroke-width="11" stroke-linecap="round"/>
<line x1="165" y1="81" x2="172" y2="118" stroke="#1a3a5a" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="13" ry="5" fill="#0a1a30"/>
<ellipse cx="172" cy="118" rx="13" ry="5" fill="#0a1a30"/>
<!-- руки с жимом -->
<line x1="145" y1="48" x2="110" y2="52" stroke="#2a4a6a" stroke-width="9" stroke-linecap="round"/>
<line x1="110" y1="52" x2="108" y2="36" stroke="#4a6a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="36;12;36" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="175" y1="48" x2="210" y2="52" stroke="#2a4a6a" stroke-width="9" stroke-linecap="round"/>
<line x1="210" y1="52" x2="212" y2="36" stroke="#4a6a8a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="36;12;36" dur="2s" repeatCount="indefinite"/>
</line>
<!-- штанга -->
<rect x="82" y="48" width="156" height="7" rx="3" fill="#bbb">
  <animate attributeName="y" values="48;24;48" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="72" y="43" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="43;19;43" dur="2s" repeatCount="indefinite"/>
</rect>
<rect x="236" y="43" width="12" height="18" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="43;19;43" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="135" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Ядро напряжено · Жим над головой</text>
</svg>`},

'Тяга к подбородку': {badge:'ПЛЕЧИ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="24" rx="14" ry="13" fill="#c8a882"/>
<ellipse cx="158" cy="13" rx="11" ry="7" fill="#4a2c10"/>
<rect x="145" y="35" width="30" height="46" rx="7" fill="#3a4a2a"/>
<line x1="155" y1="81" x2="148" y2="118" stroke="#2a3a1a" stroke-width="11" stroke-linecap="round"/>
<line x1="165" y1="81" x2="172" y2="118" stroke="#2a3a1a" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="13" ry="5" fill="#1a2010"/>
<ellipse cx="172" cy="118" rx="13" ry="5" fill="#1a2010"/>
<!-- руки тянут штангу к подбородку -->
<line x1="145" y1="55" x2="120" y2="68" stroke="#3a4a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="68;44;68" dur="1.9s" repeatCount="indefinite"/>
</line>
<line x1="175" y1="55" x2="200" y2="68" stroke="#3a4a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y2" values="68;44;68" dur="1.9s" repeatCount="indefinite"/>
</line>
<rect x="106" y="64" width="108" height="7" rx="3" fill="#bbb">
  <animate attributeName="y" values="64;40;64" dur="1.9s" repeatCount="indefinite"/>
</rect>
<rect x="96" y="59" width="11" height="16" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="59;35;59" dur="1.9s" repeatCount="indefinite"/>
</rect>
<rect x="213" y="59" width="11" height="16" rx="3" fill="#C8FF00">
  <animate attributeName="y" values="59;35;59" dur="1.9s" repeatCount="indefinite"/>
</rect>
<text x="160" y="135" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Локти ведут · Штанга к подбородку</text>
</svg>`},

'Подъёмы на икры стоя': {badge:'ИКРЫ', type:'m', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="112" width="320" height="28" fill="#111"/>
<rect x="120" y="104" width="80" height="8" rx="2" fill="#1a2a1a"/>
<!-- человек поднимается на носки -->
<ellipse cx="160" cy="24" rx="14" ry="13" fill="#c8a882">
  <animate attributeName="cy" values="24;18;24" dur="1.8s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="158" cy="13" rx="11" ry="7" fill="#4a2c10">
  <animate attributeName="cy" values="13;7;13" dur="1.8s" repeatCount="indefinite"/>
</ellipse>
<rect x="145" y="35" width="30" height="46" rx="7" fill="#2a4a2a">
  <animate attributeName="y" values="35;29;35" dur="1.8s" repeatCount="indefinite"/>
</rect>
<line x1="152" y1="81" x2="148" y2="112" stroke="#1a3a1a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="y1" values="81;75;81" dur="1.8s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="81" x2="172" y2="112" stroke="#1a3a1a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="y1" values="81;75;81" dur="1.8s" repeatCount="indefinite"/>
</line>
<!-- пятки поднимаются -->
<ellipse cx="148" cy="112" rx="14" ry="5" fill="#0a2010">
  <animate attributeName="cy" values="112;106;112" dur="1.8s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="172" cy="112" rx="14" ry="5" fill="#0a2010">
  <animate attributeName="cy" values="112;106;112" dur="1.8s" repeatCount="indefinite"/>
</ellipse>
<!-- стрелки -->
<text x="220" y="90" fill="rgba(200,255,0,0.5)" font-size="18" font-family="sans-serif">
  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite"/>↑</text>
<text x="160" y="132" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Пауза вверху · Медленно вниз</text>
</svg>`},

'Бег / велотренажёр': {badge:'КАРДИО', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- пульс -->
<polyline points="20,70 40,70 52,40 64,95 76,55 88,70 108,70" fill="none" stroke="#FF4040" stroke-width="2">
  <animate attributeName="points" values="20,70 40,70 52,40 64,95 76,55 88,70 108,70;20,70 30,70 42,45 54,90 66,50 78,70 108,70;20,70 40,70 52,40 64,95 76,55 88,70 108,70" dur="1s" repeatCount="indefinite"/>
</polyline>
<text x="34" y="108" fill="#FF4040" font-size="9" font-family="sans-serif">♥ ПУЛЬС 130-150</text>
<!-- бегущий человек -->
<ellipse cx="200" cy="32" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="198" cy="22" rx="10" ry="6" fill="#4a2c10"/>
<rect x="188" y="42" width="26" height="32" rx="6" fill="#2a4a6a"/>
<!-- руки бегут -->
<line x1="188" y1="50" x2="170" y2="62" stroke="#2a4a6a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="170;188;170" dur="0.6s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="62;40;62" dur="0.6s" repeatCount="indefinite"/>
</line>
<line x1="214" y1="50" x2="230" y2="40" stroke="#2a4a6a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="230;214;230" dur="0.6s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="40;62;40" dur="0.6s" repeatCount="indefinite"/>
</line>
<!-- ноги бегут -->
<line x1="197" y1="74" x2="178" y2="100" stroke="#1a3a5a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="x2" values="178;200;178" dur="0.6s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="100;90;100" dur="0.6s" repeatCount="indefinite"/>
</line>
<line x1="197" y1="74" x2="218" y2="95" stroke="#1a3a5a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="x2" values="218;195;218" dur="0.6s" begin="0.3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="95;118;95" dur="0.6s" begin="0.3s" repeatCount="indefinite"/>
</line>
<text x="200" y="132" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">20 минут · Умеренный темп</text>
</svg>`},

'Скручивания': {badge:'ПРЕСС', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- лежащий с подъёмом корпуса -->
<!-- ноги согнутые -->
<line x1="175" y1="82" x2="175" y2="112" stroke="#2a4a2a" stroke-width="12" stroke-linecap="round"/>
<line x1="175" y1="82" x2="200" y2="112" stroke="#2a4a2a" stroke-width="12" stroke-linecap="round"/>
<line x1="175" y1="82" x2="162" y2="112" stroke="#2a4a2a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="175" cy="113" rx="16" ry="5" fill="#1a2a1a"/>
<ellipse cx="200" cy="113" rx="14" ry="5" fill="#1a2a1a"/>
<ellipse cx="162" cy="113" rx="14" ry="5" fill="#1a2a1a"/>
<!-- торс поднимается -->
<line x1="175" y1="80" x2="140" y2="80" stroke="#2a4a2a" stroke-width="16" stroke-linecap="round">
  <animate attributeName="x2" values="140;155;140" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="80;55;80" dur="2s" repeatCount="indefinite"/>
</line>
<!-- голова и руки за голову -->
<ellipse cx="128" cy="77" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cx" values="128;142;128" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="77;54;77" dur="2s" repeatCount="indefinite"/>
</ellipse>
<line x1="120" y1="74" x2="110" y2="65" stroke="#2a4a2a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="x1" values="120;134;120" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y1" values="74;51;74" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="110;122;110" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="65;40;65" dur="2s" repeatCount="indefinite"/>
</line>
<text x="160" y="133" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Поясница прижата · Выдох вверху</text>
</svg>`},

'Планка': {badge:'ПРЕСС/КОР', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="110" width="320" height="30" fill="#111"/>
<!-- таймер кольцо -->
<circle cx="274" cy="35" r="24" fill="none" stroke="#222" stroke-width="5"/>
<circle cx="274" cy="35" r="24" fill="none" stroke="#C8FF00" stroke-width="5"
  stroke-dasharray="151" stroke-dashoffset="75"
  style="transform:rotate(-90deg);transform-origin:274px 35px">
  <animate attributeName="stroke-dashoffset" values="0;151;0" dur="4s" repeatCount="indefinite"/>
</circle>
<text x="274" y="32" fill="#C8FF00" font-size="10" text-anchor="middle" font-family="sans-serif" font-weight="bold">45</text>
<text x="274" y="44" fill="#555" font-size="8" text-anchor="middle" font-family="sans-serif">сек</text>
<!-- тело в планке -->
<ellipse cx="82" cy="72" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="80" cy="62" rx="10" ry="6" fill="#4a2c10"/>
<!-- предплечья -->
<line x1="82" y1="82" x2="82" y2="102" stroke="#c8a882" stroke-width="10" stroke-linecap="round"/>
<line x1="110" y1="82" x2="110" y2="102" stroke="#c8a882" stroke-width="10" stroke-linecap="round"/>
<!-- тело прямое пульсирует -->
<rect x="75" y="78" width="160" height="16" rx="7" fill="#1a3a2a">
  <animate attributeName="fill" values="#1a3a2a;#1a4a2a;#1a3a2a" dur="2s" repeatCount="indefinite"/>
</rect>
<!-- ноги -->
<rect x="228" y="90" width="55" height="13" rx="4" fill="#1a3a2a"/>
<ellipse cx="282" cy="103" rx="16" ry="6" fill="#0a2010"/>
<!-- линия тела -->
<line x1="78" y1="85" x2="240" y2="85" stroke="rgba(200,255,0,0.3)" stroke-width="1" stroke-dasharray="4 3">
  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
</line>
<text x="140" y="124" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Держи тело прямым · Дыши ровно</text>
</svg>`},

'Подъём ног лёжа': {badge:'ПРЕСС', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- голова и торс лёжа -->
<ellipse cx="60" cy="88" rx="13" ry="12" fill="#c8a882"/>
<rect x="70" y="82" width="100" height="16" rx="6" fill="#2a4a2a"/>
<!-- руки вдоль тела -->
<line x1="75" y1="90" x2="68" y2="105" stroke="#2a4a2a" stroke-width="7" stroke-linecap="round"/>
<line x1="165" y1="90" x2="172" y2="105" stroke="#2a4a2a" stroke-width="7" stroke-linecap="round"/>
<!-- ноги поднимаются -->
<line x1="170" y1="88" x2="220" y2="92" stroke="#2a4a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="x2" values="220;210;220" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="92;55;92" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="220" y1="92" x2="262" y2="92" stroke="#1a3a1a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="x1" values="220;210;220" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y1" values="92;55;92" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="262;248;262" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="92;30;92" dur="2.2s" repeatCount="indefinite"/>
</line>
<ellipse cx="262" cy="92" rx="14" ry="5" fill="#0a2010">
  <animate attributeName="cx" values="262;248;262" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="92;30;92" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<text x="160" y="132" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Поясница прижата · 90° вверху</text>
</svg>`},

'Русский твист': {badge:'КОР', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- человек в позиции русского твиста -->
<!-- ноги подняты -->
<line x1="160" y1="90" x2="135" y2="115" stroke="#2a4a2a" stroke-width="11" stroke-linecap="round"/>
<line x1="160" y1="90" x2="185" y2="115" stroke="#2a4a2a" stroke-width="11" stroke-linecap="round"/>
<!-- торс наклон ~45 -->
<line x1="160" y1="90" x2="140" y2="62" stroke="#1a5a1a" stroke-width="16" stroke-linecap="round"/>
<!-- голова -->
<ellipse cx="136" cy="54" rx="13" ry="12" fill="#c8a882"/>
<!-- руки с весом крутятся -->
<line x1="140" y1="65" x2="180" y2="55" stroke="#2a5a2a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="x2" values="180;95;180" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="55;72;55" dur="2s" repeatCount="indefinite"/>
</line>
<rect x="175" y="50" width="20" height="10" rx="4" fill="#aaa">
  <animate attributeName="x" values="175;86;175" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="50;67;50" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="133" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Касайся пола · Ноги не опускай</text>
</svg>`},

'Скалолаз': {badge:'КАРДИО/КОР', type:'n', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#080808"/>
<rect x="0" y="110" width="320" height="30" fill="#111"/>
<!-- позиция упора лёжа -->
<rect x="80" y="90" width="14" height="18" rx="4" fill="#c8a882"/>
<rect x="200" y="88" width="14" height="18" rx="4" fill="#c8a882"/>
<!-- тело -->
<rect x="88" y="78" width="118" height="16" rx="7" fill="#2a4a2a"/>
<ellipse cx="72" cy="72" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="70" cy="62" rx="10" ry="7" fill="#4a2c10"/>
<!-- колени подтягиваются попеременно -->
<line x1="200" y1="92" x2="220" y2="108" stroke="#1a3a1a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="x2" values="220;165;220" dur="0.7s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="108;82;108" dur="0.7s" repeatCount="indefinite"/>
</line>
<line x1="185" y1="92" x2="165" y2="108" stroke="#1a3a1a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="x2" values="165;200;165" dur="0.7s" begin="0.35s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="108;82;108" dur="0.7s" begin="0.35s" repeatCount="indefinite"/>
</line>
<text x="160" y="125" fill="#444" font-size="9" text-anchor="middle" font-family="sans-serif">Быстрый темп · Таз не поднимай</text>
</svg>`},

/* ===========================
   ЖЕНСКИЕ УПРАЖНЕНИЯ
=========================== */

'Приседания с гантелями': {badge:'ЯГОДИЦЫ', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="22" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="22;44;22" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="160" cy="12" rx="10" ry="6" fill="#6a2a4a">
  <animate attributeName="cy" values="12;34;12" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<rect x="147" y="32" width="26" height="40" rx="7" fill="#5a1a3a">
  <animate attributeName="y" values="32;54;32" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="height" values="40;26;40" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- руки с гантелями -->
<line x1="147" y1="42" x2="120" y2="50" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="42;60;42" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="50;72;50" dur="2.2s" repeatCount="indefinite"/>
</line>
<rect x="105" y="45" width="20" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="45;67;45" dur="2.2s" repeatCount="indefinite"/>
</rect>
<line x1="173" y1="42" x2="200" y2="50" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="42;60;42" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="50;72;50" dur="2.2s" repeatCount="indefinite"/>
</line>
<rect x="195" y="45" width="20" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="45;67;45" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- ноги -->
<line x1="152" y1="72" x2="132" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="72;80;72" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="132;110;132" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="72" x2="188" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="72;80;72" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="188;210;188" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</line>
<ellipse cx="132" cy="118" rx="14" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="132;110;132" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="188" cy="118" rx="14" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="188;210;188" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<text x="160" y="135" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Грудь прямо · Колени по носкам</text>
</svg>`},

'Ягодичный мостик': {badge:'ЯГОДИЦЫ', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="62" cy="96" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="60" cy="86" rx="10" ry="6" fill="#6a2a4a"/>
<rect x="72" y="90" width="30" height="14" rx="5" fill="#4a1a2a"/>
<!-- торс поднимается -->
<path fill="#5a1a3a">
  <animate attributeName="d" values="M95,100 L200,100 L200,110 L95,110 Z;M95,100 Q150,65 200,95 L200,105 L95,110 Z;M95,100 L200,100 L200,110 L95,110 Z" dur="2.2s" repeatCount="indefinite"/>
</path>
<!-- ноги согнутые -->
<line x1="200" y1="100" x2="195" y2="118" stroke="#4a1a2a" stroke-width="13" stroke-linecap="round"/>
<line x1="220" y1="95" x2="240" y2="118" stroke="#4a1a2a" stroke-width="13" stroke-linecap="round"/>
<ellipse cx="195" cy="118" rx="14" ry="5" fill="#2a0a10"/>
<ellipse cx="240" cy="118" rx="14" ry="5" fill="#2a0a10"/>
<!-- стрелка вверх пульсирует -->
<text fill="rgba(255,107,157,0.7)" font-size="20" font-family="sans-serif" text-anchor="middle">
  <animate attributeName="x" values="155;155;155" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="88;65;88" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite"/>
  ↑
</text>
<text x="160" y="133" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Сожми ягодицы вверху · Удержи 2 сек</text>
</svg>`},

'Выпады с ходьбой': {badge:'НОГИ/ЯГОДИЦЫ', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- человек в выпаде движется -->
<ellipse cx="160" cy="28" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cx" values="160;175;160" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="160" cy="18" rx="10" ry="6" fill="#6a2a4a">
  <animate attributeName="cx" values="160;175;160" dur="2s" repeatCount="indefinite"/>
</ellipse>
<!-- торс -->
<rect x="152" y="38" width="24" height="42" rx="7" fill="#5a1a3a">
  <animate attributeName="x" values="152;167;152" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y" values="38;36;38" dur="2s" repeatCount="indefinite"/>
</rect>
<!-- передняя нога -->
<line x1="160" y1="80" x2="188" y2="105" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="x1" values="160;175;160" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="188;215;188" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="188" y1="105" x2="202" y2="118" stroke="#3a1a20" stroke-width="11" stroke-linecap="round">
  <animate attributeName="x1" values="188;215;188" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="202;232;202" dur="2s" repeatCount="indefinite"/>
</line>
<ellipse cx="202" cy="118" rx="15" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="202;232;202" dur="2s" repeatCount="indefinite"/>
</ellipse>
<!-- задняя нога (колено к полу) -->
<line x1="160" y1="80" x2="132" y2="95" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="x1" values="160;175;160" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="132;148;132" dur="2s" repeatCount="indefinite"/>
</line>
<line x1="132" y1="95" x2="126" y2="118" stroke="#3a1a20" stroke-width="11" stroke-linecap="round">
  <animate attributeName="x1" values="132;148;132" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="126;144;126" dur="2s" repeatCount="indefinite"/>
</line>
<text x="160" y="133" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Широкий шаг · Колено не за носок</text>
</svg>`},

'Отведение ноги назад': {badge:'ЯГОДИЦЫ', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="115" width="320" height="25" fill="#111"/>
<!-- четвереньки -->
<ellipse cx="88" cy="64" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="86" cy="54" rx="10" ry="6" fill="#6a2a4a"/>
<line x1="88" y1="74" x2="80" y2="95" stroke="#c8a882" stroke-width="9" stroke-linecap="round"/>
<line x1="80" y1="95" x2="72" y2="102" stroke="#c8a882" stroke-width="8" stroke-linecap="round"/>
<!-- торс -->
<line x1="88" y1="70" x2="168" y2="70" stroke="#5a1a3a" stroke-width="16" stroke-linecap="round"/>
<line x1="168" y1="70" x2="176" y2="90" stroke="#c8a882" stroke-width="9" stroke-linecap="round"/>
<line x1="176" y1="90" x2="184" y2="98" stroke="#c8a882" stroke-width="8" stroke-linecap="round"/>
<!-- нога поднимается назад -->
<line x1="168" y1="74" x2="192" y2="95" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="x2" values="192;228;192" dur="1.9s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="95;58;95" dur="1.9s" repeatCount="indefinite"/>
</line>
<ellipse cx="192" cy="95" rx="13" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="192;228;192" dur="1.9s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="95;58;95" dur="1.9s" repeatCount="indefinite"/>
</ellipse>
<!-- стрелка -->
<text fill="rgba(255,107,157,0.6)" font-size="14" font-family="sans-serif">
  <animate attributeName="x" values="210;240;210" dur="1.9s" repeatCount="indefinite"/>
  <animate attributeName="y" values="85;60;85" dur="1.9s" repeatCount="indefinite"/>↗</text>
<text x="160" y="130" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">С резинкой · Сожми ягодицу вверху</text>
</svg>`},

'Сумо-приседания': {badge:'ЯГОДИЦЫ/БЁДРА', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="24" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="24;48;24" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="160" cy="14" rx="10" ry="6" fill="#6a2a4a">
  <animate attributeName="cy" values="14;38;14" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<rect x="148" y="34" width="24" height="38" rx="7" fill="#5a1a3a">
  <animate attributeName="y" values="34;58;34" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="height" values="38;22;38" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- руки перед собой -->
<line x1="148" y1="46" x2="130" y2="56" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="46;68;46" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="172" y1="46" x2="190" y2="56" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="46;68;46" dur="2.2s" repeatCount="indefinite"/>
</line>
<!-- гантель между руками -->
<rect x="130" y="52" width="60" height="7" rx="3" fill="#FF6B9D" opacity="0.7">
  <animate attributeName="y" values="52;74;52" dur="2.2s" repeatCount="indefinite"/>
</rect>
<!-- широкие ноги -->
<line x1="152" y1="72" x2="110" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="72;80;72" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="110;88;110" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</line>
<line x1="168" y1="72" x2="210" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round">
  <animate attributeName="y1" values="72;80;72" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="210;232;210" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</line>
<ellipse cx="110" cy="118" rx="14" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="110;88;110" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="210" cy="118" rx="14" ry="5" fill="#2a0a10">
  <animate attributeName="cx" values="210;232;210" dur="2.2s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="118;108;118" dur="2.2s" repeatCount="indefinite"/>
</ellipse>
<text x="160" y="135" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Широкая стойка · Носки наружу</text>
</svg>`},

'Отжимания': {badge:'ГРУДЬ/ТРИЦЕПС', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="115" width="320" height="25" fill="#111"/>
<ellipse cx="72" cy="72" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="72;82;72" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="70" cy="62" rx="10" ry="7" fill="#6a2a4a">
  <animate attributeName="cy" values="62;72;62" dur="2s" repeatCount="indefinite"/>
</ellipse>
<rect x="80" y="78" width="145" height="15" rx="7" fill="#5a1a3a">
  <animate attributeName="y" values="78;88;78" dur="2s" repeatCount="indefinite"/>
</rect>
<!-- с колен -->
<line x1="225" y1="90" x2="248" y2="115" stroke="#4a1a2a" stroke-width="11" stroke-linecap="round">
  <animate attributeName="y1" values="90;100;90" dur="2s" repeatCount="indefinite"/>
</line>
<ellipse cx="250" cy="115" rx="14" ry="5" fill="#2a0a10"/>
<!-- руки -->
<line x1="84" y1="84" x2="70" y2="102" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y1" values="84;94;84" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="102;107;102" dur="2s" repeatCount="indefinite"/>
</line>
<rect x="60" y="100" width="18" height="8" rx="4" fill="#c8a882">
  <animate attributeName="y" values="100;105;100" dur="2s" repeatCount="indefinite"/>
</rect>
<line x1="218" y1="84" x2="232" y2="100" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round">
  <animate attributeName="y1" values="84;94;84" dur="2s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="100;105;100" dur="2s" repeatCount="indefinite"/>
</line>
<rect x="228" y="98" width="18" height="8" rx="4" fill="#c8a882">
  <animate attributeName="y" values="98;103;98" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="130" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">С колен или полные · Тело прямое</text>
</svg>`},

'Тяга гантелей в наклоне': {badge:'СПИНА', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="106" cy="58" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="104" cy="48" rx="10" ry="6" fill="#6a2a4a"/>
<line x1="160" y1="74" x2="108" y2="52" stroke="#5a1a3a" stroke-width="18" stroke-linecap="round"/>
<line x1="160" y1="74" x2="145" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round"/>
<line x1="160" y1="74" x2="178" y2="118" stroke="#4a1a2a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="145" cy="118" rx="14" ry="5" fill="#2a0a10"/>
<ellipse cx="178" cy="118" rx="14" ry="5" fill="#2a0a10"/>
<!-- руки тянут гантели -->
<line x1="120" y1="65" x2="114" y2="92" stroke="#6a2a4a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="92;68;92" dur="1.9s" repeatCount="indefinite"/>
</line>
<line x1="140" y1="68" x2="135" y2="94" stroke="#6a2a4a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y2" values="94;70;94" dur="1.9s" repeatCount="indefinite"/>
</line>
<rect x="105" y="88" width="18" height="7" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="88;64;88" dur="1.9s" repeatCount="indefinite"/>
</rect>
<rect x="127" y="90" width="18" height="7" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="90;66;90" dur="1.9s" repeatCount="indefinite"/>
</rect>
<text x="160" y="133" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Локти прижаты · Спина прямая</text>
</svg>`},

'Жим гантелей сидя': {badge:'ПЛЕЧИ', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<!-- скамья -->
<rect x="110" y="98" width="100" height="10" rx="4" fill="#1a1010"/>
<rect x="118" y="108" width="10" height="28" fill="#141010"/>
<rect x="192" y="108" width="10" height="28" fill="#141010"/>
<ellipse cx="160" cy="42" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="42;40;42" dur="2s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="160" cy="32" rx="10" ry="6" fill="#6a2a4a"/>
<rect x="148" y="52" width="24" height="48" rx="7" fill="#5a1a3a"/>
<!-- руки жмут вверх -->
<line x1="148" y1="62" x2="118" y2="70" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round"/>
<line x1="118" y1="70" x2="112" y2="52" stroke="#6a2a4a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="y2" values="52;28;52" dur="2s" repeatCount="indefinite"/>
</line>
<rect x="104" y="46" width="18" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="46;22;46" dur="2s" repeatCount="indefinite"/>
</rect>
<line x1="172" y1="62" x2="202" y2="70" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round"/>
<line x1="202" y1="70" x2="208" y2="52" stroke="#6a2a4a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="y2" values="52;28;52" dur="2s" repeatCount="indefinite"/>
</line>
<rect x="198" y="46" width="18" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="46;22;46" dur="2s" repeatCount="indefinite"/>
</rect>
<text x="160" y="133" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Локти 90° · Жим над головой</text>
</svg>`},

'Подъём гантелей на бицепс': {badge:'БИЦЕПС', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<ellipse cx="160" cy="26" rx="13" ry="12" fill="#c8a882"/>
<ellipse cx="160" cy="16" rx="10" ry="6" fill="#6a2a4a"/>
<rect x="148" y="36" width="24" height="46" rx="7" fill="#5a1a3a"/>
<line x1="155" y1="82" x2="148" y2="118" stroke="#4a1a2a" stroke-width="10" stroke-linecap="round"/>
<line x1="165" y1="82" x2="172" y2="118" stroke="#4a1a2a" stroke-width="10" stroke-linecap="round"/>
<ellipse cx="148" cy="118" rx="12" ry="4" fill="#2a0a10"/>
<ellipse cx="172" cy="118" rx="12" ry="4" fill="#2a0a10"/>
<!-- попеременный подъём -->
<line x1="148" y1="52" x2="122" y2="62" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round"/>
<line x1="122" y1="62" x2="116" y2="88" stroke="#7a2a5a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="y2" values="88;52;88" dur="1.7s" repeatCount="indefinite"/>
</line>
<rect x="107" y="82" width="18" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="82;46;82" dur="1.7s" repeatCount="indefinite"/>
</rect>
<line x1="172" y1="52" x2="198" y2="62" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round"/>
<line x1="198" y1="62" x2="204" y2="82" stroke="#7a2a5a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="y2" values="82;52;82" dur="1.7s" begin="0.85s" repeatCount="indefinite"/>
</line>
<rect x="195" y="76" width="18" height="8" rx="3" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="76;46;76" dur="1.7s" begin="0.85s" repeatCount="indefinite"/>
</rect>
<text x="160" y="133" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Локти неподвижны · Медленно вниз</text>
</svg>`},

'Берпи': {badge:'КАРДИО', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- фаза 1: прыжок -->
<g opacity="1">
  <animate attributeName="opacity" values="1;1;0;0;0;0;1" dur="3s" repeatCount="indefinite"/>
  <ellipse cx="100" cy="30" rx="12" ry="11" fill="#c8a882"/>
  <rect x="90" y="40" width="22" height="30" rx="6" fill="#5a1a3a"/>
  <line x1="90" y1="50" x2="72" y2="36" stroke="#5a1a3a" stroke-width="7" stroke-linecap="round"/>
  <line x1="112" y1="50" x2="130" y2="36" stroke="#5a1a3a" stroke-width="7" stroke-linecap="round"/>
  <line x1="97" y1="70" x2="86" y2="90" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
  <line x1="103" y1="70" x2="114" y2="90" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="86" cy="92" rx="10" ry="4" fill="#2a0a10"/>
  <ellipse cx="114" cy="92" rx="10" ry="4" fill="#2a0a10"/>
  <text x="100" y="110" fill="#FF6B9D" font-size="8" text-anchor="middle" font-family="sans-serif">ПРЫЖОК</text>
</g>
<!-- фаза 2: упор лёжа -->
<g opacity="0">
  <animate attributeName="opacity" values="0;0;1;1;0;0;0" dur="3s" repeatCount="indefinite"/>
  <ellipse cx="180" cy="75" rx="12" ry="11" fill="#c8a882"/>
  <rect x="188" y="78" width="80" height="13" rx="6" fill="#5a1a3a"/>
  <line x1="190" y1="84" x2="182" y2="100" stroke="#c8a882" stroke-width="7" stroke-linecap="round"/>
  <rect x="174" y="98" width="14" height="7" rx="3" fill="#c8a882"/>
  <line x1="262" y1="88" x2="268" y2="108" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
  <line x1="265" y1="88" x2="280" y2="106" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="270" cy="110" rx="12" ry="4" fill="#2a0a10"/>
  <text x="225" y="120" fill="#FF6B9D" font-size="8" text-anchor="middle" font-family="sans-serif">УПОР</text>
</g>
<!-- фаза 3: отжимание -->
<g opacity="0">
  <animate attributeName="opacity" values="0;0;0;0;1;1;0" dur="3s" repeatCount="indefinite"/>
  <ellipse cx="180" cy="84" rx="12" ry="11" fill="#c8a882"/>
  <rect x="188" y="88" width="80" height="13" rx="6" fill="#5a1a3a"/>
  <line x1="190" y1="94" x2="182" y2="112" stroke="#c8a882" stroke-width="7" stroke-linecap="round"/>
  <rect x="174" y="110" rx="3" width="14" height="7" fill="#c8a882"/>
  <line x1="262" y1="98" x2="268" y2="110" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
  <text x="225" y="125" fill="#FF6B9D" font-size="8" text-anchor="middle" font-family="sans-serif">ОТЖИМ</text>
</g>
<text x="160" y="135" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Полное упражнение · Темп средний</text>
</svg>`},

'Прыжки со скакалкой': {badge:'КАРДИО', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="116" width="320" height="24" fill="#111"/>
<ellipse cx="160" cy="28" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="28;20;28" dur="0.5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="160" cy="18" rx="10" ry="6" fill="#6a2a4a">
  <animate attributeName="cy" values="18;10;18" dur="0.5s" repeatCount="indefinite"/>
</ellipse>
<rect x="148" y="38" width="24" height="36" rx="6" fill="#5a1a3a">
  <animate attributeName="y" values="38;30;38" dur="0.5s" repeatCount="indefinite"/>
</rect>
<!-- руки с ручками скакалки -->
<line x1="148" y1="50" x2="108" y2="58" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="50;42;50" dur="0.5s" repeatCount="indefinite"/>
</line>
<rect x="95" y="53" width="16" height="10" rx="4" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="53;45;53" dur="0.5s" repeatCount="indefinite"/>
</rect>
<line x1="172" y1="50" x2="212" y2="58" stroke="#5a1a3a" stroke-width="8" stroke-linecap="round">
  <animate attributeName="y1" values="50;42;50" dur="0.5s" repeatCount="indefinite"/>
</line>
<rect x="209" y="53" width="16" height="10" rx="4" fill="#FF6B9D" opacity="0.8">
  <animate attributeName="y" values="53;45;53" dur="0.5s" repeatCount="independite"/>
</rect>
<!-- скакалка вращается -->
<path d="M111 58 Q160 110 217 58" fill="none" stroke="#FF6B9D" stroke-width="2" opacity="0.6">
  <animate attributeName="d" values="M111 58 Q160 110 217 58;M111 58 Q160 10 217 58;M111 58 Q160 110 217 58" dur="0.5s" repeatCount="indefinite"/>
</path>
<!-- ноги -->
<line x1="155" y1="74" x2="148" y2="105" stroke="#4a1a2a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="74;66;74" dur="0.5s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="105;97;105" dur="0.5s" repeatCount="indefinite"/>
</line>
<line x1="165" y1="74" x2="172" y2="105" stroke="#4a1a2a" stroke-width="10" stroke-linecap="round">
  <animate attributeName="y1" values="74;66;74" dur="0.5s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="105;97;105" dur="0.5s" repeatCount="indefinite"/>
</line>
<ellipse cx="148" cy="116" rx="13" ry="4" fill="#2a0a10">
  <animate attributeName="cy" values="116;108;116" dur="0.5s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="172" cy="116" rx="13" ry="4" fill="#2a0a10">
  <animate attributeName="cy" values="116;108;116" dur="0.5s" repeatCount="indefinite"/>
</ellipse>
<text x="160" y="132" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">15–20 минут · Пульс 120-140</text>
</svg>`},

'Наклоны к ногам': {badge:'РАСТЯЖКА', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- человек тянется вперёд сидя -->
<line x1="100" y1="88" x2="240" y2="88" stroke="#2a1a2a" stroke-width="14" stroke-linecap="round"/>
<ellipse cx="240" cy="88" rx="16" ry="6" fill="#2a0a10"/>
<ellipse cx="100" cy="88" rx="16" ry="6" fill="#2a0a10"/>
<!-- торс наклоняется вперёд -->
<line x1="120" y1="88" x2="160" y2="50" stroke="#5a1a3a" stroke-width="14" stroke-linecap="round">
  <animate attributeName="x2" values="160;200;160" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="50;82;50" dur="3s" repeatCount="indefinite"/>
</line>
<ellipse cx="156" cy="42" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cx" values="156;196;156" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="42;76;42" dur="3s" repeatCount="indefinite"/>
</ellipse>
<!-- руки тянутся к ногам -->
<line x1="155" y1="52" x2="210" y2="68" stroke="#6a2a4a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="x1" values="155;194;155" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="y1" values="52;84;52" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="210;235;210" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="68;86;68" dur="3s" repeatCount="indefinite"/>
</line>
<!-- пульсирующая стрелка -->
<text fill="rgba(255,107,157,0.6)" font-size="12" font-family="sans-serif">
  <animate attributeName="x" values="185;220;185" dur="3s" repeatCount="indefinite"/>
  <animate attributeName="y" values="60;82;60" dur="3s" repeatCount="indefinite"/>→</text>
<text x="160" y="110" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">Тянись плавно · Дыши</text>
</svg>`},

'Поза голубя': {badge:'РАСТЯЖКА', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- поза голубя - наклон вперёд -->
<line x1="130" y1="100" x2="220" y2="115" stroke="#2a1a2a" stroke-width="14" stroke-linecap="round"/>
<ellipse cx="220" cy="115" rx="16" ry="5" fill="#2a0a10"/>
<!-- передняя нога согнутая -->
<line x1="130" y1="100" x2="105" y2="115" stroke="#3a1a2a" stroke-width="12" stroke-linecap="round"/>
<ellipse cx="105" cy="115" rx="14" ry="5" fill="#2a0a10"/>
<!-- торс -->
<line x1="130" y1="100" x2="118" y2="62" stroke="#5a1a3a" stroke-width="14" stroke-linecap="round">
  <animate attributeName="x2" values="118;140;118" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="62;88;62" dur="4s" repeatCount="indefinite"/>
</line>
<ellipse cx="116" cy="55" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cx" values="116;138;116" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="cy" values="55;80;55" dur="4s" repeatCount="indefinite"/>
</ellipse>
<!-- руки вперёд -->
<line x1="118" y1="66" x2="175" y2="90" stroke="#6a2a4a" stroke-width="7" stroke-linecap="round">
  <animate attributeName="x1" values="118;140;118" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="y1" values="66;92;66" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="x2" values="175;185;175" dur="4s" repeatCount="indefinite"/>
  <animate attributeName="y2" values="90;98;90" dur="4s" repeatCount="indefinite"/>
</line>
<!-- дыхание -->
<text x="235" y="80" fill="rgba(255,107,157,0.5)" font-size="9" font-family="sans-serif">вдох...</text>
<text x="235" y="95" fill="rgba(255,107,157,0.4)" font-size="9" font-family="sans-serif">
  <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/>выдох...</text>
<text x="160" y="108" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">45 сек · Дыши и расслабляйся</text>
</svg>`},

'Кошка-корова': {badge:'РАСТЯЖКА', type:'f', svg:`
<svg viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg">
<rect width="320" height="140" fill="#0d0808"/>
<rect x="0" y="118" width="320" height="22" fill="#111"/>
<!-- четвереньки с анимацией -->
<!-- голова -->
<ellipse cx="80" cy="64" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="64;72;64" dur="2.5s" repeatCount="indefinite"/>
</ellipse>
<!-- спина (кошка вверх / корова вниз) -->
<path fill="none" stroke="#5a1a3a" stroke-width="14" stroke-linecap="round">
  <animate attributeName="d" values="M88 70 Q160 50 232 70;M88 70 Q160 88 232 70;M88 70 Q160 50 232 70" dur="2.5s" repeatCount="indefinite"/>
</path>
<!-- хвост/голова движение -->
<ellipse cx="240" cy="64" rx="13" ry="12" fill="#c8a882">
  <animate attributeName="cy" values="64;72;64" dur="2.5s" repeatCount="indefinite"/>
</ellipse>
<!-- передние лапы -->
<line x1="90" y1="72" x2="82" y2="96" stroke="#c8a882" stroke-width="9" stroke-linecap="round"/>
<line x1="112" y1="72" x2="104" y2="98" stroke="#c8a882" stroke-width="9" stroke-linecap="round"/>
<rect x="74" y="94" width="16" height="7" rx="3" fill="#c8a882"/>
<rect x="96" y="96" width="16" height="7" rx="3" fill="#c8a882"/>
<!-- задние лапы -->
<line x1="208" y1="72" x2="200" y2="98" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
<line x1="230" y1="72" x2="238" y2="98" stroke="#4a1a2a" stroke-width="9" stroke-linecap="round"/>
<rect x="192" y="96" width="16" height="7" rx="3" fill="#4a1a2a"/>
<rect x="230" y="96" width="16" height="7" rx="3" fill="#4a1a2a"/>
<!-- стрелки -->
<text x="160" y="42" fill="rgba(255,107,157,0.5)" font-size="9" text-anchor="middle" font-family="sans-serif">
  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.5s" repeatCount="indefinite"/>↑ Кошка (выдох)</text>
<text x="160" y="108" fill="rgba(255,107,157,0.5)" font-size="9" text-anchor="middle" font-family="sans-serif">
  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.5s" repeatCount="indefinite"/>↓ Корова (вдох)</text>
<text x="160" y="132" fill="#664" font-size="9" text-anchor="middle" font-family="sans-serif">10 повторений · Медленно</text>
</svg>`}

};

function getExerciseHTML(name, gender) {
  const anim = EX_ANIMATIONS[name];
  if (!anim) {
    // fallback заглушка
    const emojis = {'Жим':'🏋️','Тяга':'💪','Приседани':'🦵','Жим ног':'🦵','Планка':'📏','Пресс':'🔄','Кардио':'🏃','Ягодич':'🍑','Берпи':'⚡','Скакалка':'🪢','Бег':'🏃','Подъём':'💪','Разводка':'🦾','Молоток':'🔨','Отжима':'💪','Скручи':'🔄','Русский':'🔄','Скалол':'🧗','Румынская':'🏋️','Тяга к':'🤸','Икры':'🦵','Выпад':'🚶','Отведени':'🦵','Сумо':'🏋️','Наклон':'🧘','Голуб':'🕊️','Кошка':'🐱'};
    let emoji = '🏋️';
    for (const [k,v] of Object.entries(emojis)) { if (name.includes(k)) { emoji = v; break; } }
    const color = gender === 'female' ? '#FF6B9D' : '#00D4FF';
    return `<div class="ex-anim-wrap"><svg class="ex-svg" viewBox="0 0 320 140" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="140" fill="#0a0a0a"/><text x="160" y="65" font-size="48" text-anchor="middle" font-family="sans-serif">${emoji}</text><text x="160" y="100" fill="${color}" font-size="12" text-anchor="middle" font-family="sans-serif" font-weight="bold">${name.toUpperCase()}</text></svg></div>`;
  }
  const badgeClass = anim.type === 'f' ? 'f' : anim.type === 'm' ? 'm' : 'n';
  return `<div class="ex-anim-wrap"><div class="ex-anim-badge ${badgeClass}">${anim.badge}</div>${anim.svg.trim()}</div>`;
}