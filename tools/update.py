import re
import os

def update_file(path, replacements):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = re.sub(old, new, content)
        
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# Lection 2 updates
l2_replacements = [
    (r'<p><em>План вивчення:</em><br>\s*1\.\s*(.+?)<br>\s*2\.\s*(.+?)<br>\s*3\.\s*(.+?)<br>\s*4\.\s*(.+?)</p>',
     r'<h3 class="center">План вивчення:</h3>\n<ol>\n  <li>\1</li>\n  <li>\2</li>\n  <li>\3</li>\n  <li>\4</li>\n</ol>'),
]
update_file('Lection2.html', l2_replacements)

# Lection 3 updates
l3_replacements = [
    # Plan
    (r'<p><em>План вивчення:</em><br>\s*1\.\s*(.+?)<br>\s*2\.\s*(.+?)<br>\s*3\.\s*(.+?)</p>',
     r'<h3 class="center">План вивчення:</h3>\n<ol>\n  <li>\1</li>\n  <li>\2</li>\n  <li>\3</li>\n</ol>'),
    
    # Table Responsive
    (r'(<p class="table-caption"><strong>Таблиця 3\.\d\.</strong>.+?</p>)\s*<table class="sim-table"',
     r'\1\n<div class="table-responsive">\n<table class="sim-table"'),
    (r'</table>', r'</table>\n</div>'),
    
    # Mermaid fix syntax
    (r'----\|', r'---|'),
    (r'---- ', r'--- '),
    
    # Tables Refactoring
    (r'<b style="color:#0d6efd"><span style="color:#0d6efd;font-size:10pt">● </span>', r'<b class="sym-in"><span class="sym-in">● </span>'),
    (r'<span style="color:#fd7e14;font-size:10pt">◆ </span>', r'<span class="sym-fbt">◆ </span>'),
    (r'<b style="color:#dc3545"><span style="color:#dc3545;font-size:10pt">● </span>', r'<b class="sym-out"><span class="sym-out">● </span>'),
    (r'<b style="color:#198754"><span style="color:#198754;font-size:10pt">● </span>', r'<b class="sym-tran"><span class="sym-tran">● </span>'),
    (r'<span style="color:#6f42c1;font-size:10pt">■ </span>', r'<span class="sym-plc">■ </span>'),
    (r'<b style="color:#dc3545; font-size:13pt"><span style="color:#dc3545;font-size:10pt">■ </span>', r'<b class="sym-out"><span class="sym-out">■ </span>'),
    (r'<span style="color:#0d6efd;font-size:10pt">● </span>', r'<span class="sym-in">● </span>'),
    (r'<span style="color:#dc3545;font-size:10pt">● </span>', r'<span class="sym-out">● </span>'),
    (r'<span style="color:#198754;font-size:10pt">● </span>', r'<span class="sym-tran">● </span>'),
    (r'<span style="color:#dc3545;font-size:10pt">■ </span>', r'<span class="sym-out">■ </span>'),
]
update_file('Lection3.html', l3_replacements)
print("Updated successfully!")
