'use client';

import { useEffect } from 'react';

export function HydrationFix() {
  useEffect(() => {
<<<<<<< HEAD
    // Función para limpiar atributos no deseados
    const cleanUnwantedAttributes = () => {
      // Eliminar atributos bis_skin_checked
      const elementsWithBis = document.querySelectorAll('[bis_skin_checked]');
      elementsWithBis.forEach(element => {
        element.removeAttribute('bis_skin_checked');
      });

      // También limpiar otros atributos problemáticos que las extensiones puedan añadir
=======
    const cleanUnwantedAttributes = () => {
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
      const problematicAttributes = ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'];
      
      problematicAttributes.forEach(attr => {
        const elements = document.querySelectorAll(`[${attr}]`);
<<<<<<< HEAD
        elements.forEach(element => {
          element.removeAttribute(attr);
        });
      });
    };

    // Ejecutar la limpieza inmediatamente
    cleanUnwantedAttributes();

    // También ejecutar después de múltiples retrasos para asegurar cobertura completa
    const timeouts = [100, 500, 1000, 2000].map(delay => 
      setTimeout(cleanUnwantedAttributes, delay)
    );

    // Observador para detectar cambios en el DOM y limpiar atributos
    const observer = new MutationObserver((mutations) => {
      let shouldClean = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              // Verificar si el nuevo elemento o sus hijos tienen atributos problemáticos
              if (element.hasAttribute('bis_skin_checked') || 
                  element.hasAttribute('data-new-gr-c-s-check-loaded') ||
                  element.hasAttribute('data-gr-ext-installed')) {
                shouldClean = true;
              }
              
              // Verificar hijos
              const problemChildren = element.querySelectorAll('[bis_skin_checked], [data-new-gr-c-s-check-loaded], [data-gr-ext-installed]');
              if (problemChildren.length > 0) {
                shouldClean = true;
              }
            }
          });
        } else if (mutation.type === 'attributes') {
          const element = mutation.target as Element;
          if (['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed'].includes(mutation.attributeName || '')) {
            shouldClean = true;
          }
        }
      });

      if (shouldClean) {
        // Usar setTimeout para evitar conflictos con React
        setTimeout(cleanUnwantedAttributes, 0);
      }
    });

    // Empezar a observar el documento con mayor cobertura
=======
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

>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
    });

<<<<<<< HEAD
    // También observar el head
    if (document.head) {
      observer.observe(document.head, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['bis_skin_checked', 'data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
      });
    }

    // Limpiar al desmontar
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
=======
    return () => {
      timeouts.forEach(clearTimeout);
>>>>>>> 28cf33f0c3aa9ccad02f3ad92742a9e5e0030a86
      observer.disconnect();
    };
  }, []);

  return null;
}