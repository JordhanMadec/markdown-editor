export default function parseMdToHtml(markdown: string): string {
  return markdown
    .replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>') // Parse bold text
    .replace(/##(.+)\n/g, '<h2>$1</h2>') // Parse h2
    .replace(/#(.+)\n/g, '<h1>$1</h1>') // Parse h1
    .replace(/\n/g, '<br>'); // Parse line breaks
}

export function insertTextIntoTextarea(textarea: any, text: string, breakLine = false) {
  text = breakLine ? `${text} \n` : text;

  if (textarea.selectionStart || textarea.selectionStart === '0') {
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    textarea.value = textarea.value.substring(0, startPos)
      + text
      + textarea.value.substring(endPos, textarea.value.length);
  } else {
    textarea.value += text;
  }

  textarea.focus();

  return textarea.value;
}
