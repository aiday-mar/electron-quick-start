const IS_EDIT_CONTEXT_SUPPORTED = 'EditContext' in window;
console.log('IS_EDIT_CONTEXT_SUPPORTED : ', IS_EDIT_CONTEXT_SUPPORTED);

const editorEl = document.getElementById("html-editor");
editorEl.style.height = '200px';
editorEl.style.width = '100%';

if (IS_EDIT_CONTEXT_SUPPORTED) {
    const editContext = new EditContext();
    editorEl.editContext = editContext;

    editContext.addEventListener("textupdate", e => {
        console.log('textupdate : ', e);
    });
    editorEl.addEventListener('keydown', e => {
        console.log('keydown : ', e);
    });

    setTimeout(() => {
        const body = window.document.body;
        const newWindow = window.open();
        newWindow?.window?.document.body.append(body);
        console.log('body : ', body);
        console.log('newWindow : ', newWindow);
    }, 5000)
}

