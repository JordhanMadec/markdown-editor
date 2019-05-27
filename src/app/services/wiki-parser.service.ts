function parseMdTitleToWiki(markdown: string): string {
  return markdown
    .replace(/^######(.+)(\n|$)/g, '====== $1 ======') // Parse h6
    .replace(/^#####(.+)(\n|$)/g, '===== $1 =====') // Parse h5
    .replace(/^####(.+)(\n|$)/g, '==== $1 ====') // Parse h4
    .replace(/^###(.+)(\n|$)/g, '=== $1 ===') // Parse h3
    .replace(/^##(.+)(\n|$)/g, '== $1 ==') // Parse h2
    .replace(/^#(.+)(\n|$)/g, '= $1 ='); // Parse h1
}

function parseMdBoldToWiki(markdown: string): string {
  return markdown
    .replace(/\*\*((.+|\n)+)\*\*/gm, '\'\'\'$1\'\'\'') // Parse bold text
    .replace(/__((.+|\n)+)__/gm, '\'\'\'$1\'\'\''); // Parse bold text alternative
}

function parseMdItalicToWiki(markdown: string): string {
  return markdown
    .replace(/\*((.+|\n)+)\*/gm, '_\'\'1\'\'') // Parse italic text
    .replace(/_((.+|\n)+)_/gm, '\'\'$1\'\''); // Parse italic text alternative
}

function parseMdLinkToWiki(markdown: string): string {
  return markdown
    .replace(/\[(.+)\]\((.+)\)/g, '[$2 $1]</a>'); // Parse links
}

function parseMdLinebreaksToWiki(markdown: string): string {
  return markdown
    .replace(/\n{3,}/g, '<br/>') // Parse double line break
    .replace(/\n{2}/g, '<br/><br/>'); // Parse single line break
}

export default function parseMdToWiki(markdown: string): string {
  let parsed = markdown;

  parsed = parseMdBoldToWiki(parsed);
  parsed = parseMdItalicToWiki(parsed);
  parsed = parseMdLinkToWiki(parsed);
  parsed = parseMdTitleToWiki(parsed);
  parsed = parseMdLinebreaksToWiki(parsed);

  return parsed;
}
