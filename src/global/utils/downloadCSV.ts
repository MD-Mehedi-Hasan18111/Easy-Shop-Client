export const downloadCSV = (data: string, filename: string): void => {
  const blob = new Blob([data], { type: 'text/csv' });

  if ((navigator as any).msSaveOrOpenBlob) {
    // For IE and Edge browsers
    (navigator as any).msSaveOrOpenBlob(blob, filename);
  } else {
    // For other browsers
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a); // Clean up: remove the <a> element
  }
};
