export function parseMdTitleToWiki(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/######(.+)(\n|$)/g, '====== $1 ======') // Parse h6
    .replace(/#####(.+)(\n|$)/g, '===== $1 =====') // Parse h5
    .replace(/####(.+)(\n|$)/g, '==== $1 ====') // Parse h4
    .replace(/###(.+)(\n|$)/g, '=== $1 ===') // Parse h3
    .replace(/##(.+)(\n|$)/g, '== $1 ==') // Parse h2
    .replace(/#(.+)(\n|$)/g, '= $1 ='); // Parse h1
}

export function parseMdBoldToWiki(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\*\*((.+| )+)\*\*/gm, '\'\'\'$1\'\'\'') // Parse bold text
    .replace(/__((.+| )+)__/gm, '\'\'\'$1\'\'\''); // Parse bold text alternative
}

export function parseMdItalicToWiki(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\*((.+| )+)\*/gm, '\'\'$1\'\'') // Parse italic text
    .replace(/_((.+| )+)_/gm, '\'\'$1\'\''); // Parse italic text alternative
}

export function parseMdLinkToWiki(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\[((.+| )+)\]\((.+)\)/g, '[$3 $1]'); // Parse links
}

export function parseMdLinebreaksToWiki(markdown: string): string {
  return !markdown ? '' : markdown
    .replace(/\n{3,}/g, '<br/><br/>') // Parse multi line break
    .replace(/\n{2}/g, '<br/>') // Parse double line break
    .replace(/\n/g, ''); // Parse single line break
}

export default function parseMdToWiki(markdown: string): string {
  let parsed = markdown || '';

  parsed = parseMdTitleToWiki(parsed);
  parsed = parseMdLinebreaksToWiki(parsed);
  parsed = parseMdBoldToWiki(parsed);
  parsed = parseMdItalicToWiki(parsed);
  parsed = parseMdLinkToWiki(parsed);

  return parsed;
}
