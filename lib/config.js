/*

  * Sript By Thadz BotZ

  * Contact : wa.me/6288232991394

  * Library : @adiwajshing/baileys

*/

global.ownerNumber = '6285706088615@s.whatsapp.net';//ganti nomor lu

global.ownerName = 'ArioFaris';//ganti nama lu

global.botName = 'RekberBOT';//ganti nama bot lu

global.gopay = '085706088615 A/N Ario Faris'

global.dana = '085706088615 A/N Suswanti'

global.pulsa = 'NONE'

global.ovo = '085706088615 A/N Ario Faris'

global.vcard = 'BEGIN:VCARD\n'

+ 'VERSION:3.0\n' 

+ 'FN:ArioFaris\n'//ganti nama lu

+ 'TEL;type=CELL;type=VOICE;waid=6285706088615:+62 857-0608-8615\n'//ganti nomor lu tanpa ngubah format

+ 'END:VCARD';

global.onlyGroup = (pushname) => {

  return `*Maaf ${pushname} Perintah ini hanya dapat digunakan di group*`;

};

global.onlyAdmin = (pushname) => {

   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh admin group*`;

};

global.botAdmin = (pushname) => {

   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan ketika bot menjadi admin*`;

};

global.notText = (prefix, cmd, pushname) => {

   return `*Maaf ${pushname}*

_Parameter text belum dimasukan_

ex: ${prefix + cmd} yourtext `;

};

global.onlyCreator = (pushname) => {

	return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh owner bot*`;	};

global.help = (list, prefix, pushname) => {

	return `

Halo ${pushname}

========================

Main Menu:

========================

${list} ${prefix}owner

${list} ${prefix}menu

${list} ${prefix}ping

========================

Store Menu:

========================

${list} ${prefix}pricelist [ff/ml]

${list} ${prefix}format

${list} ${prefix}payment

${list} ${prefix}proses

${list} ${prefix}done

========================

Grup Menu:

========================

${list} ${prefix}group [open/close]

${list} ${prefix}editinfogroup [admin/all]

${list} ${prefix}hidetag

${list} ${prefix}add @tag

${list} ${prefix}kick @tag

${list} ${prefix}promote

${list} ${prefix}demote

${list} ${prefix}resetlink

${list} ${prefix}linkgroup

${list} ${prefix}setname

${list} ${prefix}setdesc

========================

Other Menu:

========================

${list} ${prefix}sticker

${list} ${prefix}sgif

`;//Menu bot

};

global.dmFF = () => {

	return `

	:: FORMAT TRANSAKSI ::

Penjual  :

Pembeli :

Penjualan Apa :

Harga Jual :

Inc/Ex fee  : 

Pembayaran :

Refull/Noreff : [Skip]

INFO TRANSAKSI :

#Noreff : Tidak garansi

#Refull : Garansi

#Ex : Fee Ditanggung pembeli 

#Inc : Fee Ditanggung Penjual 

KETENTUAN TRANSAKSI

#Barang/akun yg dijual/Beli adalah Barang/Akun yg LEGAL

Jika Setuju Silahkan isi Format

NB: Berhubung sudah di berlakukan nya Pay Fee,list Fee bisa dilihat di PP Grup/Admin

};

global.TF = (tanggal) => {

	return `

���� *DANA* 

 *085706088615* 

 *SUSWANTI* 

-------------------------------------

 *NEO* :

 *5859459173220244* 

 A/N *Ario* 

-------------------------------------

 *OVO* :

 *085706088615* 

A/N  *Ario Faris* 

-------------------------------------

-Lampirkan Bukti TRANSFER

Jika Sudah Tf/Top up

-Apabila pembayaran tidak sesuai dengan diatas , segala bentuk resiko ditanggung pembeli

};
