export function parseMdTitleToHtml(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/######(.+)(\n|$)/g, '<h6>$1</h6>') // Parse h6
    .replace(/#####(.+)(\n|$)/g, '<h5>$1</h5>') // Parse h5
    .replace(/####(.+)(\n|$)/g, '<h4>$1</h4>') // Parse h4
    .replace(/###(.+)(\n|$)/g, '<h3>$1</h3>') // Parse h3
    .replace(/##(.+)(\n|$)/g, '<h2>$1</h2>') // Parse h2
    .replace(/#(.+)(\n|$)/g, '<h1>$1</h1>'); // Parse h1
}

export function parseMdBoldToHtml(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\*\*((.+| )+)\*\*/gm, '<strong>$1</strong>') // Parse bold text
    .replace(/__((.+| )+)__/gm, '<strong>$1</strong>'); // Parse bold text alternative
}

export function parseMdItalicToHtml(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\*((.+| )+)\*/gm, '<em>$1</em>') // Parse italic text
    .replace(/_((.+| )+)_/gm, '<em>$1</em>'); // Parse italic text alternative
}

export function parseMdLinkToHtml(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\[((.+| )+)\]\((.+)\)/g, '<a href="$3">$1</a>'); // Parse links
}

export function parseMdLinebreaksToHtml(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\n{3,}/g, '<br/><br/>') // Parse multiple line break
    .replace(/\n{2}/g, '<br/>') // Parse double line break
    .replace(/\n/g, ''); // Parse single line break
}

export default function parseMdToHtml(markdown: string): string {
  let parsed = markdown || '';

  parsed = parseMdTitleToHtml(parsed);
  parsed = parseMdLinebreaksToHtml(parsed);
  parsed = parseMdBoldToHtml(parsed);
  parsed = parseMdItalicToHtml(parsed);
  parsed = parseMdLinkToHtml(parsed);

  return parsed;
}
