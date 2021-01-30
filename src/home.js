"use strict";

let index;
const tabs = document.getElementsByClassName("tab__item");
const panels = document.getElementsByClassName("panel");

for(let tab of tabs){
    tab.addEventListener("click", handleTabsChange);
}

function handleTabsChange(e){
    console.log("clicked tab " + e);
    for(let tab of tabs){
        if(tab.classList.contains("selected")){
            tab.classList.remove("selected");
        }
        if(tab === this){
            let tabsArr = [...tabs];
            index = tabsArr.indexOf(this);
        }
    }
    this.classList.toggle("selected")
    handlePanelsChange();
}

function handlePanelsChange(){
    // const panelsArr = [...panels];
    for(let panel of panels){
        if(panel.classList.contains("selected")){
            panel.classList.remove("selected")
        }
    }
    const panelSelected = panels.item(index);
    panelSelected.classList.add("selected");
}