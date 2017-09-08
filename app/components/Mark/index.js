import React from  'react';

export default (text, input) => {
    const searchLen = input.length;
    const matchesLen = text.match(new RegExp(input, 'g')).length;
    let index = text.indexOf(input);
    let result = ['<span>' + text.substring(0, index) + '</span>'];
    for (let i = 0; i < matchesLen; i++) {
        result.push('<mark>' + text.substr(index, searchLen) + '</mark>');
        if (i + 1 === matchesLen) { // last match - can close
            result.push('<span>' + text.substring(index + searchLen) + '</span>');
        } else { // prepare for next iteration
            const currentIndex = index;
            index = text.indexOf(input, index + searchLen);
            result.push('<span>' + text.substring(currentIndex + searchLen, index) + '</span>');
        }
    }
    return (
        <div dangerouslySetInnerHTML={{ __html: result.join('') }}/>
    );
};
