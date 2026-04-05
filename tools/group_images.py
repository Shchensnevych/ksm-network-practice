import re
import os

def update_lection2():
    path = 'Lection2.html'
    if not os.path.exists(path):
        print(f"File {path} not found.")
        return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern for figs 2.5 and 2.6
    pattern1 = r'(<div style="text-align:center; margin: 15pt 0;">\s*<div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">\s*<img src="assets/lection2/fig_2_5_optical_adapter.png".+?</div>\s*<p class="image-caption">Рис. 2.5. Оптичний пачкорд типу SC \(Оптичний адаптер\)</p>\s*</div>)\s*(<div style="text-align:center; margin: 15pt 0;">\s*<div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">\s*<img src="assets/lection2/fig_2_6_external_patchcord.png".+?</div>\s*<p class="image-caption">Рис. 2.6. Зовнішній патч-корд з кевларом</p>\s*</div>)'
    
    replacement1 = r'''<div class="image-row">
  <div style="text-align:center;">
    <div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">
      <img src="assets/lection2/fig_2_5_optical_adapter.png" alt="Рис. 2.5. Оптичний адаптер" class="img-medium" style="max-width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <p class="image-caption">Рис. 2.5. Оптичний пачкорд типу SC (Оптичний адаптер)</p>
  </div>
  <div style="text-align:center;">
    <div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">
      <img src="assets/lection2/fig_2_6_external_patchcord.png" alt="Рис. 2.6. Зовнішній патч-корд з кевларом" class="img-medium" style="max-width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <p class="image-caption">Рис. 2.6. Зовнішній патч-корд з кевларом</p>
  </div>
</div>'''

    # Pattern for figs 2.8 and 2.9
    pattern2 = r'(<div style="text-align:center; margin: 15pt 0;">\s*<div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">\s*<img src="assets/lection2/fig_2_8_fbt_splitter.png".+?</div>\s*<p class="image-caption">Рис. 2.8. Зварний дільник сигналу FBT \(крупним планом\)</p>\s*</div>)\s*(<div style="text-align:center; margin: 15pt 0;">\s*<div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">\s*<img src="assets/lection2/fig_2_9_plc_splitter.png".+?</div>\s*<p class="image-caption">Рис. 2.9. Планарний дільник сигналу PLC \(крупним планом\)</p>\s*</div>)'
    
    replacement2 = r'''<div class="image-row">
  <div style="text-align:center;">
    <div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">
      <img src="assets/lection2/fig_2_8_fbt_splitter.png" alt="Рис. 2.8. Зварний дільник FBT" style="max-width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <p class="image-caption">Рис. 2.8. Зварний дільник сигналу FBT (крупним планом)</p>
  </div>
  <div style="text-align:center;">
    <div style="border: 1.5pt dashed #B0C4DE; padding: 10pt; border-radius: 6px; margin-bottom: 8pt;">
      <img src="assets/lection2/fig_2_9_plc_splitter.png" alt="Рис. 2.9. Планарний дільник PLC" style="max-width: 100%; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <p class="image-caption">Рис. 2.9. Планарний дільник сигналу PLC (крупним планом)</p>
  </div>
</div>'''

    new_content = re.sub(pattern1, replacement1, content, flags=re.DOTALL)
    new_content = re.sub(pattern2, replacement2, new_content, flags=re.DOTALL)

    if new_content != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Successfully updated Lection2.html")
    else:
        print("No changes made. Patterns might not match.")

if __name__ == "__main__":
    update_lection2()
