export function customReadingTime({ content, options}) {
  const wordsPerMinute = options.wordsPerMinute || 300;
  const codeWordsPerMinute = options.codeWordsPerMinute || 150;
  
  let textWords = 0;
  let codeWords = 0;
  
  const codeBlockRegex = /```[\s\S]*?```/g;
  
  const codeBlocks = content.match(codeBlockRegex) || [];
  
  const contentWithoutCode = content.replace(codeBlockRegex, '');
  
  textWords = contentWithoutCode.split(/\s+/).filter(word => word).length;
  
  codeWords = codeBlocks.reduce((count, block) => count + block.split(/\s+/).length, 0);
  
  const textReadingTime = textWords / wordsPerMinute;
  const codeReadingTime = codeWords / codeWordsPerMinute;
  
  return {
    minutes: textReadingTime + codeReadingTime,
  };
};
