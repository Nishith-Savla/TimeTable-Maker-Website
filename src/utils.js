const BATCHES_REGEX = /^[CMEI]E?[1-3]/;
const NBSP = "\xa0";

const getShortFormOfName = name => {
  const splitNames = name.split(". ");
  return splitNames[0] + splitNames[1] + splitNames[2][0];
};

const containsLab = cell => {
  const labRegex = / (lab|workshop)\)?( \(\d{1,2}\))?$/i;
  return cell?.draggedTexts?.some(draggedText => labRegex.test(draggedText));
};

const columnWidths = [8, 14, 14, 4, 14, 14, 4, 14, 14];

const placeCursorAtPosition = (e, func) => {
  func(e);

  // const nRange = document.createRange();
  // nRange.setStart(e.target.childNodes[0], offset);
  // nRange.collapse(true);

  // sel.removeAllRanges();
  // sel.addRange(nRange);

  const sel = window.getSelection();
  const offset = sel.getRangeAt(0).startOffset;

  const range = document.createRange();
  range.setStart(e.target.firstChild, offset);
  range.collapse(true);
  // nRange.move("character", offset);
  // nRange.select(true);
  // e.target.setSelectionRange(offset, offset);

  // sel.removeAllRanges();
  sel.addRange(range);
};

const allowDrop = ev => ev.preventDefault();

const drag = ev => ev.dataTransfer.setData("text", ev.target.id);

const downloadJsonFile = (
  data,
  filename = "download.json",
  jsonStringifySpace
) => {
  // Creating a blob object from non-blob data using the Blob constructor
  const blob = new Blob([JSON.stringify(data, null, jsonStringifySpace)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  // Create a new anchor element
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  a.remove();
};

export {
  BATCHES_REGEX,
  NBSP,
  getShortFormOfName,
  containsLab,
  columnWidths,
  placeCursorAtPosition,
  allowDrop,
  drag,
  downloadJsonFile,
};
