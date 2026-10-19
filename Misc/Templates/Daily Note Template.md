---
type: journal
---
<%*
const file = tp.file.find_tfile("Quotes");
const content = await app.vault.read(file);
const quotes = content
  .split(/\n\s*\n/)
  .map(b => b.trim())
  .filter(b => b.startsWith(">"));
tR += quotes[Math.floor(Math.random() * quotes.length)] ?? "";
%>

![[Today's Fleeting Notes.base]]

![[Daily Tasks.base]]
