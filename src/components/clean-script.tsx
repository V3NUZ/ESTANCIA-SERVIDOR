'use client'

export function CleanScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            // Clean up any console errors or warnings
            const originalError = console.error;
            console.error = function(...args) {
              if (args[0] && typeof args[0] === 'string' && args[0].includes('Warning:')) {
                return;
              }
              originalError.apply(console, args);
            };
          }
        `
      }}
    />
  );
}