function coreCheck() {
    console.log(window.navigator.hardwareConcurrency);
    document.getElementById("numberOfCore").innerHTML = "あなたのPCのコアの数は" + window.navigator.hardwareConcurrency + "です";
}