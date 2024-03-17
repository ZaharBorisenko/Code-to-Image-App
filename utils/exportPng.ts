import html2canvas from "html2canvas";

export const exportPng = async (codeEditorRef:any) => {
    const editorElement = codeEditorRef.current;

    if (editorElement) {
        const canvas = await html2canvas(editorElement);
        const image = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');

        const link = document.createElement('a');
        link.download = 'pages.png';
        // @ts-ignore
        link.href = image;
        link.click();
    }
};
