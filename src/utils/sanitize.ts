const ALLOWED_TAGS = {
  p: true,
  br: true,
  div: true,
  span: true,
  a: true,
  b: true,
  i: true,
  strong: true,
  em: true,
};

const ALLOWED_ATTRIBUTES = {
  a: ['href', 'target', 'rel'],
  img: ['src', 'alt', 'title'],
};

export const sanitizeHTML = (dirty: string): string => {
  const doc = new DOMParser().parseFromString(dirty, 'text/html');
  const clean = sanitizeNode(doc.body);
  return clean.innerHTML;
};

const sanitizeNode = (node: Node): Node => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node;
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return document.createTextNode('');
  }

  const element = node as Element;
  const tagName = element.tagName.toLowerCase();

  if (!ALLOWED_TAGS[tagName]) {
    return document.createTextNode(element.textContent || '');
  }

  const cleanElement = document.createElement(tagName);

  // Copy allowed attributes
  if (ALLOWED_ATTRIBUTES[tagName]) {
    ALLOWED_ATTRIBUTES[tagName].forEach(attr => {
      if (element.hasAttribute(attr)) {
        const value = element.getAttribute(attr);
        if (attr === 'href' || attr === 'src') {
          // Validate URLs
          try {
            const url = new URL(value);
            if (url.protocol === 'http:' || url.protocol === 'https:') {
              cleanElement.setAttribute(attr, value);
            }
          } catch {
            // Invalid URL, skip
          }
        } else {
          cleanElement.setAttribute(attr, value);
        }
      }
    });
  }

  // Recursively sanitize child nodes
  Array.from(element.childNodes).forEach(child => {
    cleanElement.appendChild(sanitizeNode(child));
  });

  return cleanElement;
};

export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>"'&]/g, (char) => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      case '&': return '&amp;';
      default: return char;
    }
  });
};