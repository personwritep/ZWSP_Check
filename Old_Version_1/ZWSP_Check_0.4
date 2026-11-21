// ==UserScript==
// @name        ZWSP Check
// @namespace        http://tampermonkey.net/
// @version        0.4
// @description        Code checking Tool about "zero width space"
// @author        GitHub User
// @match        https://github.com/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @updateURL        https://github.com/personwritep/ZWSP_Check/raw/main/ZWSP_Check.user.js
// @downloadURL        https://github.com/personwritep/ZWSP_Check/raw/main/ZWSP_Check.user.js
// ==/UserScript==


let target=document.querySelector('head');
let monitor0=new MutationObserver(check);
monitor0.observe(target, { childList: true });

function check(){
    let path=location.pathname;

    if(path.includes('/blob/main/')){
        setTimeout(()=>{
            textarea_check();
        }, 100); }

    if(path.includes('/edit/main/')){
        setTimeout(()=>{
            editor_check();
        }, 1000); }}



function textarea_check(){
    let result;
    let code_text=document.querySelector('#read-only-cursor-text-area');
    if(code_text){
        let regex =/\u200B/; // ZeroWidthSpace
        result=regex.test(code_text.textContent); }

    let title=document.querySelector('div[class*="BlobViewHeader-module__Box_1"]');
    if(title){
        if(result){
            title.style.background='red';
            help(); }
        else{
            title.style.background='#d8f4ff'; }}
    else{
        alert("⛔ クラス名の変更で タイトル部が取得できません A"); }

} // textarea_check()



function editor_check(){
    let editor=document.querySelector('.js-codemirror-editor .cm-content[contenteditable=true]');
    if(editor){

        code_ck();

        function code_ck(){
            let cml=editor.querySelector('.cm-line'); // コードの最初の1行目

            let regex =/\u200B/; // ZeroWidthSpace
            let result=regex.test(cml.textContent);

            let title=document.querySelector('div[class*="BlobEditHeader-module__Box"]');
            if(title){
                if(result){
                    title.style.background='red';
                    help();
                    delete_zwsp(cml); }
                else{
                    title.style.background='#d8f4ff';
                    zwsp_sw_hide(); }}
            else{
                alert("⛔ クラス名の変更で タイトル部が取得できません B"); }

        } // code_ck()


        function delete_zwsp(cml){
            let sw='<p class="exsw_p">'+
                '<button class="exsw">Delete ZWSP</button>'+
                '</p>'+
                '<style>'+
                '.exsw_p{ margin: 0 0 -1px 40px; } '+
                '.exsw { height: 30px; width: 100px; padding: 0 0 1px; '+
                'color: #fff; background: #000; border: none; border-radius: 6px; } '+
                '</style>';

            let ul=document.querySelector('ul[class*="prc-SegmentedControl-SegmentedControl"]');
            if(ul){
                if(!document.querySelector('.exsw')){
                    ul.insertAdjacentHTML('afterend', sw); }

                let exsw=document.querySelector('.exsw');
                if(exsw){
                    exsw.onclick=()=>{
                        cml.textContent=cml.textContent.replace('\u200B', '');
                        setTimeout(()=>{
                            code_ck();
                        }, 500);
                    }}}

        } // delete_zwsp()


        function zwsp_sw_hide(){
            let exsw=document.querySelector('.exsw');
            if(exsw){
                exsw.remove(); }}

    }} // editor_check()



function help(){
    let help_url='https://ameblo.jp/personwritep/entry-12952718090.html';
    let help_sw=
        '<p class="zwsp_help">'+
        '<a href="'+ help_url +'" rel="noopener noreferrer" target="_blank">?</a></p>'+
        '<style>'+
        '.zwsp_help a { font-size: 18px; font-weight: bold; line-height: 0; padding: 0px 8px; '+
        'margin-left: 20px; border-radius: 20px; background: #fff; vertical-align: -7px; } '+
        '</style>';

    let ul=document.querySelector('ul[class*="prc-SegmentedControl-SegmentedControl"]');
    if(ul){
        if(!document.querySelector('.zwsp_help')){
            ul.insertAdjacentHTML('afterend', help_sw); }}

} // help()
