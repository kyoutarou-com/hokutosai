"use strict";

const changeMenu = (menu) => {
	let tab;
	switch (menu) {
		case "#product1":
		case "#product2":
		case "#product3":
		case "#product4":
			tab = "#tab1";
			break;
		case "#location1":
		case "#location2":
		case "#location3":
		case "#location4":
			tab = "#tab2";
			break;
		case "#organization1":
		case "#organization2":
		case "#organization3":
		case "#organization4":
			tab = "#tab3";
			break;
		default:
			menu = "#product1";
			tab = "#tab1";
			console.error("ハッシュの値がおかしいです.");
			break;
	}

	$(".tabs li")
		.find("a")
		.each(() => {
			//タブ内のaタグ全てを取得
			//リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
			const parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
			$(".tabs li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
			$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
			//表示させるエリア設定
			$(".tab-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
			$(tab).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
		});

	//タブ設定
	$(".menus li")
		.find("a")
		.each(function () {
			//タブ内のaタグ全てを取得
			const idName = $(this).attr("href"); //タブ内のaタグのリンク名（例）#lunchの値を取得
			if (idName == menu) {
				//リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				const parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$(".menus li").removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".menu-area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(menu).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
			}
		});
};

$(".tabs li a").on("click", function () {
	const menu = $(this).attr("href");
	changeMenu(menu);
	return false; //aタグを無効にする
});

$(".menus li a").on("click", function () {
	const menu = $(this).attr("href");
	changeMenu(menu);
	return false; //aタグを無効にする
});

// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on("load", () => {
	const hash = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	changeMenu(hash);
});
