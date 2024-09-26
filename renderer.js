/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

console.log('before my changes')
const IS_EDIT_CONTEXT_SUPPORTED = 'EditContext' in window;
console.log('IS_EDIT_CONTEXT_SUPPORTED : ', IS_EDIT_CONTEXT_SUPPORTED);

const editorEl = document.getElementById("html-editor");
editorEl.style.height = '200px';
editorEl.style.width = '100%';

if (!IS_EDIT_CONTEXT_SUPPORTED) {
    editorEl.textContent = "Sorry, your browser doesn't support the EditContext API. This demo will not work.";
}

const editContext = new EditContext();
editorEl.editContext = editContext;

editContext.addEventListener("textupdate", e => {
    console.log('textupdate e : ', e);
});
