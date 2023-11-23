export const DOCS_BODY_CLASS = "mosaic-documentation-body";
export const DOCS_CODELINE_CLASS = "mosaic-documentation-code-line";
export const DOCS_CODEBLOCK_CLASS = "mosaic-documentation-code-block";
export const DOCS_TITLE_CLASS = "mosaic-documentation-title";

export const DOCS_PAGE_STYLE = `
  .${DOCS_BODY_CLASS},
  .${DOCS_TITLE_CLASS} {
    color: #333333 !important;
    font-family: Arial !important;
    cursor: text;
  }
  .${DOCS_BODY_CLASS} {
    font-size: 14px;
    line-height: 24px;
  }
  .${DOCS_TITLE_CLASS} {
    margin: 20px 0 8px;
    padding: 0;
    position: relative;
  }
  h2.${DOCS_TITLE_CLASS} {
    border-bottom: 1px solid rgba(0,0,0,.1);
    font-size: 24px;
    padding-bottom: 4px;
  }
  h3.${DOCS_TITLE_CLASS} {
    font-size: 20px;
  }
  .${DOCS_BODY_CLASS} code.${DOCS_CODELINE_CLASS},
  .${DOCS_BODY_CLASS} code.${DOCS_CODEBLOCK_CLASS} {
    background-color: #F8F8F8;
    font-family: "Operator Mono","Fira Code Retina","Fira Code","FiraCode-Retina","Andale Mono","Lucida Console",Consolas,Monaco,monospace;
    font-size: 13px;
    padding: 4px;
  }
  .${DOCS_BODY_CLASS} code.${DOCS_CODEBLOCK_CLASS} {
    background-color: #F8F8F8;
    color: rgba(51,51,51,0.9);
    display: flex;
    padding: 8px;
    white-space: pre-line;
  }
  .icon-wrapper {
    align-items: center;
    display: flex;
  }
  .icon-wrapper > span {
    color: #333333 !important;
    font-family: Arial !important;
    font-size: 12px;
    margin-left: 4px;
  }
  .stories-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .stories-wrapper > * {
    margin: 8px;
  }
  .typography-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
