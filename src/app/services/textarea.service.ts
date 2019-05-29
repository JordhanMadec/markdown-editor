export default function insertTextIntoTextarea(textarea: any, prefix, suffix: string): void {
  const startPos = textarea.selectionStart || 0;
  const endPos = textarea.selectionEnd || startPos;
  const selection = textarea.value.substring(startPos, endPos);

  textarea.value = textarea.value.substring(0, startPos)
    + prefix
    + selection
    + suffix
    + textarea.value.substring(endPos, textarea.value.length);

  textarea.selectionStart = startPos + prefix.length;
  textarea.selectionEnd = endPos + prefix.length;
  textarea.focus();
}
