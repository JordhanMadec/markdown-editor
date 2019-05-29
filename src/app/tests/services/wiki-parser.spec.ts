import parseMdToWiki, {
  parseMdBoldToWiki,
  parseMdItalicToWiki,
  parseMdLinebreaksToWiki,
  parseMdLinkToWiki,
  parseMdTitleToWiki
} from '../../services/wiki-parser.service';

describe('parse markdown title to wikimedia', () => {
  it('parse null', () => {
    const result = parseMdTitleToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdTitleToWiki('');
    expect(result).toEqual('');
  });

  it('parse level 1 title with line break', () => {
    const result = parseMdTitleToWiki('#title\n');
    expect(result).toEqual('= title =');
  });

  it('parse level 1 title', () => {
    const result = parseMdTitleToWiki('#title');
    expect(result).toEqual('= title =');
  });

  it('parse level 2 title', () => {
    const result = parseMdTitleToWiki('##title');
    expect(result).toEqual('== title ==');
  });

  it('parse level 3 title', () => {
    const result = parseMdTitleToWiki('###title');
    expect(result).toEqual('=== title ===');
  });

  it('parse level 4 title', () => {
    const result = parseMdTitleToWiki('####title');
    expect(result).toEqual('==== title ====');
  });

  it('parse level 5 title', () => {
    const result = parseMdTitleToWiki('#####title');
    expect(result).toEqual('===== title =====');
  });

  it('parse level 6 title', () => {
    const result = parseMdTitleToWiki('######title');
    expect(result).toEqual('====== title ======');
  });
});

describe('parse markdown bold to wikimedia', () => {
  it('parse null', () => {
    const result = parseMdBoldToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdBoldToWiki('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdBoldToWiki('**bold**');
    expect(result).toEqual('\'\'\'bold\'\'\'');
  });

  it('parse single line alternate', () => {
    const result = parseMdBoldToWiki('__bold__');
    expect(result).toEqual('\'\'\'bold\'\'\'');
  });

  it('parse multi line', () => {
    const result = parseMdBoldToWiki('**bold\nbold**');
    expect(result).toEqual('**bold\nbold**');
  });

  it('parse multi line alternate', () => {
    const result = parseMdBoldToWiki('__bold\nbold__');
    expect(result).toEqual('__bold\nbold__');
  });
});

describe('parse markdown italic to wikimedia', () => {
  it('parse null', () => {
    const result = parseMdItalicToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdItalicToWiki('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdItalicToWiki('*italic*');
    expect(result).toEqual('\'\'italic\'\'');
  });

  it('parse single line alternate', () => {
    const result = parseMdItalicToWiki('_italic_');
    expect(result).toEqual('\'\'italic\'\'');
  });

  it('parse multi line', () => {
    const result = parseMdItalicToWiki('*italic\nitalic*');
    expect(result).toEqual('*italic\nitalic*');
  });

  it('parse multi line alternate', () => {
    const result = parseMdItalicToWiki('_italic\nitalic_');
    expect(result).toEqual('_italic\nitalic_');
  });
});

describe('parse markdown link to wikimedia', () => {
  it('parse null', () => {
    const result = parseMdLinkToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdLinkToWiki('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdLinkToWiki('[link](url)');
    expect(result).toEqual('[url link]');
  });

  it('parse multi line', () => {
    const result = parseMdLinkToWiki('[link\n](url)');
    expect(result).toEqual('[link\n](url)');
  });
});

describe('parse markdown line breaks to wikimedia', () => {
  it('parse null', () => {
    const result = parseMdLinebreaksToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdLinebreaksToWiki('');
    expect(result).toEqual('');
  });

  it('parse single break', () => {
    const result = parseMdLinebreaksToWiki('\n');
    expect(result).toEqual('');
  });

  it('parse double break', () => {
    const result = parseMdLinebreaksToWiki('\n\n');
    expect(result).toEqual('<br/>');
  });

  it('parse multi breaks', () => {
    const result = parseMdLinebreaksToWiki('\n\n\n\n\n\n');
    expect(result).toEqual('<br/><br/>');
  });
});

describe('parse markdown to wiki', () => {
  it('parse null', () => {
    const result = parseMdToWiki(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdToWiki('');
    expect(result).toEqual('');
  });

  it('parse complete text', () => {
    const markdown = '#title\n' +
      'this is a **bold text** and this is an _italic text_.\n\n' +
      'this is a ***bold and italic text***\n\n\n' +
      'this is a [link](#)\n\n' +
      'and finally this is a [**bold link**](#)';

    const parsed = '=== title ===' +
      'this is a \'\'\'bold text\'\'\' and this is an \'\'italic text\'\'.<br/>' +
      'this is a \'\'\'\'bold and italic text\'\'\'\'<br/><br/>' +
      'this is a [# link]<br/>' +
      'and finally this is a [# \'\'\'link\'\'\']';

    const result = parseMdToWiki(markdown);
    expect(result).toEqual(parsed);
  });
});
