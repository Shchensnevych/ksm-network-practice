"""
Скрипт для виправлення правопису у навчальних матеріалах.
Замінює застарілі форми на нові відповідно до нового українського правопису (2019).
"""
import os
import re

# Словник замін: старе написання -> нове написання
# Regex-патерн захоплює першу літеру для збереження регістру
SPELLING_RULES = [
    # проект -> проєкт (всі словоформи: проектування, проекту, проектів тощо)
    (r'([Пп])роект', r'\1роєкт'),
]

def fix_spelling(file_path):
    """Виправляє правопис у вказаному файлі."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    for pattern, replacement in SPELLING_RULES:
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        # Підрахунок кількості замін
        count = len(re.findall(SPELLING_RULES[0][0], content))
        print(f"  [+] {file_path} - {count} zamin")
    else:
        print(f"  [-] {file_path} - no changes")

def main():
    target_dir = '.'
    print("=== Виправлення правопису ===\n")
    for root, dirs, files in os.walk(target_dir):
        # Пропускаємо архівні та допоміжні папки
        for skip in ('extra', 'tools', '.git'):
            if skip in dirs:
                dirs.remove(skip)

        for file in files:
            if file.endswith(('.html', '.md', '.txt')):
                fix_spelling(os.path.join(root, file))

    print("\nГотово!")

if __name__ == "__main__":
    main()
