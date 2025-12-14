import { useEffect } from 'react';

/**
 * Copyright Protection Component
 * 
 * Note: These measures are deterrents, not foolproof protection.
 * Determined scrapers can bypass these, but they help prevent casual copying.
 */
const CopyrightProtection = () => {
  useEffect(() => {
    // Copyright notice in console
    const copyrightNotice = `
%c⚠️ COPYRIGHT NOTICE ⚠️
%c
This website and its content are protected by copyright law.
© ${new Date().getFullYear()} Marino Corporation Of India. All rights reserved.

Unauthorized copying, reproduction, or distribution of this website's content
is strictly prohibited and may result in legal action.

For licensing or usage inquiries, please contact:
marinocoindia@gmail.com
    `;
    
    console.log(
      copyrightNotice,
      'color: #FFEB3B; font-size: 16px; font-weight: bold;',
      'color: #fff; font-size: 12px;'
    );

    // Disable right-click context menu (deterrent)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on input/textarea elements for better UX
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }
      e.preventDefault();
      return false;
    };

    // Disable common keyboard shortcuts for copying
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12 (Developer Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+I (Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+U (View Source) - Note: This can be bypassed
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Disable Ctrl+S (Save Page)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };

    // Text selection is now allowed for better user experience

    // Disable drag and drop of images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Add watermark overlay on images (optional - can be resource intensive)
    const addImageProtection = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add CSS to prevent image dragging
        img.style.userSelect = 'none';
        img.style.webkitUserSelect = 'none';
        img.style.pointerEvents = 'auto';
        
        // Prevent image context menu
        img.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          return false;
        });
      });
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    
    // Add image protection after a short delay to ensure images are loaded
    setTimeout(addImageProtection, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // Add CSS to prevent image dragging only
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
        pointer-events: auto;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CopyrightProtection;
