function parseMdTitleToHtml(markdown: string): string {
  return markdown
    .replace(/^######(.+)(\n|$)/g, '<h6>$1</h6>') // Parse h6
    .replace(/^#####(.+)(\n|$)/g, '<h5>$1</h5>') // Parse h5
    .replace(/^####(.+)(\n|$)/g, '<h4>$1</h4>') // Parse h4
    .replace(/^###(.+)(\n|$)/g, '<h3>$1</h3>') // Parse h3
    .replace(/^##(.+)(\n|$)/g, '<h2>$1</h2>') // Parse h2
    .replace(/^#(.+)(\n|$)/g, '<h1>$1</h1>'); // Parse h1
}

function parseMdBoldToHtml(markdown: string): string {
  return markdown
    .replace(/\*\*(.+)\*\*/g, '<strong>$1</strong>') // Parse bold text
    .replace(/__(.+)__/g, '<strong>$1</strong>'); // Parse bold text alternative
}

function parseMdLinkToHtml(markdown: string): string {
  return markdown
    .replace(/\[(.+)\]\((.+)\)/g, '<a href="$2">$1</a>'); // Parse links
}

function parseMdItalicToHtml(markdown: string): string {
  return markdown
    .replace(/\*(.+)\*/g, '<em>$1</em>') // Parse italic text
    .replace(/_(.+)_/g, '<em>$1</em>'); // Parse italic text alternative
}

function parseMdLinebreaksToHtml(markdown: string): string {
  return markdown
    .replace(/\n{3,}/g, '<br/><br/>') // Parse double line break
    .replace(/\n{2}/g, '<br/>'); // Parse single line break
}

export default function parseMdToHtml(markdown: string): string {
  let parsed = markdown;

  parsed = parseMdBoldToHtml(parsed);
  parsed = parseMdItalicToHtml(parsed);
  parsed = parseMdLinkToHtml(parsed);
  parsed = parseMdTitleToHtml(parsed);
  parsed = parseMdLinebreaksToHtml(parsed);

  return parsed;
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
