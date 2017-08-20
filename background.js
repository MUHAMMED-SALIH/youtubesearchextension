chrome.contextMenus.create({
  title:"youtube search",
  contexts:["selection"],
  onclick:myfunction
});
function myfunction(selectedText) {
  //alert(selectedText.selectionText);
  chrome.tabs.create({url:"https://www.youtube.com/results?search_query="+selectedText.selectionText})
}
