# codingnews-react-native

Folder Screen : 
Berisikan semua tampilan di aplikasi. semua file di direktori pada index js sehingga ketika folder lain memanggil screen hanya perlu memanggil import '@screen'

BaseStack : 
berisikan semua route stack yang sudah di modifikasi supaya lebih cepat dalam development

BottomTab:
tidak menggunakan rekomendasi dari library, pada fungsi ini memanggil screen langsung. 
ketika dari screen ke bottomtab menggunakan navigate(parent) sedangkan dari bottomtab ke screen lain menggunakan navigate(parent, {screen : child}). Hal ini digunakan untuk mempercepat development.

Folder Transitions :
Berisikan semua fungsi pada route untuk berpindah halaman. penggunaan sangat mudah dan bisa langsung di copas dari aplikasi lain dengan memperhatikan library penunjang

Pada folder screen diharap bisa menggunakan dibagi ke subfolder untuk setiap fitur yang dirasa saling berkesinambungan