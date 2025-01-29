// ==UserScript==
// @name        ZWSP Check
// @namespace        http://tampermonkey.net/
// @version        0.2
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
    textarea_check();

    setTimeout(()=>{
        editor_check();
    }, 1000); }



function textarea_check(){
    let result;
    let code_text=document.querySelector('#read-only-cursor-text-area');
    if(code_text){
        let regex =/\u200B/; // ZeroWidthSpace
        result=regex.test(code_text.textContent); }

    let title=document.querySelector('.Box-sc-g0xbh4-0.kTvpNk');
    if(title){
        if(result){
            title.style.background='red'; }
        else{
            title.style.background=''; }}

} // textarea_check()



function editor_check(){
    let editor=document.querySelector('.js-codemirror-editor .cm-content[contenteditable=true]');
    if(editor){

        let target=editor;
        let monitor1=new MutationObserver(code_ck);
        monitor1.observe(target, { childList: true });

        code_ck();

        function code_ck(){
            let cml=editor.querySelector('.cm-line'); // コードの最初の1行目

            let regex =/\u200B/; // ZeroWidthSpace
            let result=regex.test(cml.textContent);

            let title=document.querySelector('.Box-sc-g0xbh4-0.iXNuQB');
            if(title){
                if(result){
                    title.style.background='red';
                    delete_zwsp(cml); }
                else{
                    title.style.background=''; }}

        } // code_ck()


        function delete_zwsp(cml){
            let sw='<li class="Box-sc-g0xbh4-0 idgUkN">'+
                '<button class="exsw cBLqoI">Delete ZWSP</button></li>'+
                '<style>.exsw { position: absolute; left: 50px; height: 32px; width: 100px; '+
                'padding: 0 0 2px; color: #fff; background: #000; border-radius: 6px; }</style>';

            let ul=document.querySelector('.etyAeg');
            if(ul){
                if(!ul.querySelector('.exsw')){
                    ul.insertAdjacentHTML('beforeend', sw); }

                let exsw=ul.querySelector('.exsw');
                if(exsw){
                    exsw.onclick=()=>{
                        cml.textContent=cml.textContent.replace('\u200B', '');
                        setTimeout(()=>{
                            code_ck();
                        }, 500);
                    }}}

        } // delete_zwsp()

    }} // editor_check()





