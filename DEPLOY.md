# Публикация на GitHub Pages

## Варианты имени репозитория

Вы можете использовать имя `ballelas` или `ballelas.ru` - оба варианта валидны для GitHub.

### Вариант 1: Простое имя (рекомендуется)
**Имя репозитория:** `ballelas`

**URL после публикации:**
- `https://ваш-username.github.io/ballelas/`

### Вариант 2: С доменом
**Имя репозитория:** `ballelas.ru`

**URL после публикации:**
- `https://ваш-username.github.io/ballelas.ru/`
- Или настроить кастомный домен `ballelas.ru` (см. ниже)

## Пошаговая инструкция

### 1. Создание репозитория на GitHub

1. Перейдите на https://github.com/new
2. Создайте новый репозиторий:
   - **Repository name:** `ballelas` (или `ballelas.ru`)
   - **Visibility:** Public (для бесплатного GitHub Pages)
   - НЕ создавайте README, .gitignore или лицензию (они уже есть)

### 2. Подключение локального репозитория к GitHub

```bash
# Добавить remote (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/ballelas.git

# Или если используете SSH:
# git remote add origin git@github.com:YOUR_USERNAME/ballelas.git

# Проверить remote
git remote -v

# Отправить код
git push -u origin main
```

### 3. Настройка GitHub Pages

1. Перейдите в настройки репозитория: `Settings` → `Pages`
2. В разделе **Source** выберите:
   - **Branch:** `main` (или `master`)
   - **Folder:** `/ (root)` (пока не настроен build)
3. Нажмите **Save**

### 4. Настройка Vite для GitHub Pages

GitHub Pages работает со статическими файлами, нужно настроить Vite для сборки:

1. Обновите `vite.config.js` (уже сделано)
2. После сборки (`npm run build`) файлы будут в папке `dist/`

### 5. Автоматическая публикация через GitHub Actions (рекомендуется)

Создайте файл `.github/workflows/deploy.yml` для автоматической сборки и публикации.

### 6. Настройка кастомного домена (опционально)

Если хотите использовать домен `ballelas.ru`:

1. В настройках GitHub Pages добавьте кастомный домен: `ballelas.ru`
2. Настройте DNS записи у вашего регистратора домена:
   ```
   Тип: A
   Записи:
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Или используйте CNAME:
   ```
   Тип: CNAME
   Имя: @ или www
   Значение: YOUR_USERNAME.github.io
   ```

## Автоматическая публикация (рекомендуется)

В проекте уже настроен GitHub Actions workflow (`.github/workflows/deploy.yml`).

После того как вы:
1. Создали репозиторий на GitHub
2. Подключили remote и запушили код

GitHub Actions автоматически:
- Соберет проект при каждом push в `main`
- Опубликует его на GitHub Pages

**Важно:** После первого push нужно включить GitHub Pages в настройках:
- Settings → Pages → Source: выберите "GitHub Actions"

## Переименование проекта (если нужно)

Если хотите изменить имя репозитория на GitHub:

```bash
# 1. Переименуйте репозиторий на GitHub.com (Settings → General → Repository name)

# 2. Обновите remote URL локально
git remote set-url origin https://github.com/YOUR_USERNAME/НОВОЕ_ИМЯ.git

# 3. Если репозиторий НЕ называется username.github.io, 
#    раскомментируйте base в vite.config.js:
#    base: '/НОВОЕ_ИМЯ/',
```

## Итого: что делать прямо сейчас

1. **Имя репозитория:** Можете использовать `ballelas` - это отличное имя!
2. Создайте репозиторий на GitHub с этим именем
3. Подключите remote и запушите код
4. Включите GitHub Pages в настройках репозитория
5. Сайт будет доступен по адресу: `https://ваш-username.github.io/ballelas/`

