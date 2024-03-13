"use strict";

//任意のタブにURLからリンクするための設定
function getHashID_tabs(hashIDName) {
	if (hashIDName) {
		//タブ設定
		$(".tabs li")
			.find("a")
			.each(function () {
				//タブ内のaタグ全てを取得
				const idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
				if (idName == hashIDName) {
					//リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
					const parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
					$(".tabs li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
					$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
					//表示させるエリア設定
					$(".tab-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
					$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
				}
			});
	}
}

function getHashID_menus(hashIDName) {
	if (hashIDName) {
		//タブ設定
		$(".menus li")
			.find("a")
			.each(function () {
				//タブ内のaタグ全てを取得
				const idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
				if (idName == hashIDName) {
					//リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
					const parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
					$(".menus li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
					$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
					//表示させるエリア設定
					$(".menu-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
					$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
				}
			});
	}
}

//タブをクリックしたら
$(".tabs li a").on("click", function () {
	const idName = $(this).attr("href"); //タブ内のリンク名を取得
	getHashID_tabs(idName); //設定したタブの読み込みと
	return false; //aタグを無効にする
});

$(".menus li a").on("click", function () {
	const idName = $(this).attr("href"); //タブ内のリンク名を取得
	getHashID_menus(idName); //設定したタブの読み込みと
	return false; //aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", () => {
	const hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	getHashID_tabs(hashName); //設定したタブの読み込み
	getHashID_menus(hashName);
});
