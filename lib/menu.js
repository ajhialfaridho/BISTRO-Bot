exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *#sticker*[DALAM PERBAIKAN]
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *#ytmp3* <linkyoutube>
║│2. *#ytmp4* <linkyoutube>
║│3. *#tiktok* <linktiktok>
║│4. *#ig* <linkIg>
║│5. *#fb* <linkFb>
║│6. *#twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wiki* <query>Wikipedia.
║│2. *#nulis* <teks>
║│3. *#quran*
║│4. *#pantun*
║│5. *#nama* <nama anda>
║│6. *#pasangan* <Aris & Cahya>
║│7. *#lirik* <nama lagu>
║│8. *#chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#sholat* <daerah>
║│2. *#covid*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *#creator*
║│2. *#owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#tts*<teks>(jangan di spasi)
║│2. *#quotes*
║│3. *#donasi*
║│4. *#pict cewek*
║│5. *#pict cowok*
║│6. *#pokemon*
║│7. *#loli*
║│8. *#animepict*
║│9. *#alay*  <teks>
║│10. *#say*  <teks>
║│11. *#infoig* <@_sadboy.ig>
║│12. *#18+dewasa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY RIDHO*
╚════════════════════
`
}
