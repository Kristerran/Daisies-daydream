const saveHolder = []
function changeFunc(htmlObject) {
    let selectedValue = JSON.parse(htmlObject.value);
    let imageElement = document.getElementById(selectedValue.docId);
    saveHolder[htmlObject.arraySlot] = {}
    saveHolder[htmlObject.arraySlot].imgSrc = selectedValue.imgSrc
    saveHolder[htmlObject.arraySlot].docId = selectedValue.docId
    saveHolder[htmlObject.arraySlot].name = selectedValue.innerhtml
    imageElement.src = selectedValue.imgSrc;
   }

