OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "Besleme, geçersiz XML içeriyor",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Besleme bulunamadı: Ya web sitesi besleme sağlamıyor ya da erişimi engelliyor. Engellemeyi aşmak için beslemeyi sunucunuzdan şu curl komutunu kullanarak indirmeyi deneyin: curl",
    "Detected feed format is not supported" : "Tespit edilen biçim desteklenmiyor",
    "Website not found" : "Web sitesi bulunamadı",
    "More redirects than allowed, aborting" : "İzin verilenden daha fazla yeniden yönlendirme. İptal ediliyor",
    "Bigger than maximum allowed size" : "İzin verilen boyuttan daha büyük",
    "Request timed out" : "İstek zaman aşımına uğradı",
    "Required credentials for feed were either missing or incorrect" : "Besleme için gerekli kimlik bilgileri boş veya hatalı",
    "Forbidden to access feed" : "Beslemeye erişim yasak",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Sertifika hatası: SSL/TLS el sıkışmasının bir yerinde sorun oluştu. Bu sertifikalarda (dosya biçimleri, yollar, izinler), parolalarda veya diğerlerinde olabilir.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Sertifika hatası: Uzak sunucunun SSL sertifikası veya SSH md5 parmakizi doğru görünmüyor.",
    "Certificate error: Problem with the local client certificate." : "Sertifika hatası: Yerel istemci sertifikası sorunlu.",
    "Certificate error: Couldn't use specified cipher." : "Sertifika hatası: Belirtilen şifreleyici kullanılamadı.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Sertifika hatası: Eş sertifikası bilinen CA sertifikalarıyla doğrulanamadı.",
    "Certificate error: Requested FTP SSL level failed." : "Sertifika hatası: İstenilen FTP SSL seviyesi başarısız oldu.",
    "Certificate error: Initiating the SSL Engine failed." : "Sertifika hatası: SSL Motoru başlatılamadı.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Sertifika hatası: SSL CA sertifikası okunmasında sorun var (yol veya erişim hakkı sorunlu olabilir mi?)",
    "Certificate error: Issuer check failed" : "Sertifika hatası: Denetleyici kontrolü başarısız oldu",
    "Unknown SSL certificate error!" : "Bilinmeyen SSL sertifika hatası!",
    "Request failed, network connection unavailable!" : "İstek başarısız, ağ bağlantısı kullanılamıyor!",
    "Request unauthorized. Are you logged in?" : "İstek yetkisiz. Oturumunuz açık mı?",
    "Request forbidden. Are you an admin?" : "İsteğe izin verilmedi. Bir yönetici misiniz?",
    "Token expired or app not enabled! Reload the page!" : "Belirteç süresi doldu ya da uygulama etkin değil! Sayfayı yenileyin!",
    "Internal server error! Please check your data/owncloud.log file for additional information!" : "Dahili sunucu hatası! Lütfen ek bilgi için data/owncloud.log dosyasına bakın!",
    "Request failed, ownCloud is in currently in maintenance mode!" : "İstek başarısız, ownCloud şu anda bakım kipinde!",
    "Can not add feed: Exists already" : "Besleme eklenemiyor: Zaten mevcut",
    "Articles without feed" : "Beslemesiz makaleler",
    "Can not add folder: Exists already" : "Klasör eklenemiyor: Zaten mevcut",
    "Use ownCloud cron for updates" : "Güncellemeler için ownCloud cron'u kullan",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Uygulamaya dahil edilmiş Python güncelleyicisi gibi bir özel güncelleştirici çalıştırıyorsanız bunu devre dışı bırakın",
    "Purge interval" : "Temizleme aralığı",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Silinen besleme ve klasörlerin, veritabanından kaldırılacağı asgari süre; 60 altındaki saniyeler yoksayılır",
    "Maximum read count per feed" : "Besleme başına azami okuma sayısı",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "Temizleme görevinde silinmeyecek, besleme başına okunabilecek azami makale sayısını tanımlar. Eski makaleler okunduktan sonra yeniden görülüyorsa, bu değeri arttırın. -1 gibi negatif değerler bu özelliği tamamen kapatacaktır.",
    "Maximum redirects" : "En fazla yeniden yönlendirme",
    "How many redirects the feed fetcher should follow" : "Besleme getirici kaç yönlendirmeyi takip etmeli",
    "Maximum feed page size" : "Azami besleme sayfa boyutu",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Bayt cinsinden azami besleme boyutu. RSS/Atom sayfası bu değerden daha büyükse, güncelleme iptal edilecek",
    "Feed fetcher timeout" : "Besleme getirici zaman aşımı",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Bir RSS veya Atom beslemesinin yüklenmesi için beklenilecek azami süre. Uzun sürüyorsa iptal edilecek",
    "Explore Service URL" : "Keşfetme Hizmet URL'si",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Belirtilmişse, hizmetin URL'si beslemeyi keşfetme bölümünde beslemelerin görüntülenebilmesi için sorgulanacak. Dahili keşfetme hizmeti için bu alanı boş bırakın",
    "For more information check the Wiki" : "Daha fazla bilgi için Viki'ye bakın",
    "Saved" : "Kaydedildi",
    "Download" : "İndir",
    "Close" : "Kapat",
    "Ajax or Web cron mode detected! Your feeds will not be updated!" : "Ajax veya Web zamanlama kipi algılandı! Beslemeleriniz güncellenmeyecek!",
    "How to set up the operating system cron" : "İşletim sistemi cron görevi nasıl ayarlanır",
    "Install and set up a faster parallel updater that uses the News app's update API" : "Haberler uygulamasının API'sini kullanan daha hızlı bir paralel yükleyici kurun ve ayarlayın",
    "filter" : "filtre",
    "Language" : "Dil",
    "Subscribe" : "Abone ol",
    "Got more awesome feeds? Share them with us!" : "Harika akışlara mı sahipsiniz? Bizlerle paylaşın!",
    "No articles available" : "Hiç makale yok",
    "No unread articles available" : "Okunmamış makale yok",
    "Open website" : "Web sitesini aç",
    "Star article" : "Makaleyi yıldızla",
    "Unstar article" : "Makale yıldızını kaldır",
    "Keep article unread" : "Makaleyi okunmadı olarak bırak",
    "Remove keep article unread" : "Makaleyi okunmadı olarak bırak",
    "by" : "yazar",
    "from" : "kaynak",
    "Play audio" : "Ses oynat",
    "Download video" : "Video indir",
    "Download audio" : "Ses indir",
    "Keyboard shortcut" : "Klavye kısayolu",
    "Description" : "Açıklama",
    "right" : "sağ",
    "Jump to next article" : "Sonraki makaleye atla",
    "left" : "sol",
    "Jump to previous article" : "Önceki makaleye atla",
    "Toggle star article" : "Makale yıldızını aç/kapat",
    "Star article and jump to next one" : "Makaleyi yıldızla ve sonrakine atla",
    "Toggle keep current article unread" : "Geçerli makaleyi okunmamış tut özelliğini aç/kapat",
    "Open article in new tab" : "Makaleyi yeni sekmede aç",
    "Toggle expand article in compact view" : "Sıkışık görünümde makaleyi genişlet/daralt",
    "Refresh" : "Yenile",
    "Load next feed" : "Sonraki beslemeyi yükle",
    "Load previous feed" : "Önceki beslemeyi yükle",
    "Load next folder" : "Sonraki klasörü yükle",
    "Load previous folder" : "Önceki klasörü yükle",
    "Scroll to active navigation entry" : "Gezinti girdisini etkinleştirmek için kaydır",
    "Focus search field" : "Arama alanına odaklan",
    "Mark current article's feed/folder read" : "Geçerli makalenin beslemesini/klasörünü okundu işaretle",
    "Web address" : "Web adresi",
    "Feed exists already!" : "Besleme zaten mevcut!",
    "Folder" : "Klasör",
    "No folder" : "Klasör yok",
    "New folder" : "Yeni klasör",
    "Folder name" : "Klasör adı",
    "Go back" : "Geri dön",
    "Folder exists already!" : "Klasör zaten mevcut!",
    "Advanced settings" : "Gelişmiş ayarlar",
    "Credentials" : "Kimlik Bilgileri",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP Basic Auth kimlik bilgileri şifresiz depolanmalı! Sunucu veya veritabanına erişimi olan herkes bu bilgilere erişebilecek!",
    "Username" : "Kullanıcı adı",
    "Password" : "Parola",
    "New Folder" : "Yeni Klasör",
    "Create" : "Oluştur",
    "Explore" : "Keşfet",
    "Update failed more than 50 times" : "Güncelleme 50 defadan fazla başarısız oldu",
    "Deleted feed" : "Beslemeyi sil",
    "Undo delete feed" : "Beslemeyi geri al",
    "Rename" : "Yeniden adlandır",
    "Menu" : "Menü",
    "Unpin feed from the top" : "Beslemeyi yukarıdan kaldır",
    "Pin feed to the top" : "Beslemeyi yukarıya sabitle",
    "No feed ordering" : "Besleme sıralaması yok",
    "Reversed feed ordering" : "Ters besleme sıralaması",
    "Normal feed ordering" : "Normal besleme sıralaması",
    "Enable full text feed fetching" : "Tam metin besleme getirmesini etkinleştir",
    "Disable full text feed fetching" : "Tam metin besleme getirmesini kapat",
    "Keep updated articles as is" : "Güncellenmiş makaleleri olduğu gibi tut",
    "Mark updated articles unread" : "Güncellenmiş makaleleri okunmamış olarak işaretle",
    "Rename feed" : "Beslemeyi yeniden adlandır",
    "Delete feed" : "Beslemeyi sil",
    "Mark all articles read" : "Tüm makaleleri okundu işaretle",
    "Dismiss" : "İptal et",
    "Collapse" : "Daralt",
    "Deleted folder" : "Klasör silindi",
    "Undo delete folder" : "Klasör silmeyi geri al",
    "Rename folder" : "Klasörü yeniden adlandır",
    "Delete folder" : "Klasörü sil",
    "Starred" : "Yıldızlı",
    "Unread articles" : "Okunmamış makaleler",
    "All articles" : "Tüm makaleler",
    "Settings" : "Ayarlar",
    "Disable mark read through scrolling" : "Kaydırma sırasında okundu olarak işaretlemeyi kapat",
    "Compact view" : "Sıkışık görünüm",
    "Expand articles on key navigation" : "Tuşla gezinme sırasında makaleleri genişlet",
    "Show all articles" : "Tüm makaleleri göster",
    "Reverse ordering (oldest on top)" : "Sıralamayı tersine çevir (en eski üstte)",
    "Subscriptions (OPML)" : "Abonelikler (OPML)",
    "Import" : "İçe aktar",
    "Export" : "Dışa aktar",
    "Error when importing: file does not contain valid OPML" : "Dosya alımında hata: dosya geçerli OPML içermiyor",
    "Error when importing: OPML is does neither contain feeds nor folders" : "İçe aktarma hatası: OPML besleme veya dizin içermiyor",
    "Unread/Starred Articles" : "Okunmamış/Yıldızlı Makaleler",
    "Error when importing: file does not contain valid JSON" : "İçe alınırken hata: dosya geçerli JSON içermiyor",
    "Help" : "Yardım",
    "Keyboard shortcuts" : "Klavye kısayolları",
    "Documentation" : "Belgelendirme",
    "Report a bug" : "Bir hata raporlayın"
},
"nplurals=2; plural=(n > 1);");
