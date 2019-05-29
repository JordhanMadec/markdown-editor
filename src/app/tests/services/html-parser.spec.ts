import parseMdToHtml, {
  parseMdBoldToHtml,
  parseMdItalicToHtml,
  parseMdLinebreaksToHtml,
  parseMdLinkToHtml,
  parseMdTitleToHtml
} from '../../services/html-parser.service';

describe('parse markdown title to html', () => {
  it('parse null', () => {
    const result = parseMdTitleToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdTitleToHtml('');
    expect(result).toEqual('');
  });

  it('parse level 1 title with line break', () => {
    const result = parseMdTitleToHtml('#title\n');
    expect(result).toEqual('<h1>title</h1>');
  });

  it('parse level 1 title', () => {
    const result = parseMdTitleToHtml('#title');
    expect(result).toEqual('<h1>title</h1>');
  });

  it('parse level 2 title', () => {
    const result = parseMdTitleToHtml('##title');
    expect(result).toEqual('<h2>title</h2>');
  });

  it('parse level 3 title', () => {
    const result = parseMdTitleToHtml('###title');
    expect(result).toEqual('<h3>title</h3>');
  });

  it('parse level 4 title', () => {
    const result = parseMdTitleToHtml('####title');
    expect(result).toEqual('<h4>title</h4>');
  });

  it('parse level 5 title', () => {
    const result = parseMdTitleToHtml('#####title');
    expect(result).toEqual('<h5>title</h5>');
  });

  it('parse level 6 title', () => {
    const result = parseMdTitleToHtml('######title');
    expect(result).toEqual('<h6>title</h6>');
  });
});

describe('parse markdown bold to html', () => {
  it('parse null', () => {
    const result = parseMdBoldToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdBoldToHtml('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdBoldToHtml('**bold**');
    expect(result).toEqual('<strong>bold</strong>');
  });

  it('parse single line alternate', () => {
    const result = parseMdBoldToHtml('__bold__');
    expect(result).toEqual('<strong>bold</strong>');
  });

  it('parse multi line', () => {
    const result = parseMdBoldToHtml('**bold\nbold**');
    expect(result).toEqual('**bold\nbold**');
  });

  it('parse multi line alternate', () => {
    const result = parseMdBoldToHtml('__bold\nbold__');
    expect(result).toEqual('__bold\nbold__');
  });
});

describe('parse markdown italic to html', () => {
  it('parse null', () => {
    const result = parseMdItalicToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdItalicToHtml('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdItalicToHtml('*italic*');
    expect(result).toEqual('<em>italic</em>');
  });

  it('parse single line alternate', () => {
    const result = parseMdItalicToHtml('_italic_');
    expect(result).toEqual('<em>italic</em>');
  });

  it('parse multi line', () => {
    const result = parseMdItalicToHtml('*italic\nitalic*');
    expect(result).toEqual('*italic\nitalic*');
  });

  it('parse multi line alternate', () => {
    const result = parseMdItalicToHtml('_italic\nitalic_');
    expect(result).toEqual('_italic\nitalic_');
  });
});

describe('parse markdown link to html', () => {
  it('parse null', () => {
    const result = parseMdLinkToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdLinkToHtml('');
    expect(result).toEqual('');
  });

  it('parse single line', () => {
    const result = parseMdLinkToHtml('[link](url)');
    expect(result).toEqual('<a href="url">link</a>');
  });

  it('parse multi line', () => {
    const result = parseMdLinkToHtml('[link\n](url)');
    expect(result).toEqual('[link\n](url)');
  });
});

describe('parse markdown line breaks to html', () => {
  it('parse null', () => {
    const result = parseMdLinebreaksToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdLinebreaksToHtml('');
    expect(result).toEqual('');
  });

  it('parse single break', () => {
    const result = parseMdLinebreaksToHtml('\n');
    expect(result).toEqual('');
  });

  it('parse double break', () => {
    const result = parseMdLinebreaksToHtml('\n\n');
    expect(result).toEqual('<br/>');
  });

  it('parse multi breaks', () => {
    const result = parseMdLinebreaksToHtml('\n\n\n\n\n\n');
    expect(result).toEqual('<br/><br/>');
  });
});

describe('parse markdown to html', () => {
  it('parse null', () => {
    const result = parseMdToHtml(null);
    expect(result).toEqual('');
  });

  it('parse empty string', () => {
    const result = parseMdToHtml('');
    expect(result).toEqual('');
  });

  it('parse complete text', () => {
    const markdown = '#title\n' +
      'this is a **bold text** and this is an _italic text_.\n\n' +
      'this is a ***bold and italic text***\n\n\n' +
      'this is a [link](#)\n\n' +
      'and finally this is a [**bold link**](#)';

    const parsed = '<h1>title</h1>' +
      'this is a <strong>bold text</strong> and this is an <em>italic text</em>.<br/>' +
      'this is a <strong><em>bold and italic text</em></strong><br/><br/>' +
      'this is a <a href="#">link</a><br/>' +
      'and finally this is a <a href="#"><strong>link</strong></a>';

    const result = parseMdToHtml(markdown);
    expect(result).toEqual(parsed);
  });
});
