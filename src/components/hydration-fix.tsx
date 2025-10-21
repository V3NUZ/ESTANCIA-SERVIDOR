'use client';

import { useEffect } from 'react';

export function HydrationFix() {
  useEffect(() => {
    const cleanUnwantedAttributes = () => {
      const problematicAttributes = ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
      
      problematicAttributes.forEach(attr => {
        const elements = document.querySelectorAll(`[${attr}]`);
        elements.forEach(element => element.removeAttribute(attr));
      });
    };

    // Ejecutar limpieza inmediata y con retrasos
    cleanUnwantedAttributes();
    const timeouts = [100, 500, 1000].map(delay => setTimeout(cleanUnwantedAttributes, delay));

    // Observador para cambios futuros
    const observer = new MutationObserver(() => {
      setTimeout(cleanUnwantedAttributes, 0);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
    });

    return () => {
      timeouts.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return null;
}