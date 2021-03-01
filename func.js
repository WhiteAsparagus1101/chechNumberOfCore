function coreCheck() {
    console.log(window.navigator.hardwareConcurrency);
    document.getElementById("numberOfCore").innerHTML = "あなたのPCのコア数は" + window.navigator.hardwareConcurrency + "です。（スレッド数かも）";
}